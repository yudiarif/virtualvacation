(function(){
    var script = {
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.MapViewer",
  "this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93",
  "this.Container_A99EE20F_B94D_2A5D_41D6_EDC537187D89",
  "this.Container_2DC5EE8E_0F29_D989_4198_B8B8C779512A"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist,this.mainPlayList]); this.playList_5EB99776_5379_2E80_41B1_99BA83AB75BE.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5F21292C_5379_2280_41C0_1716732B9102",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5D6C388F_5379_239F_41D3_E3C64EEC72AB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "Photo Album album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0",
 "id": "album_2C2D73EA_0F27_CF89_41A0_71C40150F734",
 "thumbnailUrl": "media/album_2C2D73EA_0F27_CF89_41A0_71C40150F734_t.png",
 "playList": "this.album_2C2D73EA_0F27_CF89_41A0_71C40150F734_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_143DD8D3_0FDF_599E_41A1_427CEB50CE27",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_5EB91786_5379_2D80_41B3_9A9E8CACC15B",
 "class": "PlayList"
},
{
 "duration": 5000,
 "label": "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0",
 "id": "album_2C2D73EA_0F27_CF89_41A0_71C40150F734_0",
 "thumbnailUrl": "media/album_2C2D73EA_0F27_CF89_41A0_71C40150F734_0_t.jpg",
 "width": 1600,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_2C2D73EA_0F27_CF89_41A0_71C40150F734_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 900
},
{
 "items": [
  "this.PanoramaPlayListItem_5EBC3786_5379_2D80_41B2_91727AF700F1",
  "this.PanoramaPlayListItem_5EBFF795_5379_2D83_41A5_3B6DE9282A30",
  "this.PanoramaPlayListItem_5EB09795_5379_2D83_41CE_33775BC8BEC5",
  "this.PanoramaPlayListItem_5EB037A5_5379_2D80_4198_DF6CBD4B1617",
  {
   "media": "this.album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "id": "effect_991E0CC1_B9F5_5FC4_41D4_315B0264F295",
 "class": "SlideInEffect",
 "easing": "linear",
 "duration": 500,
 "from": "top"
},
{
 "duration": 5000,
 "label": "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0",
 "id": "album_2A83832B_0F58_C88E_41A4_F5946A80892A_0",
 "thumbnailUrl": "media/album_2A83832B_0F58_C88E_41A4_F5946A80892A_0_t.jpg",
 "width": 1600,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_2A83832B_0F58_C88E_41A4_F5946A80892A_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 900
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_14428D59_0FDB_588B_4195_B8915A1A832B_camera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_156A6C01_0FDF_D87A_41A6_0629C667D91A",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_5EB94786_5379_2D80_41C7_04EDC6C5C2D7",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_5EC52776_5379_2E80_41D1_A63AF3B66574, 0)",
   "media": "this.album_2C2D73EA_0F27_CF89_41A0_71C40150F734",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89PhotoAlbumPlayer"
  }
 ],
 "id": "playList_5EC52776_5379_2E80_41D1_A63AF3B66574",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_14428D59_0FDB_588B_4195_B8915A1A832B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_14428D59_0FDB_588B_4195_B8915A1A832B_camera"
  },
  {
   "media": "this.panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_camera"
  },
  {
   "media": "this.panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_camera"
  },
  {
   "media": "this.panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist, 3, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_camera"
  }
 ],
 "id": "ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_5EC6A776_5379_2E80_41D0_9006F761BC86, 0)",
   "media": "this.album_2A83832B_0F58_C88E_41A4_F5946A80892A",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89PhotoAlbumPlayer"
  }
 ],
 "id": "playList_5EC6A776_5379_2E80_41D0_9006F761BC86",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_camera",
 "automaticZoomSpeed": 10
},
{
 "id": "effect_A639ADD6_B9F2_D9CF_41CF_EAD4AE403A7B",
 "class": "SlideInEffect",
 "easing": "linear",
 "duration": 500,
 "from": "bottom"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5E8E7841_5379_2280_41CA_095C641D4767",
 "automaticZoomSpeed": 10
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_A99D420E_B94D_2A5F_41DF_AC8E311ABF99",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F",
 "touchControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD",
 "mouseControlMode": "drag_rotation"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_5EC79776_5379_2E80_41D3_0473DDF7138A, 0)",
   "media": "this.album_2C6A57D2_0F5B_D799_416C_7E33E48BEE75",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89PhotoAlbumPlayer"
  }
 ],
 "id": "playList_5EC79776_5379_2E80_41D3_0473DDF7138A",
 "class": "PlayList"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_5EC5A776_5379_2E80_41B2_3A127DACD3C1, 0)",
   "media": "this.album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89PhotoAlbumPlayer"
  }
 ],
 "id": "playList_5EC5A776_5379_2E80_41B2_3A127DACD3C1",
 "class": "PlayList"
},
{
 "duration": 5000,
 "label": "MODAL5-SLIDE9",
 "id": "album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A_0",
 "thumbnailUrl": "media/album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A_0_t.jpg",
 "width": 4000,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "label": "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0",
 "id": "album_2C6A57D2_0F5B_D799_416C_7E33E48BEE75_0",
 "thumbnailUrl": "media/album_2C6A57D2_0F5B_D799_416C_7E33E48BEE75_0_t.jpg",
 "width": 1600,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_2C6A57D2_0F5B_D799_416C_7E33E48BEE75_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 900
},
{
 "fieldOfViewOverlayInsideColor": "#FFFF00",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "halaman",
 "id": "map_143DD8D3_0FDF_599E_41A1_427CEB50CE27",
 "thumbnailUrl": "media/map_143DD8D3_0FDF_599E_41A1_427CEB50CE27_t.png",
 "width": 2550,
 "fieldOfViewOverlayRadiusScale": 0.17,
 "image": {
  "levels": [
   {
    "url": "media/map_143DD8D3_0FDF_599E_41A1_427CEB50CE27.png",
    "width": 1942,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_143DD8D3_0FDF_599E_41A1_427CEB50CE27_lq.png",
    "width": 199,
    "class": "ImageResourceLevel",
    "height": 328,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Map",
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideOpacity": 0.51,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "height": 4200,
 "overlays": [
  "this.overlay_12D15B5D_0FF9_D88A_4174_8E7AB1DAEEF1",
  "this.overlay_122C0321_0FF9_48BA_41A8_166D1A40E488"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.61,
   "yaw": -176.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "16",
 "id": "panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2",
 "thumbnailUrl": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_156A6C01_0FDF_D87A_41A6_0629C667D91A",
   "x": 1374.64,
   "class": "PanoramaMapLocation",
   "angle": -4.37,
   "y": 1407.5
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_129D9269_0FF8_C88B_41AD_52D6597D59EA",
  "this.overlay_2E7DA430_0F39_489A_4162_F9C4F787359C",
  "this.overlay_2C1B42FF_0F29_C987_4198_7646059A6A6E",
  "this.overlay_2C229E52_0F59_789E_419B_12A988706AD6",
  "this.overlay_2A981FB5_0F5F_D79A_417D_51086F97CD5F",
  "this.overlay_2B620ED2_0F59_399E_41AE_585C0131D23D"
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_143DD8D3_0FDF_599E_41A1_427CEB50CE27",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_5EB99776_5379_2E80_41B1_99BA83AB75BE",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_camera",
 "automaticZoomSpeed": 10
},
{
 "to": "top",
 "id": "effect_991E2CC3_B9F5_5FC5_41DC_0DF77C5749CD",
 "class": "SlideOutEffect",
 "easing": "linear",
 "duration": 500
},
{
 "label": "Photo Album album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0",
 "id": "album_2C634707_0F59_4887_41AC_09934919087B",
 "thumbnailUrl": "media/album_2C634707_0F59_4887_41AC_09934919087B_t.png",
 "playList": "this.album_2C634707_0F59_4887_41AC_09934919087B_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "id": "effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "duration": 400,
 "from": "left"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_156A6C01_0FDF_D87A_41A6_0629C667D91A",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_5EB9B786_5379_2D80_41C2_F2FAA2F325FD",
 "class": "PlayList"
},
{
 "id": "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "duration": 400,
 "from": "left"
},
{
 "viewerArea": "this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89",
 "id": "ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "to": "bottom",
 "id": "effect_A6399DD6_B9F2_D9CF_41E4_66B28C3AF36B",
 "class": "SlideOutEffect",
 "easing": "linear",
 "duration": 500
},
{
 "to": "left",
 "id": "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
 "class": "SlideOutEffect",
 "easing": "quad_in",
 "duration": 400
},
{
 "label": "Photo Album album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0",
 "id": "album_2A83832B_0F58_C88E_41A4_F5946A80892A",
 "thumbnailUrl": "media/album_2A83832B_0F58_C88E_41A4_F5946A80892A_t.png",
 "playList": "this.album_2A83832B_0F58_C88E_41A4_F5946A80892A_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5D7DB861_5379_2280_41B6_31E38DD046EE",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.72,
   "yaw": -0.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2"
  },
  {
   "backwardYaw": 1.43,
   "yaw": 177.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "14",
 "id": "panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2",
 "thumbnailUrl": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_156A6C01_0FDF_D87A_41A6_0629C667D91A",
   "x": 1382.5,
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 2312.86
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_13F594A9_0FE7_C98A_419C_8E9B856AA43C",
  "this.overlay_130E7A4B_0FF9_588F_41AC_F3773C645643"
 ]
},
{
 "duration": 5000,
 "label": "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0",
 "id": "album_2C634707_0F59_4887_41AC_09934919087B_0",
 "thumbnailUrl": "media/album_2C634707_0F59_4887_41AC_09934919087B_0_t.jpg",
 "width": 1600,
 "class": "Photo",
 "image": {
  "levels": [
   {
    "url": "media/album_2C634707_0F59_4887_41AC_09934919087B_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 900
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.43,
   "yaw": 179.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_14428D59_0FDB_588B_4195_B8915A1A832B"
  },
  {
   "backwardYaw": 177.54,
   "yaw": 1.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "11",
 "id": "panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E",
 "thumbnailUrl": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_143DD8D3_0FDF_599E_41A1_427CEB50CE27",
   "x": 1335.36,
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 2602.14
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_14405747_0FEB_4886_419D_3EE335CF18AB",
  "this.overlay_145516BE_0FE9_4989_419C_AE27FBD8CB37"
 ]
},
{
 "label": "Photo Album album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0",
 "id": "album_2C6A57D2_0F5B_D799_416C_7E33E48BEE75",
 "thumbnailUrl": "media/album_2C6A57D2_0F5B_D799_416C_7E33E48BEE75_t.png",
 "playList": "this.album_2C6A57D2_0F5B_D799_416C_7E33E48BEE75_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 3.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5E9FA812_5379_2281_41A9_6463AD6097D4",
 "automaticZoomSpeed": 10
},
{
 "label": "Photo Album MODAL5-SLIDE9",
 "id": "album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A",
 "thumbnailUrl": "media/album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A_t.png",
 "playList": "this.album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.59,
   "yaw": 1.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "7",
 "id": "panorama_14428D59_0FDB_588B_4195_B8915A1A832B",
 "thumbnailUrl": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_143DD8D3_0FDF_599E_41A1_427CEB50CE27",
   "x": 1273.93,
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 3045
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_13EB9E3B_0FE9_788E_41A8_142284AD6125"
 ]
},
{
 "to": "left",
 "id": "effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6",
 "class": "SlideOutEffect",
 "easing": "quad_in",
 "duration": 400
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ]
 },
 "id": "camera_5F2C78FD_5379_2380_41B9_3D13C99B3BF8",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_5EC62776_5379_2E80_41D3_AE777E54F3BD, 0)",
   "media": "this.album_2C634707_0F59_4887_41AC_09934919087B",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89PhotoAlbumPlayer"
  }
 ],
 "id": "playList_5EC62776_5379_2E80_41D3_AE777E54F3BD",
 "class": "PlayList"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFF00",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "dalam denah",
 "id": "map_156A6C01_0FDF_D87A_41A6_0629C667D91A",
 "thumbnailUrl": "media/map_156A6C01_0FDF_D87A_41A6_0629C667D91A_t.png",
 "width": 2550,
 "fieldOfViewOverlayRadiusScale": 0.13,
 "image": {
  "levels": [
   {
    "url": "media/map_156A6C01_0FDF_D87A_41A6_0629C667D91A.png",
    "width": 1942,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_156A6C01_0FDF_D87A_41A6_0629C667D91A_lq.png",
    "width": 199,
    "class": "ImageResourceLevel",
    "height": 328,
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "class": "Map",
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideOpacity": 0.51,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "height": 4200,
 "overlays": [
  "this.overlay_12385D63_0FFB_D8BE_41A5_76BB6441EB4C",
  "this.overlay_12C47C45_0FF9_D8FA_41A9_D87BF0979961"
 ]
},
{
 "playbackBarProgressBackgroundColorDirection": "horizontal",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "transitionMode": "blending",
 "minWidth": 100,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#FFFFFF",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 0.96,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 0.93,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#7453FC"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#7453FC",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "playbackBarBottom": 0,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#FFFF00"
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "horizontal",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": 150,
 "toolTipFontSize": "1.11vmin",
 "right": "1%",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 62,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": 250,
 "playbackBarBorderRadius": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#FFFFFF",
 "toolTipShadowOpacity": 1,
 "minWidth": 75,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 0.96,
 "playbackBarBorderSize": 0,
 "transitionDuration": 500,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "maxHeight": 250,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#7453FC"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "1%",
 "playbackBarBorderColor": "#7453FC",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "visible": false,
 "playbackBarBottom": 0,
 "data": {
  "name": "MapViewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#FFFF00"
 ],
 "maxWidth": 300,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "id": "ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93",
 "scrollBarColor": "#FFFFFF",
 "width": 150,
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "right": "1%",
 "itemMode": "normal",
 "itemPaddingRight": 3,
 "scrollBarVisible": "rollOver",
 "minHeight": 300,
 "horizontalAlign": "left",
 "itemLabelFontFamily": "Arial",
 "itemBorderRadius": 0,
 "verticalAlign": "top",
 "height": 300,
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemOpacity": 1,
 "backgroundColor": [
  "#FFFF00"
 ],
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "backgroundOpacity": 0.2,
 "paddingRight": 20,
 "itemHorizontalAlign": "center",
 "itemThumbnailShadowOpacity": 0.8,
 "itemBackgroundOpacity": 0,
 "minWidth": 150,
 "itemThumbnailBorderRadius": 10,
 "itemThumbnailShadowSpread": 1,
 "propagateClick": false,
 "itemBackgroundColor": [],
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "paddingLeft": 20,
 "maxHeight": 300,
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowVerticalLength": 3,
 "borderSize": 0,
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93_playlist",
 "scrollBarMargin": 2,
 "itemThumbnailShadowBlurRadius": 4,
 "bottom": "1%",
 "itemLabelFontSize": 14,
 "itemVerticalAlign": "middle",
 "itemThumbnailScaleMode": "fit_outside",
 "class": "ThumbnailList",
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemLabelFontColor": "#FFFFFF",
 "gap": 0,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "paddingBottom": 10,
 "data": {
  "name": "ThumbnailList1355"
 },
 "shadow": false,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "itemThumbnailShadow": true,
 "itemLabelGap": 10,
 "itemThumbnailWidth": 75,
 "visible": false,
 "scrollBarWidth": 10,
 "maxWidth": 150,
 "itemThumbnailShadowColor": "#000000"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_A99CB207_B94D_2A4D_419A_4B4F42B23435",
  "this.Container_A99C020C_B94D_2A43_41E2_B8C12B8F0754"
 ],
 "id": "Container_A99EE20F_B94D_2A5D_41D6_EDC537187D89",
 "left": "0%",
 "width": 200,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "--- LEFT PANEL 2"
 },
 "shadow": false,
 "height": "100%",
 "propagateClick": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2DC45E8E_0F29_D989_41A6_DAB9D73C5162"
 ],
 "id": "Container_2DC5EE8E_0F29_D989_4198_B8B8C779512A",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "class": "Container",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2DC5EE8E_0F29_D989_4198_B8B8C779512A, false, 0, null, null, false)",
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "shadow": false,
 "visible": false,
 "propagateClick": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Fullscreen"
 },
 "shadow": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE.png",
 "cursor": "hand"
},
{
 "items": [
  {
   "media": "this.album_2C2D73EA_0F27_CF89_41A0_71C40150F734_0",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_2C2D73EA_0F27_CF89_41A0_71C40150F734_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "media": "this.panorama_14428D59_0FDB_588B_4195_B8915A1A832B",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5EBC3786_5379_2D80_41B2_91727AF700F1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "camera": "this.panorama_14428D59_0FDB_588B_4195_B8915A1A832B_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5EBC3786_5379_2D80_41B2_91727AF700F1"
},
{
 "media": "this.panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5EBFF795_5379_2D83_41A5_3B6DE9282A30, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "camera": "this.panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5EBFF795_5379_2D83_41A5_3B6DE9282A30"
},
{
 "media": "this.panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5EB09795_5379_2D83_41CE_33775BC8BEC5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "camera": "this.panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5EB09795_5379_2D83_41CE_33775BC8BEC5"
},
{
 "media": "this.panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2",
 "class": "PanoramaPlayListItem",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_5EB037A5_5379_2D80_4198_DF6CBD4B1617, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "camera": "this.panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_camera",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_5EB037A5_5379_2D80_4198_DF6CBD4B1617"
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A99D420E_B94D_2A5F_41DF_AC8E311ABF99",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 60,
 "mode": "push",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_A99D420E_B94D_2A5F_41DF_AC8E311ABF99.png",
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Hs visibility"
 },
 "shadow": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F.png",
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 60,
 "mode": "toggle",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Gyroscopic"
 },
 "shadow": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD.png",
 "cursor": "hand"
},
{
 "map": {
  "width": 100,
  "x": 1223.93,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_143DD8D3_0FDF_599E_41A1_427CEB50CE27_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 2995,
  "offsetY": 0,
  "height": 100,
  "offsetX": 0
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1223.93,
  "height": 100,
  "y": 2995,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_143DD8D3_0FDF_599E_41A1_427CEB50CE27_HS_0.png",
     "width": 76,
     "class": "ImageResourceLevel",
     "height": 76
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "id": "overlay_12D15B5D_0FF9_D88A_4174_8E7AB1DAEEF1",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 100,
  "x": 1285.36,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_143DD8D3_0FDF_599E_41A1_427CEB50CE27_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 2552.14,
  "offsetY": 0,
  "height": 100,
  "offsetX": 0
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1285.36,
  "height": 100,
  "y": 2552.14,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_143DD8D3_0FDF_599E_41A1_427CEB50CE27_HS_1.png",
     "width": 76,
     "class": "ImageResourceLevel",
     "height": 76
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "id": "overlay_122C0321_0FF9_48BA_41A8_166D1A40E488",
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2, this.camera_5F21292C_5379_2280_41C0_1716732B9102); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F5BCCDE_0FFB_F989_417F_E8EDAED45C59",
   "pitch": -29.8,
   "yaw": -176.72,
   "distance": 100
  }
 ],
 "id": "overlay_129D9269_0FF8_C88B_41AD_52D6597D59EA",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.35,
   "yaw": -176.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.8
  }
 ]
},
{
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_2DC5EE8E_0F29_D989_4198_B8B8C779512A, true, 0, null, null, false); this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_5EC5A776_5379_2E80_41B2_3A127DACD3C1.set('selectedIndex', -1); }, this); this.playList_5EC5A776_5379_2E80_41B2_3A127DACD3C1.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_1_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.78,
   "yaw": 70.11
  }
 ],
 "id": "overlay_2E7DA430_0F39_489A_4162_F9C4F787359C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 8.35,
   "yaw": 70.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.78
  }
 ]
},
{
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_2DC5EE8E_0F29_D989_4198_B8B8C779512A, true, 0, null, null, false); this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_5EC52776_5379_2E80_41D1_A63AF3B66574.set('selectedIndex', -1); }, this); this.playList_5EC52776_5379_2E80_41D1_A63AF3B66574.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_2_0.png",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45,
   "yaw": 65.36
  }
 ],
 "id": "overlay_2C1B42FF_0F29_C987_4198_7646059A6A6E",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 4.78,
   "yaw": 65.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 21
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.45
  }
 ]
},
{
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_2DC5EE8E_0F29_D989_4198_B8B8C779512A, true, 0, null, null, false); this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_5EC6A776_5379_2E80_41D0_9006F761BC86.set('selectedIndex', -1); }, this); this.playList_5EC6A776_5379_2E80_41D0_9006F761BC86.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_3_0.png",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 65
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.16,
   "yaw": 75.52
  }
 ],
 "id": "overlay_2C229E52_0F59_789E_419B_12A988706AD6",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.06,
   "yaw": 75.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.16
  }
 ]
},
{
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_2DC5EE8E_0F29_D989_4198_B8B8C779512A, true, 0, null, null, false); this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_5EC62776_5379_2E80_41D3_AE777E54F3BD.set('selectedIndex', -1); }, this); this.playList_5EC62776_5379_2E80_41D3_AE777E54F3BD.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_4_0.png",
      "width": 87,
      "class": "ImageResourceLevel",
      "height": 98
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.86,
   "yaw": 58.19
  }
 ],
 "id": "overlay_2A981FB5_0F5F_D79A_417D_51086F97CD5F",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.65,
   "yaw": 58.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.86
  }
 ]
},
{
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_2DC5EE8E_0F29_D989_4198_B8B8C779512A, true, 0, null, null, false); this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_5EC79776_5379_2E80_41D3_0473DDF7138A.set('selectedIndex', -1); }, this); this.playList_5EC79776_5379_2E80_41D3_0473DDF7138A.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_5_0.png",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.16,
   "yaw": 58.5
  }
 ],
 "id": "overlay_2B620ED2_0F59_399E_41AE_585C0131D23D",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.06,
   "yaw": 58.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.16
  }
 ]
},
{
 "items": [
  {
   "media": "this.album_2C634707_0F59_4887_41AC_09934919087B_0",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_2C634707_0F59_4887_41AC_09934919087B_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "transitionMode": "blending",
 "minWidth": 1,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionDuration": 500,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "playbackBarBottom": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowVerticalLength": 0
},
{
 "items": [
  {
   "media": "this.album_2A83832B_0F58_C88E_41A4_F5946A80892A_0",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_2A83832B_0F58_C88E_41A4_F5946A80892A_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2, this.camera_5E9FA812_5379_2281_41A9_6463AD6097D4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.57,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F585CDD_0FFB_F98B_419B_AC77047DEB2E",
   "pitch": -18.12,
   "yaw": -0.61,
   "distance": 100
  }
 ],
 "id": "overlay_13F594A9_0FE7_C98A_419C_8E9B856AA43C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.57,
   "yaw": -0.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E, this.camera_5E8E7841_5379_2280_41CA_095C641D4767); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F5B8CDE_0FFB_F989_41A6_01F4339BED7C",
   "pitch": -37.37,
   "yaw": 177.54,
   "distance": 100
  }
 ],
 "id": "overlay_130E7A4B_0FF9_588F_41AC_F3773C645643",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.02,
   "yaw": 177.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -37.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2, this.camera_5D6C388F_5379_239F_41D3_E3C64EEC72AB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F589CD6_0FFB_F986_41A1_63FABD846789",
   "pitch": -10.34,
   "yaw": 1.43,
   "distance": 100
  }
 ],
 "id": "overlay_14405747_0FEB_4886_419D_3EE335CF18AB",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.12,
   "yaw": 1.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_14428D59_0FDB_588B_4195_B8915A1A832B, this.camera_5D7DB861_5379_2280_41B6_31E38DD046EE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.98,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F58ECD7_0FFB_F986_41AC_586F04F959E7",
   "pitch": -12.8,
   "yaw": 179.59,
   "distance": 100
  }
 ],
 "id": "overlay_145516BE_0FE9_4989_419C_AE27FBD8CB37",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.98,
   "yaw": 179.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0_HS_1_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.8
  }
 ]
},
{
 "items": [
  {
   "media": "this.album_2C6A57D2_0F5B_D799_416C_7E33E48BEE75_0",
   "camera": {
    "scaleMode": "fit_inside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_2C6A57D2_0F5B_D799_416C_7E33E48BEE75_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A_0",
   "camera": {
    "scaleMode": "fit_outside",
    "class": "PhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_2CAD94E5_0F39_49BB_41AF_2C0F89D5A81A_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E, this.camera_5F2C78FD_5379_2380_41B9_3D13C99B3BF8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 05a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.34,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2F590CD5_0FFB_F985_417F_ADE3E7078453",
   "pitch": -20.58,
   "yaw": 1.43,
   "distance": 100
  }
 ],
 "id": "overlay_13EB9E3B_0FE9_788E_41A8_142284AD6125",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.34,
   "yaw": 1.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0_HS_0_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.58
  }
 ]
},
{
 "map": {
  "width": 100,
  "x": 1332.5,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_156A6C01_0FDF_D87A_41A6_0629C667D91A_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 2262.86,
  "offsetY": 0,
  "height": 100,
  "offsetX": 0
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1332.5,
  "height": 100,
  "y": 2262.86,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_156A6C01_0FDF_D87A_41A6_0629C667D91A_HS_0.png",
     "width": 76,
     "class": "ImageResourceLevel",
     "height": 76
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "id": "overlay_12385D63_0FFB_D8BE_41A5_76BB6441EB4C",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 100,
  "x": 1324.64,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_156A6C01_0FDF_D87A_41A6_0629C667D91A_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 1357.5,
  "offsetY": 0,
  "height": 100,
  "offsetX": 0
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1324.64,
  "height": 100,
  "y": 1357.5,
  "width": 100,
  "class": "HotspotMapOverlayImage",
  "image": {
   "levels": [
    {
     "url": "media/map_156A6C01_0FDF_D87A_41A6_0629C667D91A_HS_1.png",
     "width": 76,
     "class": "ImageResourceLevel",
     "height": 76
    }
   ],
   "class": "ImageResource"
  }
 },
 "useHandCursor": true,
 "id": "overlay_12C47C45_0FF9_D8FA_41A9_D87BF0979961",
 "rollOverDisplay": false
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_A99C420C_B94D_2A43_41DA_A0E0CE32E69E",
  "this.IconButton_A99C520C_B94D_2A43_41E7_0938547A306C"
 ],
 "id": "Container_A99CB207_B94D_2A4D_419A_4B4F42B23435",
 "left": "0%",
 "width": 66,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "- COLLAPSE"
 },
 "shadow": false,
 "height": "100%",
 "propagateClick": true,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_A99C120C_B94D_2A43_41C5_B14D9386411A",
  "this.IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0"
 ],
 "id": "Container_A99C020C_B94D_2A43_41E2_B8C12B8F0754",
 "left": "0%",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "paddingRight": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "- EXPANDED"
 },
 "shadow": false,
 "height": "100%",
 "visible": false,
 "propagateClick": false,
 "overflow": "scroll",
 "paddingLeft": 0
},
{
 "maxHeight": 500,
 "children": [
  "this.Container_2DC46E8E_0F29_D989_4195_4AF946FD87DB"
 ],
 "id": "Container_2DC45E8E_0F29_D989_41A6_DAB9D73C5162",
 "left": "15%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "15%",
 "shadowVerticalLength": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 500,
 "scrollBarOpacity": 0.5,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "shadowBlurRadius": 25,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 10,
 "class": "Container",
 "shadowSpread": 1,
 "paddingTop": 10,
 "shadowHorizontalLength": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minWidth": 700,
 "gap": 10,
 "paddingBottom": 10,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadow": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "visible",
 "paddingLeft": 10,
 "maxWidth": 700
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_158EA391_0FD9_4F9A_416D_3BC974DCB4F2_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2F5BCCDE_0FFB_F989_417F_E8EDAED45C59",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2F585CDD_0FFB_F98B_419B_AC77047DEB2E",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_1593271A_0FD9_4889_41A9_C06FEF4104B2_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2F5B8CDE_0FFB_F989_41A6_01F4339BED7C",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2F589CD6_0FFB_F986_41A1_63FABD846789",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_155449C8_0FD8_DB8A_41A2_05502B69CC6E_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2F58ECD7_0FFB_F986_41AC_586F04F959E7",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_14428D59_0FDB_588B_4195_B8915A1A832B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2F590CD5_0FFB_F985_417F_ADE3E7078453",
 "frameCount": 24,
 "frameDuration": 41
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "id": "Container_A99C420C_B94D_2A43_41DA_A0E0CE32E69E",
 "left": "0%",
 "width": 36,
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFF00"
 ],
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderRadius": 0,
 "height": "100%",
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "Container black"
 },
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_A99C520C_B94D_2A43_41E7_0938547A306C",
 "left": 10,
 "width": 44,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "top": "40%",
 "bottom": "40%",
 "paddingRight": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_A99C020C_B94D_2A43_41E2_B8C12B8F0754, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_A99CB207_B94D_2A4D_419A_4B4F42B23435, false, 0, this.effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6, 'hideEffect', false)",
 "pressedIconURL": "skin/IconButton_A99C520C_B94D_2A43_41E7_0938547A306C_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "rollOverIconURL": "skin/IconButton_A99C520C_B94D_2A43_41E7_0938547A306C_rollover.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "propagateClick": true,
 "iconURL": "skin/IconButton_A99C520C_B94D_2A43_41E7_0938547A306C.png",
 "paddingLeft": 0
},
{
 "paddingLeft": 40,
 "scrollBarWidth": 10,
 "children": [
  "this.Container_A99D920E_B94D_2A5F_41E5_6BBF7A14EB00"
 ],
 "id": "Container_A99C120C_B94D_2A43_41C5_B14D9386411A",
 "left": "0%",
 "width": 171,
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "0%",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#FFFF00"
 ],
 "horizontalAlign": "center",
 "paddingRight": 40,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundOpacity": 0.5,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 40,
 "borderRadius": 0,
 "height": "100%",
 "gap": 10,
 "paddingBottom": 40,
 "data": {
  "name": "Container"
 },
 "shadow": false,
 "propagateClick": true,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ]
},
{
 "cursor": "hand",
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0",
 "width": 44,
 "right": 9,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_A99C020C_B94D_2A43_41E2_B8C12B8F0754, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_A99CB207_B94D_2A4D_419A_4B4F42B23435, true, 0, this.effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368, 'showEffect', false)",
 "pressedIconURL": "skin/IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0_pressed.png",
 "borderRadius": 0,
 "minWidth": 1,
 "rollOverIconURL": "skin/IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0_rollover.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "propagateClick": true,
 "iconURL": "skin/IconButton_A99ED20F_B94D_2A5D_41DC_D4F39B937EE0.png",
 "paddingLeft": 0
},
{
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_2DC47E8E_0F29_D989_41A1_D71691912A89",
  "this.IconButton_2DC5BE8E_0F29_D989_4182_1A8ED010A729"
 ],
 "id": "Container_2DC46E8E_0F29_D989_4195_4AF946FD87DB",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "paddingRight": 0,
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "width": "100%",
 "class": "Container",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "shadow": false,
 "height": "100%",
 "propagateClick": false,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "children": [
  "this.Container_A99DB20E_B94D_2A5F_41E3_3D7E73A0218B"
 ],
 "id": "Container_A99D920E_B94D_2A5F_41E5_6BBF7A14EB00",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 533,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 10,
 "paddingBottom": 0,
 "data": {
  "name": "-Container footer"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "paddingLeft": 0,
 "propagateClick": true
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2DC5BE8E_0F29_D989_4182_1A8ED010A729",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minHeight": 50,
 "transparencyActive": false,
 "verticalAlign": "top",
 "top": 20,
 "paddingRight": 0,
 "width": "10%",
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2DC5EE8E_0F29_D989_4198_B8B8C779512A, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2DC5BE8E_0F29_D989_4182_1A8ED010A729_pressed.jpg",
 "borderRadius": 0,
 "minWidth": 50,
 "rollOverIconURL": "skin/IconButton_2DC5BE8E_0F29_D989_4182_1A8ED010A729_rollover.jpg",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton54739"
 },
 "shadow": false,
 "height": "10%",
 "propagateClick": false,
 "iconURL": "skin/IconButton_2DC5BE8E_0F29_D989_4182_1A8ED010A729.jpg",
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_A8A6FE7D_B95F_7AC2_41D5_1B9B0FB9B902",
  "this.IconButton_A99D420E_B94D_2A5F_41DF_AC8E311ABF99",
  "this.IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE",
  "this.IconButton_A99D020F_B94D_2A5D_41E2_8BFD4C75CC3F",
  "this.IconButton_A99D320F_B94D_2A5D_41D8_2B3BE7A998AD",
  "this.IconButton_A7496980_B937_2643_41DF_3AED7DCF18CA"
 ],
 "id": "Container_A99DB20E_B94D_2A5F_41E3_3D7E73A0218B",
 "scrollBarColor": "#000000",
 "layout": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": 533,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "width": "100%",
 "class": "Container",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "gap": 16,
 "paddingBottom": 0,
 "data": {
  "name": "-Container settings"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "paddingLeft": 0,
 "propagateClick": false
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A8A6FE7D_B95F_7AC2_41D5_1B9B0FB9B902",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": true,
 "verticalAlign": "middle",
 "height": 60,
 "mode": "push",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_991E0CC1_B9F5_5FC4_41D4_315B0264F295, 'showEffect', false) } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_991E2CC3_B9F5_5FC5_41DC_0DF77C5749CD, 'hideEffect', false) }",
 "borderRadius": 0,
 "minWidth": 1,
 "rollOverIconURL": "skin/IconButton_A8A6FE7D_B95F_7AC2_41D5_1B9B0FB9B902_rollover.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Floorplan"
 },
 "shadow": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_A8A6FE7D_B95F_7AC2_41D5_1B9B0FB9B902.png",
 "cursor": "hand"
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_A7496980_B937_2643_41DF_3AED7DCF18CA",
 "width": 60,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": false,
 "verticalAlign": "middle",
 "height": 60,
 "mode": "push",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingTop": 0,
 "click": "if(!this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93.get('visible')){ this.setComponentVisibility(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93, true, 0, this.effect_A639ADD6_B9F2_D9CF_41CF_EAD4AE403A7B, 'showEffect', false) } else { this.setComponentVisibility(this.ThumbnailList_A3025A3E_B953_7ABF_4197_31C1EF1A4D93, false, 0, this.effect_A6399DD6_B9F2_D9CF_41E4_66B28C3AF36B, 'hideEffect', false) }",
 "borderRadius": 0,
 "minWidth": 1,
 "rollOverIconURL": "skin/IconButton_A7496980_B937_2643_41DF_3AED7DCF18CA_rollover.png",
 "paddingBottom": 0,
 "data": {
  "name": "IconButton Location"
 },
 "shadow": false,
 "propagateClick": false,
 "iconURL": "skin/IconButton_A7496980_B937_2643_41DF_3AED7DCF18CA.png",
 "cursor": "hand"
}],
 "buttonToggleFullscreen": "this.IconButton_A99D720F_B94D_2A5D_41D1_02BED037B3EE",
 "scripts": {
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "downloadEnabled": false,
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 20,
 "gap": 10,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "width": "100%",
 "shadow": false,
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "Player435"
 },
 "desktopMipmappingEnabled": false,
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
