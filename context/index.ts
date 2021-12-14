import { createContext, useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { getStockData } from "../services/API/backend.config";

export const Context = createContext({});

export function Provider(props: any) {
  const [search, setSearch] = useState("tsla");
  const debouncedSearch = useDebounce(search, 1000);
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    getStockData(debouncedSearch, 0, 30, "day").then((response) =>
      setStockData(response.data.results)
    );
  }, [debouncedSearch]);

  const contextValue = {
    search,
    setSearch,
    debouncedSearch,
    stockData,
  };

  return <Context.Provider value={contextValue} {...props} />;
}

export default Context;
