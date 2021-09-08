import { Params } from '../../proxy';
import { BoolStr, Image, MethodFunc } from '../common';

export interface UserGetFriendsParams extends Params {
  user: string;
  recenttracks?: BoolStr;
  limit?: number;
  page?: number;
}

export interface User {
  playlists: string;
  playcount: string;
  subscriber: BoolStr;
  name: string;
  country: string;
  image: Image[];
  registered: {
    unixtime: string;
    '#text': string;
  };
  url: string;
  realname: string;
  bootstrap: string;
  type: string;
}

interface UserGetFriendsResponseBody {
  friends: {
    user: User[];
    '@attr': {
      page: number;
      perPage: number;
      user: string;
      total: string;
      totalPages: string;
    };
  };
}

export const getFriends: MethodFunc<UserGetFriendsParams, User[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('user.getFriends', params);
  const { friends: { user } } = await response.json() as UserGetFriendsResponseBody;
  return user;
};
