
import { NextResponse } from 'next/server';
import CoinbaseAuthService from '../auth';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_COINBASE_API_BASE_URL;

export async function GET(request: Request) {
  try {
    if (!BASE_URL) {
      throw new Error("Coinbase API Base URL is not defined, please define it properly in the .env file");
    }
  
    const coinbaseAuth = new CoinbaseAuthService();
    const headers = coinbaseAuth.getHeaders("GET", "/accounts", "");
  
    const response = await axios.get(`${BASE_URL}/accounts`, { headers });
    const jsonData = await response.data;
  
    return NextResponse.json({jsonData}, { status: 200 })
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
