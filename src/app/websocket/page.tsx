"use client";

import { useEffect, useState } from 'react';
import io from 'socket.io-client';


const MyPage: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {

    try{
    const socket = io('wss://ws-feed-public.sandbox.exchange.coinbase.com/',);
    socket.emit('subscribe', {
        channels: ['ticker'],
        product_ids: ['BTC-USD'],
      });


    socket.on('message', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
        socket.disconnect();
      };
} catch (error) {
    console.error(error);
    throw error;
}
    
  }, []);

  return (
    <div>
      <h1>WebSocket Messages</h1>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyPage;
