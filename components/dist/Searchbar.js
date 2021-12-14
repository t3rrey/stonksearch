"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var search_icon_svg_1 = require("../public/assets/search-icon.svg");
var Searchbar = function () {
    return (react_1["default"].createElement("div", { id: "swrap", className: "flex bg-white rounded-3xl border border-black w-1/4 p-2 absolute top-20 right-28" },
        react_1["default"].createElement("input", { className: "h-12 w-11/12 rounded-l-3xl outline-transparent" }),
        react_1["default"].createElement("div", { className: "w-10 h-10 text-center " },
            react_1["default"].createElement(image_1["default"], { src: search_icon_svg_1["default"], className: "" }))));
};
exports["default"] = Searchbar;
