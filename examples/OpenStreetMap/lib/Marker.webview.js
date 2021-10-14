"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marker = void 0;
function Marker(command, context) {
    var _a;
    function setTooltip(instance, tooltipId) {
        var tooltip = context.getInstance(tooltipId);
        if (tooltip) {
            instance.unbindTooltip().bindTooltip(tooltip);
        }
    }
    function setPopup(instance, popupId) {
        var popup = context.getInstance(popupId);
        if (popup) {
            instance.unbindPopup().bindPopup(popup);
        }
    }
    function setIcon(instance, iconId) {
        var icon = context.getInstance(iconId);
        instance.setIcon(icon || new window.L.Icon.Default());
    }
    //------------------------------------------------------------
    if (command.method === "constructor") {
        var _b = command.data, position = _b.position, iconId = _b.iconId, popupId = _b.popupId, tooltipId = _b.tooltipId, draggable = _b.draggable, options = __rest(_b, ["position", "iconId", "popupId", "tooltipId", "draggable"]);
        var instance_1 = window.L.marker(position, options);
        // @ts-ignore
        instance_1.__rn_id = command.id;
        context.addInstance(command.id, instance_1);
        setIcon(instance_1, iconId);
        setTooltip(instance_1, tooltipId);
        setPopup(instance_1, popupId);
        if (draggable) {
            (_a = instance_1.dragging) === null || _a === void 0 ? void 0 : _a.enable();
        }
        return instance_1.addTo(context.map);
    }
    var instance = context.getInstance(command.id);
    if (!instance) {
        return;
    }
    if (command.method === "setIcon") {
        return setIcon(instance, command.data);
    }
    if (command.method === "setTooltip") {
        return setTooltip(instance, command.data);
    }
    if (command.method === "setPopup") {
        return setPopup(instance, command.data);
    }
    // @ts-ignore
    var method = command.method, data = command.data;
    if ("scope" in command) {
        // @ts-ignore
        return instance[command.scope][method](data);
    }
    // @ts-ignore
    return instance[method](data);
}
exports.Marker = Marker;
