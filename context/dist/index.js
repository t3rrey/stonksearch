"use strict";
exports.__esModule = true;
exports.Provider = exports.Context = void 0;
var react_1 = require("react");
var useDebounce_1 = require("../hooks/useDebounce");
var backend_config_1 = require("../services/API/backend.config");
exports.Context = react_1.createContext({});
function Provider(props) {
    var _a = react_1.useState("tsla"), search = _a[0], setSearch = _a[1];
    var debouncedSearch = useDebounce_1["default"](search, 1000);
    var _b = react_1.useState([]), stockData = _b[0], setStockData = _b[1];
    react_1.useEffect(function () {
        backend_config_1.getStockData(debouncedSearch, 0, 30, "day").then(function (response) {
            return setStockData(response.data.results);
        });
    }, [debouncedSearch]);
    var contextValue = {
        search: search,
        setSearch: setSearch,
        debouncedSearch: debouncedSearch,
        stockData: stockData
    };
    return value;
    {
        contextValue;
    }
    {
        props;
    }
    />;;
}
exports.Provider = Provider;
exports["default"] = exports.Context;
