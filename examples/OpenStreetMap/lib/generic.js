"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.makeRemountOnPropsChange = exports.generic = void 0;
var react_1 = __importStar(require("react"));
var context_1 = require("./context");
var utils_1 = require("./utils");
function generic(options) {
    var Component = /** @class */ (function (_super) {
        __extends(Component, _super);
        function Component() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.unsubscribe = function () { };
            _this.nestedElements = {};
            _this.id = options.displayName + "-" + Math.random()
                .toString(36)
                .slice(2);
            _this.mounted = false;
            return _this;
        }
        Component.prototype.componentDidMount = function () {
            var _this = this;
            var _a, _b;
            this.mounted = true;
            this.toWebView([
                { method: "constructor", data: this.props },
            ]);
            (_b = (_a = this.props).onMount) === null || _b === void 0 ? void 0 : _b.call(_a, this.id);
            this.unsubscribe = this.context.onMessage(this.id, function (event) {
                var _a, _b;
                // @ts-ignore
                (_b = (_a = _this.props) === null || _a === void 0 ? void 0 : _a[event.type]) === null || _b === void 0 ? void 0 : _b.call(_a, event === null || event === void 0 ? void 0 : event.payload);
            });
        };
        Component.prototype.componentWillUnmount = function () {
            var _a, _b;
            this.mounted = false;
            this.context.onUnmount(this.id);
            (_b = (_a = this.props).onUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, this.id);
            this.unsubscribe();
        };
        Component.prototype.componentDidUpdate = function (prevProps) {
            var commands = options.onPropsChange(this.props, prevProps);
            this.toWebView(commands);
        };
        Component.prototype.toWebView = function (commands) {
            if (commands.length === 0) {
                return;
            }
            this.context.toWebView(this.id, options.displayName, commands);
        };
        Component.prototype.createNestedElementInit = function (name, onUpdate) {
            var _this = this;
            var getState = function () { return _this.nestedElements[name]; };
            if (!getState()) {
                this.nestedElements[name] = {
                    id: null,
                    onUnmount: function () {
                        _this.nestedElements[name].id = null;
                    },
                    onMount: function (newId) {
                        if (getState().id !== newId) {
                            onUpdate(newId);
                        }
                        _this.nestedElements[name].id = newId;
                    },
                };
            }
            return {
                onUnmount: getState().onUnmount,
                onMount: getState().onMount,
            };
        };
        Component.prototype.render = function () {
            if (options.nullRender) {
                return null;
            }
            return this.props.children || null;
        };
        Component.displayName = options.displayName;
        Component.contextType = context_1.MapContext;
        return Component;
    }(react_1.Component));
    return Component;
}
exports.generic = generic;
var makeRemountOnPropsChange = function (options) { return function (Component) { return function (props) {
    var isMountEffect = (0, react_1.useRef)(true);
    var _a = (0, react_1.useState)(0), key = _a[0], setKey = _a[1];
    var dependencyList = options.propsDependencies
        .map(function (propName) { return props[propName]; })
        .concat((options.latLngDependencies || []).map(function (propName) {
        return (0, utils_1.toTuple)(props[propName] || []).join(",");
    }));
    (0, react_1.useEffect)(function () {
        if (!isMountEffect.current) {
            setKey(function (k) { return k + 1; });
        }
        isMountEffect.current = false;
    }, dependencyList);
    return <Component key={key} {...props}/>;
}; }; };
exports.makeRemountOnPropsChange = makeRemountOnPropsChange;
