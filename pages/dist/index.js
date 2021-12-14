"use strict";
exports.__esModule = true;
var Sidebar_1 = require("../components/Sidebar");
var head_1 = require("next/head");
var Home = function () {
    return (React.createElement("div", { className: "flex bg-gray-300 h-screen" },
        React.createElement(head_1["default"], null,
            React.createElement("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
            React.createElement("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }),
            React.createElement("link", { href: "https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap", rel: "stylesheet" })),
        React.createElement(Sidebar_1["default"], null)));
};
exports["default"] = Home;
