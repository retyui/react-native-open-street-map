"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
function Icon(command, context) {
    if (command.method === "constructor") {
        var instance = window.L.icon(command.data);
        return context.addInstance(command.id, instance);
    }
}
exports.Icon = Icon;
