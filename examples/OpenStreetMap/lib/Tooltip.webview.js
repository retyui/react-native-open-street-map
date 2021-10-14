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
exports.Tooltip = void 0;
function Tooltip(command, context) {
    if (command.method === "constructor") {
        var _a = command.data, children = _a.children, options = __rest(_a, ["children"]);
        var tooltip_1 = window.L.tooltip(options);
        // @ts-ignore
        tooltip_1.__rn_id = command.id;
        tooltip_1.setContent(children);
        return context.addInstance(command.id, tooltip_1);
    }
    var method = command.method, 
    // @ts-ignore
    data = command.data, id = command.id;
    var tooltip = context.getInstance(id);
    if (!tooltip) {
        return;
    }
    if (method === "openTooltip" || method === "closeTooltip") {
        // @ts-ignore
        return tooltip._source[method](data);
    }
    // @ts-ignore
    tooltip[method](data);
}
exports.Tooltip = Tooltip;
