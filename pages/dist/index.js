"use strict";
exports.__esModule = true;
var Sidebar_1 = require("../components/Sidebar");
var Header_1 = require("../components/Header");
var Home = function () {
    return (React.createElement("div", { className: "flex bg-gray-300 h-screen" },
        React.createElement(Sidebar_1["default"], null),
        React.createElement("div", { className: "flex flex-col flex-grow " },
            React.createElement(Header_1["default"], null))));
};
exports["default"] = Home;
