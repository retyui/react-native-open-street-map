"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.__map = window.L.map("root_id").setView([123, 321], -111);
window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(window.__map);
window.toMobileNative = function (data) {
    var _a;
    (_a = window.ReactNativeWebView) === null || _a === void 0 ? void 0 : _a.postMessage(JSON.stringify(data, null, 2));
};
window.__map.on({
    baselayerchange: function (event) {
        console.log(" --- xdebug baselayerchange", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onBaseLayerChange",
                payload: {},
            });
        }
    },
    overlayadd: function (event) {
        console.log(" --- xdebug overlayadd", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onOverlayAdd",
                payload: {},
            });
        }
    },
    overlayremove: function (event) {
        console.log(" --- xdebug overlayremove", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onOverlayRemove",
                payload: {},
            });
        }
    },
    layeradd: function (event) {
        console.log(" --- xdebug layeradd", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onLayerAdd",
                payload: {},
            });
        }
    },
    layerremove: function (event) {
        console.log(" --- xdebug layerremove", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onLayerRemove",
                payload: {},
            });
        }
    },
    zoomlevelschange: function (event) {
        console.log(" --- xdebug zoomlevelschange", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onZoomLevelsChange",
                payload: {},
            });
        }
    },
    unload: function (event) {
        console.log(" --- xdebug unload", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onUnload",
                payload: {},
            });
        }
    },
    viewreset: function (event) {
        console.log(" --- xdebug viewreset", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onViewReset",
                payload: {},
            });
        }
    },
    load: function (event) {
        console.log(" --- xdebug load", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onLoad",
                payload: {},
            });
        }
    },
    zoomstart: function (event) {
        console.log(" --- xdebug zoomstart", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onZoomStart",
                payload: {},
            });
        }
    },
    movestart: function (event) {
        console.log(" --- xdebug movestart", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onMoveStart",
                payload: {},
            });
        }
    },
    zoom: function (event) {
        console.log(" --- xdebug zoom", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onZoom",
                payload: {},
            });
        }
    },
    move: function (event) {
        console.log(" --- xdebug move", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onMove",
                payload: {},
            });
        }
    },
    zoomend: function (event) {
        console.log(" --- xdebug zoomend", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onZoomEnd",
                payload: {},
            });
        }
    },
    moveend: function (event) {
        console.log(" --- xdebug moveend", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onMoveEnd",
                payload: {},
            });
        }
    },
    autopanstart: function (event) {
        console.log(" --- xdebug autopanstart", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onAutoPanStart",
                payload: {},
            });
        }
    },
    dragstart: function (event) {
        console.log(" --- xdebug dragstart", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onDragStart",
                payload: {},
            });
        }
    },
    drag: function (event) {
        console.log(" --- xdebug drag", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onDrag",
                payload: {},
            });
        }
    },
    add: function (event) {
        console.log(" --- xdebug add", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onAdd",
                payload: {},
            });
        }
    },
    remove: function (event) {
        console.log(" --- xdebug remove", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onRemove",
                payload: {},
            });
        }
    },
    loading: function (event) {
        console.log(" --- xdebug loading", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onLoading",
                payload: {},
            });
        }
    },
    error: function (event) {
        console.log(" --- xdebug error", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onError",
                payload: {},
            });
        }
    },
    update: function (event) {
        console.log(" --- xdebug update", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onUpdate",
                payload: {},
            });
        }
    },
    down: function (event) {
        console.log(" --- xdebug down", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onDown",
                payload: {},
            });
        }
    },
    predrag: function (event) {
        console.log(" --- xdebug predrag", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onPredrag",
                payload: {},
            });
        }
    },
    resize: function (event) {
        console.log(" --- xdebug resize", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onResize",
                payload: {},
            });
        }
    },
    popupopen: function (event) {
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
    popupclose: function (event) {
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
    tooltipopen: function (event) {
        if ("__rn_id" in event.tooltip) {
            window.toMobileNative({
                // @ts-ignore
                id: event.tooltip.__rn_id,
                type: "onTooltipOpen",
                payload: {},
            });
        }
    },
    tooltipclose: function (event) {
        if ("__rn_id" in event.tooltip) {
            window.toMobileNative({
                // @ts-ignore
                id: event.tooltip.__rn_id,
                type: "onTooltipClose",
                payload: {},
            });
        }
    },
    locationerror: function (event) {
        console.log(" --- xdebug locationerror", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onLocationError",
                payload: {},
            });
        }
    },
    locationfound: function (event) {
        console.log(" --- xdebug locationfound", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onLocationFound",
                payload: {},
            });
        }
    },
    click: function (event) {
        console.log(" --- xdebug click", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onClick",
                payload: {},
            });
        }
    },
    dblclick: function (event) {
        console.log(" --- xdebug dblclick", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onDblClick",
                payload: {},
            });
        }
    },
    mousedown: function (event) {
        console.log(" --- xdebug mousedown", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onMouseDown",
                payload: {},
            });
        }
    },
    mouseup: function (event) {
        console.log(" --- xdebug mouseup", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onMouseUp",
                payload: {},
            });
        }
    },
    mouseover: function (event) {
        console.log(" --- xdebug mouseover", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onMouseOver",
                payload: {},
            });
        }
    },
    mouseout: function (event) {
        console.log(" --- xdebug mouseout", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onMouseOut",
                payload: {},
            });
        }
    },
    mousemove: function (event) {
        console.log(" --- xdebug mousemove", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onMouseMove",
                payload: {},
            });
        }
    },
    contextmenu: function (event) {
        console.log(" --- xdebug contextmenu", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onContextMenu",
                payload: {},
            });
        }
    },
    preclick: function (event) {
        console.log(" --- xdebug preclick", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onPreClick",
                payload: {},
            });
        }
    },
    keypress: function (event) {
        console.log(" --- xdebug keypress", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onKeyPress",
                payload: {},
            });
        }
    },
    keydown: function (event) {
        console.log(" --- xdebug keydown", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onKeyDown",
                payload: {},
            });
        }
    },
    keyup: function (event) {
        console.log(" --- xdebug keyup", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onKeyUp",
                payload: {},
            });
        }
    },
    zoomanim: function (event) {
        console.log(" --- xdebug zoomanim", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onZoomAnim",
                payload: {},
            });
        }
    },
    dragend: function (event) {
        console.log(" --- xdebug dragend", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onDragEnd",
                payload: {},
            });
        }
    },
    tileunload: function (event) {
        console.log(" --- xdebug tileunload", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onTileUnload",
                payload: {},
            });
        }
    },
    tileloadstart: function (event) {
        console.log(" --- xdebug tileloadstart", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onTileLoadStart",
                payload: {},
            });
        }
    },
    tileload: function (event) {
        console.log(" --- xdebug tileload", event);
        if ("__rn_id" in event.target) {
            window.toMobileNative({
                id: event.target.__rn_id,
                type: "onTileLoad",
                payload: {},
            });
        }
    },
    tileerror: function (event) {
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
