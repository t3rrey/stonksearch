"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_apexcharts_1 = require("react-apexcharts");
var candlestick_config_1 = require("../services/configs/candlestick.config");
var candlestick = function () {
    var _a = react_1.useState({}), chartData = _a[0], setChartData = _a[1];
    var _b = react_1.useState(false), loaded = _b[0], setLoaded = _b[1];
    if (!loaded) {
        return react_1["default"].createElement("div", { className: "" });
    }
    return react_1["default"].createElement(react_apexcharts_1["default"], { options: candlestick_config_1["default"], type: "candlestick", className: "" });
};
exports["default"] = candlestick;
