export interface Symbols {
    time: Date
    low: number
    high: number
    open: number
    close: number
    volume: number
}

export const convertJsonToSymbols = (jsons: any): Symbols[] => {
    const symbols: Symbols[] = jsons.map((json: any) => {
        return {
            time: new Date(json[0]*1000), //new Date(json[0]*1000), // Convert to milliseconds
            low: json[1],
            high: json[2],
            open: json[3],
            close: json[4],
            volume: json[5],
        }
    });

    return symbols;
    
}


interface GranularityDict {
    [key: string]: number;
  }
  
export const granularity_dict: GranularityDict = {
    "1m": 60,
    "5m": 300,
    "15m": 900,
    "1h": 3600,
    "6h": 21600,
    "1d": 86400,
  };
  