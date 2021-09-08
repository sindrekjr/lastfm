import { ApiProxy } from '../../proxy';
import { BaseService } from '../service.base';

import { getFriends, User, UserGetFriendsParams } from './getFriends';
import { getInfo, UserGetInfoParams, UserInfo } from './getInfo';

export type UserMethod =
  'user.getFriends' |
  'user.getInfo' |
  'user.getLovedTracks' |
  'user.getPersonalTags' |
  'user.getRecentTracks' |
  'user.getTopAlbums' |
  'user.getTopArtists' |
  'user.getTopTags' |
  'user.getTopTracks' |
  'user.getWeeklyAlbumChart' |
  'user.getWeeklyArtistChart' |
  'user.getWeeklyChartList' |
  'user.getWeeklyTrackChart';

export class UserService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public getFriends = (params: UserGetFriendsParams): Promise<User[]> => (
    getFriends(this.proxy, params)
  );

  public getInfo = (params: UserGetInfoParams): Promise<UserInfo> => (
    getInfo(this.proxy, params)
  );
}
