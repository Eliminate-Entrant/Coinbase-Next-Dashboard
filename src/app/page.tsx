"use client";

import React from 'react';
import TradingPairTable from './components/tradingpairtable';
import { useTradingPairs } from './api/coinbase';
import { TradingPair } from './models/tradingPairs';
import { Card, CardBody } from '@nextui-org/react';

const HomePage: React.FC = () => {
    const tradingPairs: TradingPair[] = useTradingPairs();
    const totalTradingPairs: number = tradingPairs.length;

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-sky-950 text-white p-4 rounded-full">
                <h1 className="text-4xl font-bold">Coinbase Dashboard</h1>
            </header>
            <div className="flex justify-center items-center mt-6">
                <Card className="w-full max-w shadow-xl rounded-xl">
                    <CardBody className="p-4">
                        <h3 className="text-lg leading-6 font-bold text-gray-900">Welcome to the Coinbase Dashboard</h3>
                        <p className="mt-2 text-sm text-gray-500">This dashboard provides real-time updates for trading pairs available on Coinbase.</p>
                        <p className="mt-2 text-sm text-gray-500">It has three main sections:</p>
                        <ol className="list-decimal list-inside text-sm text-gray-500 mt-2">
                            <li>Trading Pairs: Displays all trading pairs available on Coinbase.</li>
                            <li>Displays historical prices of selected symbols.</li>
                            <li>Trading Accounts: Displays trading accounts available on Coinbase.</li>
                        </ol>
                        <p className="mt-2 text-sm text-gray-500">Tried implementing live updates using WebSocket but it is not working due to threading issues that need to be resolved.</p>
                    </CardBody>
                </Card>
            </div>
            <div className="flex flex-1 justify-center items-center mt-6">
                <Card className="w-full max-w-md shadow-xl rounded-xl">
                    <CardBody className="p-4">
                        <h3 className="text-lg leading-6 font-bold text-gray-900">Total Trading Pairs</h3>
                        <p className="mt-2 text-xl font-semibold text-gray-500">{totalTradingPairs}</p>
                    </CardBody>
                </Card>
            </div>
            <div className="flex flex-col flex-1 overflow-y px-4 py-2">
                <h2 className="text-2xl font-bold mb-4">Trading Pairs</h2>
                <div className="flex justify-center">
                    <div className="w-full max-w-screen-lg overflow-x-auto shadow-xl rounded-xl">
                        <TradingPairTable tradingPairs={tradingPairs}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
