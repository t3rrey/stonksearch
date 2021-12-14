import axios from "axios";
import logger from "../workers/logger.config";

// This function is used to connect to the backend API
// Ticker always needs to be converted to an uppercase
// Can be used for minute, hour, daily and monthly data just pass in approiate key word

const getStockData = async (
  ticker: string,
  startDate: Date,
  endDate: Date,
  timeSpan: String
) => {
  let requestResult = await axios.get(
    `https://api.polygon.io/v2/aggs/ticker/${ticker.toUpperCase()}/range/1/${timeSpan}/${startDate}/${endDate}?apiKey=${
      process.env.POLYGON_API_KEY
    }`
  );

  logger.info(requestResult);
  return requestResult;
};
