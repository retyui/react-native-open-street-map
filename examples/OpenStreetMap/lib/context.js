"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMapContext = exports.MapContext = void 0;
var react_1 = require("react");
exports.MapContext = (0, react_1.createContext)({
    onMessage: function (scope, fn) { return function () { }; },
    toWebView: function (id, displayName, commands) { },
});
var useMapContext = function () { return (0, react_1.useContext)(exports.MapContext); };
exports.useMapContext = useMapContext;
