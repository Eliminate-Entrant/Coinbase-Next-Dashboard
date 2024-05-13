import React from 'react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';

interface InputProps {
  balance: number;
  available: number;
  trading_enabled: boolean;
  display_name: string;
}

const WalletCard: React.FC<InputProps> = ({ balance, available, trading_enabled, display_name }) => {
  return (
    <Card className="w-full max-w-xs shadow-xl rounded-2xl">
    <CardBody className="p-4">
        <h3 className="text-lg leading-6 font-bold text-gray-900">{display_name}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 sm:flex sm:justify-between">
            <span className="font-semibold mr-4">Balance: {balance}</span>
            <span className="font-semibold flex flex-col items-end">
                Available: {available}
            </span>
        </p>
    </ CardBody>
      <CardFooter className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
          ${trading_enabled ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
        >
          {trading_enabled ? 'Trading Enabled' : 'Trading Disabled'}
        </span>
      </CardFooter>
    </Card>
  );
};

export default WalletCard;
