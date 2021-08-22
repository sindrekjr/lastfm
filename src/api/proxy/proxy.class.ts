import { createHash } from 'crypto';

import { Method } from '../methods';

export interface Params extends Record<string, number | string | undefined> {
  api_key?: string;
}

export interface ApiProxyOptions {
  apiKey: string;
  format?: string;
  sessionKey?: string;
  secret?: string;
  userAgent?: string;
}

// const signMethod = (method: Method, params: Params, key: string, secret: string): string => {
//   const sorted = Object.entries(params)
//     .filter(e => !['callback', 'format'].includes(e[0]))
//     .sort((a, b) => a[0] < b[0] ? -1 : 1);

//   const md5 = createHash('md5');
//   md5.update(`api_key${key}${sorted.map(p => p.join('')).join('')}${secret}`);
//   return md5.digest('hex');
// };

export class ApiProxy {
  private baseUrl: string = 'https://ws.audioscrobbler.com/2.0/';
  private apiKey: string;
  private format: string;
  private userAgent: string;
  private secret?: string;
  private sessionKey?: string;

  constructor({
    apiKey,
    format = 'json',
    sessionKey,
    secret,
    userAgent = 'git@github.com:sindrekjr/lastfm',
  }: ApiProxyOptions) {
    this.apiKey = apiKey;
    this.format = format;
    this.sessionKey = sessionKey;
    this.secret = secret;
    this.userAgent = userAgent;
  }

  private getHeaders = (): HeadersInit => ({
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': this.userAgent,
  });

  private getQueryParams = (method: Method, params: Params, sign = false): URLSearchParams => {
    if (sign) {
      if (!this.secret) throw new Error('Unable to sign without a secret.');

      return new URLSearchParams({
        ...params,
        api_key: this.apiKey,
        api_sig: this.signMethod(method, params),
        format: this.format,
        method,
      });
    }

    return new URLSearchParams({
      ...params,
      api_key: this.apiKey,
      format: this.format,
      method,
    });
  };

  private signMethod = (method: Method, params: Params): string => {
    const sorted = Object.entries({ ...params, method })
      .filter(e => !['callback', 'format'].includes(e[0]))
      .sort((a, b) => a[0] < b[0] ? -1 : 1);

    const md5 = createHash('md5');
    md5.update(`api_key${this.apiKey}${sorted.map(p => p.join('')).join('')}${this.secret}`);
    return md5.digest('hex');
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
      body: this.getQueryParams(method, { ...params, sk: this.sessionKey }, true),
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': this.userAgent,
      },
    });
  }
}
