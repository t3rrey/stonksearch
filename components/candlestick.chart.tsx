import React, { useState, useEffect, useContext } from "react";
import Chart from "react-apexcharts";
import chartConfig from "../services/configs/candlestick.config";

const candlestick = () => {
  const [chartData, setChartData] = useState({});
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <div className=""></div>;
  }
  return <Chart options={chartConfig} type={"candlestick"} className="" />;
};

export default candlestick;
