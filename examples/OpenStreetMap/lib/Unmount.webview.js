"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unmount = void 0;
var Unmount = function (command, context) {
    context.removeInstance(command.id);
};
exports.Unmount = Unmount;
