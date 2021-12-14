"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("tailwindcss/tailwind.css");
require("../styles/globals.css");
var react_redux_1 = require("react-redux");
var index_1 = require("../redux/index");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_redux_1.Provider, { store: index_1.store },
            React.createElement(Component, __assign({}, pageProps)),
            ";")));
}
exports["default"] = MyApp;
