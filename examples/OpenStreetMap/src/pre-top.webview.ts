import { CustomWindow } from "./types.webview";

declare const window: CustomWindow;

window.__map = window.L.map("root_id").setView([123, 321], -111);

window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(window.__map);

window.toMobileNative = (data: object) => {
  window.ReactNativeWebView?.postMessage(JSON.stringify(data, null, 2));
};

window.__map.on({
  baselayerchange: (event) => {
    console.log(" --- xdebug baselayerchange", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onBaseLayerChange",
        payload: {},
      });
    }
  },
  overlayadd: (event) => {
    console.log(" --- xdebug overlayadd", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onOverlayAdd",
        payload: {},
      });
    }
  },
  overlayremove: (event) => {
    console.log(" --- xdebug overlayremove", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onOverlayRemove",
        payload: {},
      });
    }
  },
  layeradd: (event) => {
    console.log(" --- xdebug layeradd", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onLayerAdd",
        payload: {},
      });
    }
  },
  layerremove: (event) => {
    console.log(" --- xdebug layerremove", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onLayerRemove",
        payload: {},
      });
    }
  },
  zoomlevelschange: (event) => {
    console.log(" --- xdebug zoomlevelschange", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onZoomLevelsChange",
        payload: {},
      });
    }
  },
  unload: (event) => {
    console.log(" --- xdebug unload", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onUnload",
        payload: {},
      });
    }
  },
  viewreset: (event) => {
    console.log(" --- xdebug viewreset", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onViewReset",
        payload: {},
      });
    }
  },
  load: (event) => {
    console.log(" --- xdebug load", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onLoad",
        payload: {},
      });
    }
  },
  zoomstart: (event) => {
    console.log(" --- xdebug zoomstart", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onZoomStart",
        payload: {},
      });
    }
  },
  movestart: (event) => {
    console.log(" --- xdebug movestart", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onMoveStart",
        payload: {},
      });
    }
  },
  zoom: (event) => {
    console.log(" --- xdebug zoom", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onZoom",
        payload: {},
      });
    }
  },
  move: (event) => {
    console.log(" --- xdebug move", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onMove",
        payload: {},
      });
    }
  },
  zoomend: (event) => {
    console.log(" --- xdebug zoomend", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onZoomEnd",
        payload: {},
      });
    }
  },
  moveend: (event) => {
    console.log(" --- xdebug moveend", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onMoveEnd",
        payload: {},
      });
    }
  },
  autopanstart: (event) => {
    console.log(" --- xdebug autopanstart", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onAutoPanStart",
        payload: {},
      });
    }
  },
  dragstart: (event) => {
    console.log(" --- xdebug dragstart", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onDragStart",
        payload: {},
      });
    }
  },
  drag: (event) => {
    console.log(" --- xdebug drag", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onDrag",
        payload: {},
      });
    }
  },
  add: (event) => {
    console.log(" --- xdebug add", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onAdd",
        payload: {},
      });
    }
  },
  remove: (event) => {
    console.log(" --- xdebug remove", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onRemove",
        payload: {},
      });
    }
  },
  loading: (event) => {
    console.log(" --- xdebug loading", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onLoading",
        payload: {},
      });
    }
  },
  error: (event) => {
    console.log(" --- xdebug error", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onError",
        payload: {},
      });
    }
  },
  update: (event) => {
    console.log(" --- xdebug update", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onUpdate",
        payload: {},
      });
    }
  },
  down: (event) => {
    console.log(" --- xdebug down", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onDown",
        payload: {},
      });
    }
  },
  predrag: (event) => {
    console.log(" --- xdebug predrag", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onPredrag",
        payload: {},
      });
    }
  },
  resize: (event) => {
    console.log(" --- xdebug resize", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onResize",
        payload: {},
      });
    }
  },
  popupopen: (event) => {
    console.log(" --- xdebug popupopen", event);
    if ("__rn_id" in event.popup) {
      window.toMobileNative({
        // @ts-ignore
        id: event.popup.__rn_id,
        type: "onPopupOpen",
        payload: {},
      });
    }
  },
  popupclose: (event) => {
    console.log(" --- xdebug popupclose", event);
    if ("__rn_id" in event.popup) {
      window.toMobileNative({
        // @ts-ignore
        id: event.popup.__rn_id,
        type: "onPopupClose",
        payload: {},
      });
    }
  },
  tooltipopen: (event) => {
    if ("__rn_id" in event.tooltip) {
      window.toMobileNative({
        // @ts-ignore
        id: event.tooltip.__rn_id,
        type: "onTooltipOpen",
        payload: {},
      });
    }
  },
  tooltipclose: (event) => {
    if ("__rn_id" in event.tooltip) {
      window.toMobileNative({
        // @ts-ignore
        id: event.tooltip.__rn_id,
        type: "onTooltipClose",
        payload: {},
      });
    }
  },
  locationerror: (event) => {
    console.log(" --- xdebug locationerror", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onLocationError",
        payload: {},
      });
    }
  },
  locationfound: (event) => {
    console.log(" --- xdebug locationfound", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onLocationFound",
        payload: {},
      });
    }
  },
  click: (event) => {
    console.log(" --- xdebug click", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onClick",
        payload: {},
      });
    }
  },
  dblclick: (event) => {
    console.log(" --- xdebug dblclick", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onDblClick",
        payload: {},
      });
    }
  },
  mousedown: (event) => {
    console.log(" --- xdebug mousedown", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onMouseDown",
        payload: {},
      });
    }
  },
  mouseup: (event) => {
    console.log(" --- xdebug mouseup", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onMouseUp",
        payload: {},
      });
    }
  },
  mouseover: (event) => {
    console.log(" --- xdebug mouseover", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onMouseOver",
        payload: {},
      });
    }
  },
  mouseout: (event) => {
    console.log(" --- xdebug mouseout", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onMouseOut",
        payload: {},
      });
    }
  },
  mousemove: (event) => {
    console.log(" --- xdebug mousemove", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onMouseMove",
        payload: {},
      });
    }
  },
  contextmenu: (event) => {
    console.log(" --- xdebug contextmenu", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onContextMenu",
        payload: {},
      });
    }
  },
  preclick: (event) => {
    console.log(" --- xdebug preclick", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onPreClick",
        payload: {},
      });
    }
  },
  keypress: (event) => {
    console.log(" --- xdebug keypress", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onKeyPress",
        payload: {},
      });
    }
  },
  keydown: (event) => {
    console.log(" --- xdebug keydown", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onKeyDown",
        payload: {},
      });
    }
  },
  keyup: (event) => {
    console.log(" --- xdebug keyup", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onKeyUp",
        payload: {},
      });
    }
  },
  zoomanim: (event) => {
    console.log(" --- xdebug zoomanim", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onZoomAnim",
        payload: {},
      });
    }
  },
  dragend: (event) => {
    console.log(" --- xdebug dragend", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onDragEnd",
        payload: {},
      });
    }
  },
  tileunload: (event) => {
    console.log(" --- xdebug tileunload", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onTileUnload",
        payload: {},
      });
    }
  },
  tileloadstart: (event) => {
    console.log(" --- xdebug tileloadstart", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onTileLoadStart",
        payload: {},
      });
    }
  },
  tileload: (event) => {
    console.log(" --- xdebug tileload", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onTileLoad",
        payload: {},
      });
    }
  },
  tileerror: (event) => {
    console.log(" --- xdebug tileerror", event);
    if ("__rn_id" in event.target) {
      window.toMobileNative({
        id: event.target.__rn_id,
        type: "onTileError",
        payload: {},
      });
    }
  },
});
