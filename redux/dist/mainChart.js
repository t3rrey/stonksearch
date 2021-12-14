"use strict";
exports.__esModule = true;
exports.mainChart = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
exports.mainChart = toolkit_1.createSlice({
    name: "mainChart",
    initialState: { value: { name: "", data: {} } },
    reducers: {
        search: function (state, action) {
            state.value = action.payload;
        }
    }
});
exports["default"] = exports.mainChart.reducer;
