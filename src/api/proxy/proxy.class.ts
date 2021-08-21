export interface Params extends Record<string, number | string | undefined> {
  api_key?: string;
}

export interface ApiProxyOptions {
  apiKey: string;
  format?: string;
  sessionKey?: string;
  sharedSecret?: string;
  userAgent?: string;
}

export class ApiProxy {
  private baseUrl: string = 'https://ws.audioscrobbler.com/2.0/';
  private apiKey: string;
  private format: string;
  private userAgent: string;
  private sessionKey?: string;
  private sharedSecret?: string;

  constructor({
    apiKey,
    format = 'json',
    sessionKey,
    sharedSecret,
    userAgent = 'git@github.com:sindrekjr/lastfm',
  }: ApiProxyOptions) {
    this.apiKey = apiKey;
    this.format = format;
    this.sessionKey = sessionKey;
    this.sharedSecret = sharedSecret;
    this.userAgent = userAgent;
  }

  public sendRequest = async (method: string, params: Params): Promise<Response> => (
    await fetch(`${this.baseUrl}?${this.getQueryParams(method, params).toString()}`, {
      headers: this.getHeaders(),
    })
  );

  private getHeaders = (): HeadersInit => ({
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': this.userAgent,
  });

  private getQueryParams = (method: string, params: Params): URLSearchParams => (
    new URLSearchParams({
      api_key: this.apiKey,
      format: this.format,
      method,
      ...params,
    })
  );
}
