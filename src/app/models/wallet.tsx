export interface Wallet {
    id: string
    currency: string
    balance: number
    hold: number
    available: number
    profile_id: string
    trading_enabled: boolean
    pending_deposit: number
    display_name: string
}

export const convertJsonToWallet = (jsons: any): Wallet[] => {
    const wallets: Wallet[] = jsons.map((json: any) => {
        return {
            id: json.id,
            currency: json.currency,
            balance: json.balance,
            hold: json.hold,
            available: json.available,
            profile_id: json.profile_id,
            trading_enabled: json.trading_enabled,
            pending_deposit: json.pending_deposit,
            display_name: json.display_name,
        }
    });

    return wallets;
    
}