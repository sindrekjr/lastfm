import { ApiProxy, Params } from '../../proxy';
import { AuthSessionParams, getSession } from './getSession';
import { getToken } from './getToken';

export type AuthParams = Params & {
  api_key?: string;
  api_sig?: string;
}

export interface Session {
  name: string;
  key: string;
  subscriber: number;
}

export class AuthService {
  private proxy: ApiProxy;

  constructor(proxy: ApiProxy) {
    this.proxy = proxy;
  }

  public getSession = async (params: AuthSessionParams): Promise<Session> => (
    getSession(this.proxy, params)
  );

  public getToken = async (params: AuthParams = {}): Promise<string> => (
    getToken(this.proxy, params)
  );
}
