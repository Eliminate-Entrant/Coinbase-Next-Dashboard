import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { TradingPair } from "../models/tradingPairs";

type StatusColor = "success" | "danger";

const statusColorMap: Record<number, StatusColor> = {
  1: "success",
  0: "danger",
};

interface TradingPairProps {
  tradingPairs: TradingPair[];
}

const TradingPairTable: React.FC<TradingPairProps> = ({ tradingPairs }) => {
    const renderCell = React.useCallback((pair: TradingPair, columnKey: keyof TradingPair) => {
        const cellValue = pair[columnKey];
      
        if (typeof cellValue === "boolean") {
          return (
            <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
      ${cellValue ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
    >
      {cellValue ? 'True' : 'False'}
    </span>
          );
        }
      
        return cellValue;
      }, []);
      
  const columns = [
    { uid: "display_name", name: "Name" },
    { uid: "base_currency", name: "Base Currency" },
    { uid: "quote_currency", name: "Quote Currency" },
    { uid: "quote_increment", name: "Quote Increment" },
    { uid: "base_increment", name: "Base Increment" },
    { uid: "min_market_funds", name: "Min Market Funds" },
    { uid: "margin_enabled", name: "Margin Enabled" },
    { uid: "post_only", name: "Post Only" },
    { uid: "limit_only", name: "Limit Only" },
    { uid: "cancel_only", name: "Cancel Only" },
    { uid: "status", name: "Status" },
    { uid: "status_message", name: "Status Message" },
    { uid: "trading_disabled", name: "Trading Disabled" },
    { uid: "fx_stablecoin", name: "FX Stablecoin" },
    { uid: "max_slippage_percentage", name: "Max Slippage Percentage" },
    { uid: "auction_mode", name: "Auction Mode" },
    { uid: "high_bid_limit_percentage", name: "High Bid Limit Percentage" },
  ];

  return (
    <Table aria-label="Trading Pairs Table" className="w-full">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align="start" className="border-b px-4 py-2 bg-gray-200 font-bold">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={tradingPairs}>
        {(pair) => (
          <TableRow key={pair.id} className="border-b px-6 py-4">
            {(columnKey) => (
              <TableCell className="text-left">
                {renderCell(pair, columnKey as keyof TradingPair)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TradingPairTable;
