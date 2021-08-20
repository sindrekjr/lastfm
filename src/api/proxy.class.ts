export interface Params extends Record<string, string> {
  api_key: string;
  format: string;
}

export abstract class ApiProxy {
  protected baseUrl: string = 'http://ws.audioscrobbler.com/2.0/';
  protected headers: HeadersInit = {
    'Content-Type': 'application/json',
    'User-Agent': 'git@github.com:sindrekjr/lastfm',
  };

  protected sendRequest = async (params: Params): Promise<Response> => {
    const paramsString = new URLSearchParams(params).toString();
    return await fetch(`${this.baseUrl}?${paramsString}`, {
      headers: {
        ...this.headers,
        'Content-Length': Buffer.byteLength(paramsString).toString(),
      },
    });
  }
}
