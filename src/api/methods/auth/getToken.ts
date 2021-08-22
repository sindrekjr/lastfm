import { ApiProxy, Params } from '../../proxy';

export interface TokenResponseBody {
  token: string;
}

export const getToken = async (proxy: ApiProxy, params: Params = {}): Promise<string> => {
  const response = await proxy.sendRequest('auth.getToken', params, true);
  const { token } = await response.json();
  return token;
};
