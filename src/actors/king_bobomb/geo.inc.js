import { GEO_ANIMATED_PART, GEO_ASM, GEO_BILLBOARD, GEO_CLOSE_NODE, GEO_DISPLAY_LIST, GEO_END, GEO_OPEN_NODE, GEO_SCALE, GEO_SHADOW, LAYER_ALPHA, LAYER_OPAQUE } from "../../engine/GeoLayout"
import { geo_update_held_mario_pos } from "../../game/behaviors/king_bobomb.inc"
import { SHADOW_CIRCLE_4_VERTS } from "../../game/Shadow"
import { king_bobomb_seg5_dl_0500A4F0, king_bobomb_seg5_dl_0500A5D8, king_bobomb_seg5_dl_0500A6C0, king_bobomb_seg5_dl_0500A7A8, king_bobomb_seg5_dl_0500A890, king_bobomb_seg5_dl_0500A978, king_bobomb_seg5_dl_0500AD08, king_bobomb_seg5_dl_0500B068, king_bobomb_seg5_dl_0500B188, king_bobomb_seg5_dl_0500B2D0, king_bobomb_seg5_dl_0500B418, king_bobomb_seg5_dl_0500B6C0 } from "./model.inc"

export const king_bobomb_geo = () => {return [
    GEO_SHADOW(SHADOW_CIRCLE_4_VERTS, 0x96, 300),
    GEO_OPEN_NODE(),
       GEO_SCALE(0x00, 16384),
       GEO_OPEN_NODE(),
          GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
          GEO_OPEN_NODE(),
             GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
             GEO_OPEN_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                GEO_OPEN_NODE(),
                   GEO_BILLBOARD(),
                   GEO_OPEN_NODE(),
                      GEO_DISPLAY_LIST(LAYER_ALPHA, king_bobomb_seg5_dl_0500B188),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, -243, 0, null),
                GEO_OPEN_NODE(),
                   GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                   GEO_OPEN_NODE(),
                      GEO_ANIMATED_PART(LAYER_OPAQUE, 488, 0, 0, null),
                      GEO_OPEN_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 110, 0, 0, null),
                         GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, king_bobomb_seg5_dl_0500AD08),
                         GEO_CLOSE_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                         GEO_OPEN_NODE(),
                            GEO_BILLBOARD(),
                            GEO_OPEN_NODE(),
                               GEO_DISPLAY_LIST(LAYER_ALPHA, king_bobomb_seg5_dl_0500A5D8),
                            GEO_CLOSE_NODE(),
                         GEO_CLOSE_NODE(),
                      GEO_CLOSE_NODE(),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_ALPHA, 0, 0, 0, king_bobomb_seg5_dl_0500B2D0),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, king_bobomb_seg5_dl_0500B418),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, king_bobomb_seg5_dl_0500B6C0),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 243, 0, null),
                GEO_OPEN_NODE(),
                   GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                   GEO_OPEN_NODE(),
                      GEO_ANIMATED_PART(LAYER_OPAQUE, 488, 0, 0, null),
                      GEO_OPEN_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 110, 0, 0, null),
                         GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, king_bobomb_seg5_dl_0500B068),
                         GEO_CLOSE_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                         GEO_OPEN_NODE(),
                            GEO_BILLBOARD(),
                            GEO_OPEN_NODE(),
                               GEO_DISPLAY_LIST(LAYER_ALPHA, king_bobomb_seg5_dl_0500A890),
                            GEO_CLOSE_NODE(),
                         GEO_CLOSE_NODE(),
                      GEO_CLOSE_NODE(),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, -1, 36, null),
                GEO_OPEN_NODE(),
                   GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                   GEO_OPEN_NODE(),
                      GEO_ANIMATED_PART(LAYER_OPAQUE, 548, 0, 0, null),
                      GEO_OPEN_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                         GEO_OPEN_NODE(),
                            GEO_BILLBOARD(),
                            GEO_OPEN_NODE(),
                               GEO_DISPLAY_LIST(LAYER_ALPHA, king_bobomb_seg5_dl_0500A4F0),
                            GEO_CLOSE_NODE(),
                         GEO_CLOSE_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 189, 0, 0, null),
                         GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                            GEO_OPEN_NODE(),
                               GEO_BILLBOARD(),
                               GEO_OPEN_NODE(),
                                  GEO_DISPLAY_LIST(LAYER_ALPHA, king_bobomb_seg5_dl_0500A6C0),
                               GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                            GEO_ASM(0, geo_update_held_mario_pos),
                         GEO_CLOSE_NODE(),
                      GEO_CLOSE_NODE(),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
                GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 1, 36, null),
                GEO_OPEN_NODE(),
                   GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                   GEO_OPEN_NODE(),
                      GEO_ANIMATED_PART(LAYER_OPAQUE, 548, 0, 0, null),
                      GEO_OPEN_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                         GEO_OPEN_NODE(),
                            GEO_BILLBOARD(),
                            GEO_OPEN_NODE(),
                               GEO_DISPLAY_LIST(LAYER_ALPHA, king_bobomb_seg5_dl_0500A7A8),
                            GEO_CLOSE_NODE(),
                         GEO_CLOSE_NODE(),
                         GEO_ANIMATED_PART(LAYER_OPAQUE, 189, 0, 0, null),
                         GEO_OPEN_NODE(),
                            GEO_ANIMATED_PART(LAYER_OPAQUE, 0, 0, 0, null),
                            GEO_OPEN_NODE(),
                               GEO_BILLBOARD(),
                               GEO_OPEN_NODE(),
                                  GEO_DISPLAY_LIST(LAYER_ALPHA, king_bobomb_seg5_dl_0500A978),
                               GEO_CLOSE_NODE(),
                            GEO_CLOSE_NODE(),
                         GEO_CLOSE_NODE(),
                      GEO_CLOSE_NODE(),
                   GEO_CLOSE_NODE(),
                GEO_CLOSE_NODE(),
             GEO_CLOSE_NODE(),
          GEO_CLOSE_NODE(),
       GEO_CLOSE_NODE(),
    GEO_CLOSE_NODE(),
    GEO_END(),
]}