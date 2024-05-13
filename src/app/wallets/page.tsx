"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Wallet, convertJsonToWallet } from '../models/wallet';
import WalletCard from '../components/walletcard';

const Page: React.FC = () => {
  const [responseData, setResponseData] = useState<Wallet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/account_wallets');
        const jsonData = await response.data;
        const parsedData = convertJsonToWallet(jsonData.jsonData);
        setResponseData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-screen gap-6">
      <header className="bg-sky-800 text-white p-4 rounded-full">
          <h1 className="text-4xl font-bold">Account Wallets</h1>
      </header>
      <div className='grid grid-cols-3 gap-6 pb-6'>
      {responseData.length > 0 ? 
      responseData.map((wallet) => {
        return (
            <WalletCard
            key={wallet.id} 
            display_name={wallet.display_name} 
            balance={wallet.balance} 
            available={wallet.available} 
            trading_enabled={wallet.trading_enabled} 
            />
        )})
       : (
        <p>Loading...</p>
      )}
      </div>
    </div>

  );
};

export default Page;
