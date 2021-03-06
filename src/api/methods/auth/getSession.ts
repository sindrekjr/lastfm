import { ApiProxy, Params } from '../../proxy';
import { Session } from './auth.service';

export type AuthSessionParams = Params & {
  token: string;
};

export interface AuthSessionResponseBody {
  session: Session;
}

export const getSession = async (proxy: ApiProxy, params: AuthSessionParams): Promise<Session> => {
  const response = await proxy.sendRequest('auth.getSession', params, true);
  const { session } = await response.json() as AuthSessionResponseBody;
  return session;
};
