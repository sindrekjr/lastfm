import { Params } from '../../proxy';
import { MethodFunc } from '../common';
import { User } from './getFriends';

export interface UserGetInfoParams extends Params {
 user: string;
}

export interface UserInfo extends User {
  gender: string;
  age: string;
}

interface UserGetInfoResponseBody {
  user: UserInfo;
}

export const getInfo: MethodFunc<UserGetInfoParams, UserInfo> = async (proxy, params) => {
  const response = await proxy.sendRequest('user.getInfo', params);
  const { user } = await response.json() as UserGetInfoResponseBody;
  return user;
};
