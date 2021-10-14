"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
var generic_1 = require("./generic");
var ParentLayer_context_1 = require("./ParentLayer.context");
var utils_1 = require("./utils");
exports.Tooltip = (0, ParentLayer_context_1.withParentLayerContext)("tooltip")((0, generic_1.makeRemountOnPropsChange)({
    propsDependencies: [
        "permanent",
        "direction",
        "sticky",
        "pane",
        "interactive",
        "className",
        "attribution",
    ],
    latLngDependencies: ["offset"],
})((0, generic_1.generic)({
    nullRender: true,
    displayName: "Tooltip",
    onPropsChange: function (props, prevProps) {
        var commands = [];
        if ((0, utils_1.isPropChange)("children", props, prevProps)) {
            commands.push({
                method: "setContent",
                data: props.children,
            });
        }
        if ((0, utils_1.isPropChange)("opacity", props, prevProps)) {
            commands.push({
                method: "setOpacity",
                data: props.opacity,
            });
        }
        if ((0, utils_1.isPropChange)("position", props, prevProps)) {
            commands.push({
                method: "setLatLng",
                data: props.position,
            });
        }
        if ((0, utils_1.isPropChange)("isVisible", props, prevProps)) {
            if (props.isVisible) {
                commands.push({ method: "openTooltip" });
            }
            else {
                commands.push({ method: "closeTooltip" });
            }
        }
        return commands;
    },
})));
