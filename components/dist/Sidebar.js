"use strict";
exports.__esModule = true;
var react_1 = require("react");
var home_icon_svg_1 = require("../public/assets/home-icon.svg");
var list_icon_svg_1 = require("../public/assets/list-icon.svg");
var settings_icon_svg_1 = require("../public/assets/settings-icon.svg");
var image_1 = require("next/image");
var Sidebar = function () {
    return (react_1["default"].createElement("div", { id: "Sidebar", className: " fixed top-0 left-0 h-screen w-30 m-0 flex flex-col bg-gray-200" },
        react_1["default"].createElement("div", { className: "my-auto" },
            react_1["default"].createElement("h1", { id: "stonk", className: "absolute top-5 left-10 text-4xl text-red-600 stonk" }, "STONKSEARCH"),
            react_1["default"].createElement("div", { className: "p-10" },
                react_1["default"].createElement(image_1["default"], { src: home_icon_svg_1["default"], width: 50, height: 50 })),
            react_1["default"].createElement("div", { className: "p-10" },
                react_1["default"].createElement(image_1["default"], { src: list_icon_svg_1["default"], width: 50, height: 50 })),
            react_1["default"].createElement("div", { className: "p-10" },
                react_1["default"].createElement(image_1["default"], { src: settings_icon_svg_1["default"], width: 50, height: 50 })))));
};
exports["default"] = Sidebar;
