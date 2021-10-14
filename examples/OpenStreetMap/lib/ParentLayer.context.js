"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withParentLayerContext = exports.useMarkerContext = exports.ParentLayerContext = void 0;
var react_1 = __importStar(require("react"));
exports.ParentLayerContext = (0, react_1.createContext)({
    onMount: function (id, type) { },
    unUnmount: function (id, type) { },
});
var useMarkerContext = function () { return (0, react_1.useContext)(exports.ParentLayerContext); };
exports.useMarkerContext = useMarkerContext;
var withParentLayerContext = function (type) { return function (Component) {
    function WithParentLayerContext(props) {
        var _a = (0, exports.useMarkerContext)(), onMount = _a.onMount, unUnmount = _a.unUnmount;
        return (<Component {...props} onUnmount={function (id) { return unUnmount(id, type); }} onMount={function (id) { return onMount(id, type); }}/>);
    }
    return WithParentLayerContext;
}; };
exports.withParentLayerContext = withParentLayerContext;
