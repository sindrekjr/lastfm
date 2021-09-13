import { ApiProxy } from '../../proxy';
import { Album, Artist, TagType, Track } from '../common';
import { BaseService } from '../service.base';

import { getFriends, User, UserGetFriendsParams } from './getFriends';
import { getInfo, UserGetInfoParams, UserInfo } from './getInfo';
import { getLovedTracks, LovedTrack, UserGetLovedTracksParams } from './getLovedTracks';
import { getPersonalTags, UserGetPersonalTagsParams } from './getPersonalTags';

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

  public getLovedTracks = (params: UserGetLovedTracksParams): Promise<LovedTrack[]> => (
    getLovedTracks(this.proxy, params)
  );

  public getPersonalTags = <T extends TagType>(
    params: UserGetPersonalTagsParams<T>,
  ): Promise<Artist[] | Album[] | Track[]>  => {
    const { taggingtype } = params;

    if (taggingtype === 'album') {
      return getPersonalTags(this.proxy, params as UserGetPersonalTagsParams<'album'>);
    }

    if (taggingtype === 'artist') {
      return getPersonalTags(this.proxy, params as UserGetPersonalTagsParams<'artist'>);
    }

    if (taggingtype === 'track') {
      return getPersonalTags(this.proxy, params as UserGetPersonalTagsParams<'track'>);
    }

    throw new Error('Invalid taggingtype supplied.');
  }
}
