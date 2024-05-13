import * as crypto from "crypto";

export default class CoinbaseAuthService {
  private apiKey: string;
  private apiSecret: string;
  private apiPassphrase: string;

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_COINBASE_API_KEY ?? "";
    this.apiSecret = process.env.NEXT_PUBLIC_COINBASE_API_SECRET ?? "";
    this.apiPassphrase = process.env.NEXT_PUBLIC_COINBASE_API_PASSPHRASE ?? "";
    if (!this.apiKey || !this.apiSecret || !this.apiPassphrase) {
        console.log("Coinbase API Key, Secret, and Passphrase must be defined in the .env file");
      throw new Error(
        "Coinbase API Key, Secret, and Passphrase must be defined in the .env file"
      );
    }
  }

  private getSignature(method: string, requestPath: string, message = ""): string {
    const key = Buffer.from(this.apiSecret, "base64");
    const messageBytes = Buffer.concat([
      Buffer.from(this.cbAccessTimestamp),
      Buffer.from(method),
      Buffer.from(requestPath),
      Buffer.from(message),
    ]);
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(messageBytes);
    return hmac.digest("base64").toString();
  }

  private get cbAccessTimestamp(): string {
    return Math.floor(Date.now() / 1000).toString();
  }

  public getHeaders(method: string, requestPath: string, message = ""): Record<string, string> {
    return {
      "CB-ACCESS-KEY": this.apiKey,
      "CB-ACCESS-SIGN": this.getSignature(method, requestPath, message),
      "CB-ACCESS-PASSPHRASE": this.apiPassphrase,
      "CB-ACCESS-TIMESTAMP": this.cbAccessTimestamp,
      "Content-Type": "application/json",
    };
  }
}
