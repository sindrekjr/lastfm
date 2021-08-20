export interface Params extends Record<string, number | string | undefined> {
  api_key: string;
}

const getQueryParams = (method: string, params: Params, format: string = 'json'): URLSearchParams => (
  new URLSearchParams({
    method,
    format,
    ...params,
  })
);

const getHeaders = (): HeadersInit => ({
  'Content-Type': 'application/x-www-form-urlencoded',
  'User-Agent': 'git@github.com:sindrekjr/lastfm',
});

export abstract class ApiProxy {
  private static baseUrl: string = 'https://ws.audioscrobbler.com/2.0/';

  static sendRequest = async (method: string, params: Params): Promise<Response> => (
    await fetch(`${ApiProxy.baseUrl}?${getQueryParams(method, params).toString()}`, {
      headers: getHeaders(),
    })
  );
}
