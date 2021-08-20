export class ApiClient {
  private key: string;
  private secret?: string;

  constructor(apiKey: string)
  constructor(apiKey: string, sharedSecret: string)
  constructor(apiKey: string, sharedSecret?: string) {
    this.key = apiKey;
    if (sharedSecret) this.secret = sharedSecret;
  }
}
