import axios from "axios";
import logger from "../workers/logger.config";

// This function is used to connect to the backend API for timeseries data
// Ticker always needs to be converted to an uppercase
// Can be used for minute, hour, daily and monthly data just pass in approiate key word
// date must be in format of YYYY-MM-DD ONLY!!!
// returns an objects with an array of time series data

export const getStockData = async (
  ticker: String,
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

// connects to third party news API
// input ticker not case sensitive
// Returns array of news objects with summary, title and source link
/**
 * 
 * @param ticker 
 * @returns 
 */
export const getNewsData = async (ticker: String) => {
  let request = await axios.get(
    `https://newsapi.org/v2/everything?q=${ticker}&from=2021-09-27&sortBy=popularity&language=english&apiKey=${process.env.NEWS_API_KEY}`
  );
  return request;
};

// Connects to a third party API that gives data relating to companies financials
// Input is ticker which Upper case is needed.
// Field is the relevevant field for the balance sheet e.g: Revenue which needs to be in Upper Case

export const stockFinancials = async (ticker: String, field: String) => {
  let fields = field.toUpperCase();
  let request = await axios.get(
    `https://www.alphavantage.co/query?function=${fields}&symbol=${ticker}&apikey=${AV_API_KEY}`
  );
  logger.info(request);
  return request;
};
