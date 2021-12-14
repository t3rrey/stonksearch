"use strict";
exports.__esModule = true;
var config = {
    chart: {
        type: "candlestick",
        animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
        background: "#fff"
    },
    grid: {
        show: true,
        borderColor: "#DEDEDE",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: true,
                colors: "red"
            }
        },
        row: {
            colors: undefined,
            opacity: 0.5
        },
        column: {
            colors: undefined,
            opacity: 0.5
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
    xaxis: {
        type: "datetime"
    },
    yaxis: {
        opposite: true,
        tooltip: {
            enabled: true
        }
    }
};
exports["default"] = config;
