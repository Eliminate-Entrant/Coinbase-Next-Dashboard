import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import {TradingPair, convertJsonToTradingPair } from "../models/tradingPairs";
import { Symbols, convertJsonToSymbols } from "../models/symbols";

const BASE_URL = process.env.NEXT_PUBLIC_COINBASE_API_BASE_URL;


const getTradingPairs = async (): Promise<TradingPair[]> => {
    if (!BASE_URL) {
        throw new Error("Coinbase API Base URL is not defined, please define it properly in the .env file");
    }
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        const jsonData = await response.data;
        return convertJsonToTradingPair(jsonData);
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export const useTradingPairs = (): TradingPair[] => {
  const [tradingPairs, setTradingPairs] = useState<TradingPair[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await getTradingPairs();
      setTradingPairs(jsonData);
    };
    fetchData();
  }, []);

  return tradingPairs;
};

export const tradingSymbols = (): string[] => {
  const tradingPairs = useTradingPairs();

  const baseSymbols = useMemo(() => {
    return tradingPairs.map(pair => pair.display_name);
  }, [tradingPairs]);

  return baseSymbols;
};


export const getSymbolPrice = async (
  trading_pair: string,
  start: Date | null = null,
  end: Date | null = null,
  granularity: number | null = null
): Promise<Symbols[]> => {
  if (!BASE_URL) {
      throw new Error("Coinbase API Base URL is not defined, please define it properly in the .env file");
  }
  try {
    console.log("Getting candles;", start, end, granularity)
      const response = await axios.get(`${BASE_URL}/products/${trading_pair}/candles`,
        {
          params : {
            "start": start ? start : "",
            "end": end ? end : "",
            "granularity": granularity ? granularity : ""
        }
      }
      );
      const jsonData = await response.data;
      return convertJsonToSymbols(jsonData);
  } catch (error) {
      console.error("Error:", error);
      throw error;
  }
};