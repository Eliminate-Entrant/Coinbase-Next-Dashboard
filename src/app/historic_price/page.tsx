"use client";

import { useState, useEffect } from "react";

import DateRangePicker from "../components/daterange";
import CandlestickChart from "../components/candlestick";
import { Symbols, granularity_dict } from "../models/symbols";
import { DropdownButton } from "../components/dropdown_button";
import { TradingSymbols, getSymbolPrice } from "../api/coinbase";

const HistoricPrice: React.FC = () => {
  const symbolsList = TradingSymbols();
  const [selectedSymbol, setSelectedSymbol] = useState<string>(symbolsList[0] ?? "-");
  const [selectedGranularity, setSelectedGranularity] = useState<number>(granularity_dict["1d"]);
  const [selectedGranularityKey, setSelectedGranularityKey] = useState<string>("1d");
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const getGranularityKeys: string[] = Object.keys(granularity_dict);
  const [symbolPrices, setSymbolPrices] = useState<Symbols[]>([]);

  useEffect(() => {
    if (!selectedSymbol || selectedSymbol === "-") return;
    const fetchData = async () => {
      console.log("Fetching symbol")
      const symbolData = await getSymbolPrice(selectedSymbol, selectedStartDate, selectedEndDate, selectedGranularity);
      setSymbolPrices(symbolData);
    };
    fetchData();
  }, [selectedSymbol, selectedStartDate, selectedEndDate, selectedGranularity]);

  const handleSymbolChange = (value: string) => {
    setSelectedSymbol(value);
  };

  const handleGranularityChange = (value: string) => {
    setSelectedGranularityKey(value);
    setSelectedGranularity(granularity_dict[value]);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-sky-900 text-white p-4 rounded-full">
        {selectedSymbol === "-" ? (
          <h1 className="text-4xl font-bold">Choose Symbol to view prices</h1>
        ) : (
          <h1 className="text-4xl font-bold">Candle Prices of {selectedSymbol}</h1>
        )}
      </header>
      <div className="flex justify-between px-4 py-2">
        <div className="order-1">
        <DropdownButton list={symbolsList} title="Symbol" selected={selectedSymbol} onSelect={handleSymbolChange} />
        </div>
        <div className="order-last">
        <DropdownButton list={getGranularityKeys} title="Granularity" selected={selectedGranularityKey} onSelect={handleGranularityChange} />
        </div>
      </div>
      <div className="flex flex-1">
        <div className="grow relative bg-gray-100">
        {selectedSymbol === "-" ? (
            <h1 className="flex justify-center items-center h-full font-bold">Please select a symbol</h1>):
           (<CandlestickChart data={symbolPrices} />)
        }
        </div>
        <div className="p-4">
          <DateRangePicker onSelectDates={[setSelectedStartDate, setSelectedEndDate]} />
        </div>
      </div>
    </div>
  );
};

export default HistoricPrice;
