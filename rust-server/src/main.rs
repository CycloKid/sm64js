mod server;

pub mod proto {
    include!(concat!(env!("OUT_DIR"), "/sm64js.rs"));
}

use proto::{sm64_js_msg, Sm64JsMsg};

use actix::prelude::*;
use actix_cors::Cors;
use actix_web::{middleware, web, App, Error, HttpRequest, HttpResponse, HttpServer};
use actix_web_actors::ws;
use prost::Message;
use std::time::{Duration, Instant};

/// How often heartbeat pings are sent
const HEARTBEAT_INTERVAL: Duration = Duration::from_secs(5);

/// How long before lack of client response causes a timeout
const CLIENT_TIMEOUT: Duration = Duration::from_secs(10);

async fn ws_index(
    r: HttpRequest,
    stream: web::Payload,
    srv: web::Data<Addr<server::Sm64JsServer>>,
) -> Result<HttpResponse, Error> {
    ws::start(Sm64JsWsSession::new(srv.get_ref().clone()), &r, stream)
}
pub struct Sm64JsWsSession {
    id: u32,
    hb: Instant,
    addr: Addr<server::Sm64JsServer>,
}

impl Actor for Sm64JsWsSession {
    type Context = ws::WebsocketContext<Self>;

    fn started(&mut self, ctx: &mut Self::Context) {
        self.hb(ctx);

        let addr = ctx.address();
        self.addr
            .send(server::Connect {
                addr: addr.recipient(),
            })
            .into_actor(self)
            .then(|res, act, ctx| {
                match res {
                    Ok(res) => act.id = res,
                    _ => ctx.stop(),
                }
                fut::ready(())
            })
            .wait(ctx);
    }

    fn stopping(&mut self, _: &mut Self::Context) -> Running {
        self.addr.do_send(server::Disconnect { id: self.id });
        Running::Stop
    }
}

/// Handler for `ws::Message`
impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for Sm64JsWsSession {
    fn handle(&mut self, msg: Result<ws::Message, ws::ProtocolError>, ctx: &mut Self::Context) {
        match msg {
            Ok(ws::Message::Ping(msg)) => {
                self.hb = Instant::now();
                ctx.pong(&msg);
            }
            Ok(ws::Message::Pong(_)) => {
                self.hb = Instant::now();
            }
            Ok(ws::Message::Binary(bin)) => {
                let data = Sm64JsMsg::decode(bin.clone()).unwrap();
                match data.message {
                    Some(sm64_js_msg::Message::PingMsg(_)) => {
                        use flate2::{write::ZlibEncoder, Compression};
                        use std::io::Write;

                        let mut encoder = ZlibEncoder::new(Vec::new(), Compression::fast());
                        encoder.write_all(&bin).unwrap();
                        let msg = encoder.finish().unwrap();

                        ctx.binary(msg);
                    }
                    Some(sm64_js_msg::Message::MarioMsg(mario_msg)) => {
                        self.addr.do_send(server::SetData {
                            id: self.id,
                            data: mario_msg,
                        });
                    }
                    Some(sm64_js_msg::Message::ListMsg(_)) => {
                        // TODO
                    }
                    Some(sm64_js_msg::Message::ConnectedMsg(_)) => {
                        // TODO
                    }
                    None => {}
                }
            }
            Ok(ws::Message::Close(reason)) => {
                ctx.close(reason);
                ctx.stop();
            }
            _ => ctx.stop(),
        }
    }
}

impl Sm64JsWsSession {
    fn new(addr: Addr<server::Sm64JsServer>) -> Self {
        Self {
            id: 0,
            hb: Instant::now(),
            addr,
        }
    }

    /// helper method that sends ping to client every second.
    ///
    /// also this method checks heartbeats from client
    fn hb(&self, ctx: &mut <Self as Actor>::Context) {
        ctx.run_interval(HEARTBEAT_INTERVAL, |act, ctx| {
            // check client heartbeats
            if Instant::now().duration_since(act.hb) > CLIENT_TIMEOUT {
                // heartbeat timed out
                println!("Websocket Client heartbeat failed, disconnecting!");

                // stop actor
                ctx.stop();

                // don't try to send a ping
                return;
            }

            ctx.ping(b"");
        });
    }
}

impl Handler<server::Message> for Sm64JsWsSession {
    type Result = ();

    fn handle(&mut self, msg: server::Message, ctx: &mut Self::Context) {
        ctx.binary(msg.0);
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    std::env::set_var("RUST_LOG", "actix_server=info,actix_web=info");
    env_logger::init();

    let server = server::Sm64JsServer::new().start();

    HttpServer::new(move || {
        App::new()
            .data(server.clone())
            .wrap(middleware::Logger::default())
            .service(web::resource("/").route(web::get().to(ws_index)))
    })
    .bind("198.199.74.8:3000")?
    .run()
    .await
}
