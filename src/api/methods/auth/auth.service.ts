import { ApiProxy, Params } from '../../proxy';
import { BaseService } from '../service.base';
import { AuthSessionParams, getSession } from './getSession';
import { getToken } from './getToken';

export type AuthMethod = 'auth.getSession' | 'auth.getToken';

export type AuthParams = Params & {
  api_key?: string;
  api_sig?: string;
}

export interface Session {
  name: string;
  key: string;
  subscriber: number;
}

export class AuthService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public getSession = async (params: AuthSessionParams): Promise<Session> => (
    getSession(this.proxy, params)
  );

  public getToken = async (params: AuthParams = {}): Promise<string> => (
    getToken(this.proxy, params)
  );
}
