export interface TradingPair {
    id: string
    base_currency: string
    quote_currency: string
    quote_increment: number
    base_increment: number
    display_name: string
    min_market_funds: number
    margin_enabled: boolean
    post_only: boolean
    limit_only: boolean
    cancel_only: boolean
    status: string
    status_message: string
    trading_disabled: boolean
    fx_stablecoin: boolean
    max_slippage_percentage: number
    auction_mode: boolean
    high_bid_limit_percentage: string
}


export const convertJsonToTradingPair = (jsons: any): TradingPair[] => {
    const tradingPairs: TradingPair[] = jsons.map((json: any) => {
        return {
            id: json.id,
            base_currency: json.base_currency,
            quote_currency: json.quote_currency,
            quote_increment: json.quote_increment,
            base_increment: json.base_increment,
            display_name: json.display_name,
            min_market_funds: json.min_market_funds,
            margin_enabled: json.margin_enabled,
            post_only: json.post_only,
            limit_only: json.limit_only,
            cancel_only: json.cancel_only,
            status: json.status,
            status_message: json.status_message,
            trading_disabled: json.trading_disabled,
            fx_stablecoin: json.fx_stablecoin,
            max_slippage_percentage: json.max_slippage_percentage,
            auction_mode: json.auction_mode,
            high_bid_limit_percentage: json.high_bid_limit_percentage,
        }
    });

    return tradingPairs;
    
}