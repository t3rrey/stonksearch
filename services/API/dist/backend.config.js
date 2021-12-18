"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.stockFinancials = exports.getNewsData = exports.getStockData = void 0;
var axios_1 = require("axios");
var logger_config_1 = require("../workers/logger.config");
// This function is used to connect to the backend API for timeseries data
// Ticker always needs to be converted to an uppercase
// Can be used for minute, hour, daily and monthly data just pass in approiate key word
// date must be in format of YYYY-MM-DD ONLY!!!
// returns an objects with an array of time series data
exports.getStockData = function (ticker, startDate, endDate, timeSpan) { return __awaiter(void 0, void 0, void 0, function () {
    var requestResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].get("https://api.polygon.io/v2/aggs/ticker/" + ticker.toUpperCase() + "/range/1/" + timeSpan + "/" + startDate + "/" + endDate + "?apiKey=" + process.env.POLYGON_API_KEY)];
            case 1:
                requestResult = _a.sent();
                logger_config_1["default"].info(requestResult);
                return [2 /*return*/, requestResult];
        }
    });
}); };
// connects to third party news API
// input ticker not case sensitive
// Returns array of news objects with summary, title and source link
/**
 *
 * @param ticker
 * @returns
 */
exports.getNewsData = function (ticker) { return __awaiter(void 0, void 0, void 0, function () {
    var request;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1["default"].get("https://newsapi.org/v2/everything?q=" + ticker + "&from=2021-09-27&sortBy=popularity&language=english&apiKey=" + process.env.NEWS_API_KEY)];
            case 1:
                request = _a.sent();
                return [2 /*return*/, request];
        }
    });
}); };
// Connects to a third party API that gives data relating to companies financials
// Input is ticker which Upper case is needed.
// Field is the relevevant field for the balance sheet e.g: Revenue which needs to be in Upper Case
exports.stockFinancials = function (ticker, field) { return __awaiter(void 0, void 0, void 0, function () {
    var fields, request;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fields = field.toUpperCase();
                return [4 /*yield*/, axios_1["default"].get("https://www.alphavantage.co/query?function=" + fields + "&symbol=" + ticker + "&apikey=" + AV_API_KEY)];
            case 1:
                request = _a.sent();
                logger_config_1["default"].info(request);
                return [2 /*return*/, request];
        }
    });
}); };
