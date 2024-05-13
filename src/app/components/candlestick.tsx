

import React, { useEffect, useState } from 'react';
import { Symbols } from '../models/symbols';

interface CandlestickGraphProps {
  data: Symbols[];
}

const CandlestickGraph: React.FC<CandlestickGraphProps> = ({ data }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  if (data.length === 0) {
    return <div className='flex justify-center items-center h-full font-bold'>No data available</div>;
  }

  // Dynamic import Plotly.js when running in a browser environment to avoid SSR issues
  const Plot = React.lazy(() => import('react-plotly.js'));
  if (data.length === 0) {
    return <div className='flex justify-center items-center h-full font-bold'>No data available</div>;
  }

  const timestamps = data.map(item => item.time);
  const opens = data.map(item => item.open);
  const highs = data.map(item => item.high);
  const lows = data.map(item => item.low);
  const closes = data.map(item => item.close);

  const candlestickTrace: Plotly.Data[] = [{
    x: timestamps,
    open: opens,
    high: highs,
    low: lows,
    close: closes,
    type: 'candlestick',
    name: 'Candlestick'
  }];

  const layout: Partial<Plotly.Layout> = {
    xaxis: {
      title: 'Timestamp'
    },
    yaxis: {
      title: 'Price',
      autorange: true,
    },
    autosize: true,
  };
  

  return <Plot data={candlestickTrace} layout={layout} useResizeHandler={true} style={{width: '100%', height: '100%'}} />;
};

export default CandlestickGraph;
