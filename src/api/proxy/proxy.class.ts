import { createHash } from 'crypto';

import { Method } from '../methods';

export type ParamValue = Date | number | string | undefined;

export type Params = Record<string, ParamValue | ParamValue[]>;

export interface ApiProxyOptions {
  apiKey: string;
  secret?: string;
  sessionKey?: string;
  userAgent?: string;
}

export class ApiProxy {
  private baseUrl: string = 'https://ws.audioscrobbler.com/2.0/';
  private format: string = 'json';
  private apiKey: string;
  private secret?: string;
  private sessionKey?: string;
  private userAgent: string;

  constructor({
    apiKey,
    sessionKey,
    secret,
    userAgent = 'git@github.com:sindrekjr/lastfm',
  }: ApiProxyOptions) {
    this.apiKey = apiKey;
    this.secret = secret;
    this.sessionKey = sessionKey;
    this.userAgent = userAgent;
  }

  private getHeaders = (): HeadersInit => ({
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': this.userAgent,
  });

  private getQueryParams = (method: Method, params: Params, sign = false): URLSearchParams => {
    const { apiKey: api_key, format } = this;
    const queryParams = new URLSearchParams({
      ...params,
      api_key,
      method,
      format,
    });

    if (sign) queryParams.append('api_sig', this.signMethod(method, params));

    return queryParams;
  };

  private signMethod = (method: Method, params: Params): string => {
    if (!this.secret) throw new Error('Unable to sign method without a secret.');

    const sorted = Object.entries({ ...params, method, api_key: this.apiKey })
      .filter(e => !['callback', 'format'].includes(e[0]))
      .sort((a, b) => a[0] < b[0] ? -1 : 1);

    const md5 = createHash('md5');
    return md5.update(`${sorted.map(p => p.join('')).join('')}${this.secret}`).digest('hex');
  };

  public sendRequest = async (method: Method, params: Params, sign = false): Promise<Response> => (
    await fetch(`${this.baseUrl}?${this.getQueryParams(method, params, sign).toString()}`, {
      headers: this.getHeaders(),
    })
  );

  public sendPostRequest = async (method: Method, params: Params): Promise<Response> => {
    if (!this.sessionKey) throw new Error('Unable to authenticate and POST without a session key.');

    return await fetch(this.baseUrl, {
      method: 'POST',
      body: this.getQueryParams(method, { ...params, sk: this.sessionKey }, true).toString(),
      headers: this.getHeaders(),
    });
  }
}
