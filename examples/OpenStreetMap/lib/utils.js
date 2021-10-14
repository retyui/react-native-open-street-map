"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPropChange = exports.isLatLngChange = exports.toTuple = void 0;
var toTuple = function (latLng) { return (Array.isArray(latLng) ? latLng : [latLng.lat, latLng.lng]); };
exports.toTuple = toTuple;
var isLatLngChange = function (latLng, prevLatLng) {
    if (latLng && prevLatLng) {
        var _a = (0, exports.toTuple)(latLng), lat = _a[0], lng = _a[1];
        var _b = (0, exports.toTuple)(prevLatLng), prevLat = _b[0], prevLng = _b[1];
        if (lat !== prevLat) {
            return true;
        }
        return lng !== prevLng;
    }
    // undefined => [x,y]
    return prevLatLng == null && latLng != null;
};
exports.isLatLngChange = isLatLngChange;
var isPropChange = function (name, props, prevProps) { return props[name] != null && props[name] !== prevProps[name]; };
exports.isPropChange = isPropChange;
