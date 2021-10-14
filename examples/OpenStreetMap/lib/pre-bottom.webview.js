"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.__context = {
    elements: {},
    map: window.__map,
    getInstance: function (id) {
        if (id) {
            return window.__context.elements[id];
        }
        return undefined;
    },
    addInstance: function (id, instance) {
        window.__context.elements[id] = instance;
    },
    removeInstance: function (id) {
        delete window.__context.elements[id];
    },
};
window.__runCommand = function (rawCommand) {
    try {
        var command = JSON.parse(rawCommand);
        var handler = window.allCommandHandler[command.type];
        if (handler) {
            window.toMobileNative({ type: "debug", payload: command });
            handler(command, window.__context);
        }
        else {
            window.toMobileNative({
                type: "warning",
                payload: "Cannot find handler for command.type:\"" + command.type + "\"",
            });
        }
    }
    catch (error) {
        console.log("__runCommand", error);
        window.toMobileNative({
            type: "error",
            payload: {
                // @ts-ignore
                message: error.message,
            },
        });
    }
};
window.toMobileNative({ type: "init" });
