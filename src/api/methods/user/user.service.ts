import { Tag } from '..';
import { ApiProxy } from '../../proxy';
import { Album, Artist, Chart, TagType, Track } from '../common';
import { BaseService } from '../service.base';

import { getFriends, User, UserGetFriendsParams } from './getFriends';
import { getInfo, UserGetInfoParams, UserInfo } from './getInfo';
import { getLovedTracks, LovedTrack, UserGetLovedTracksParams } from './getLovedTracks';
import { getPersonalTags, UserGetPersonalTagsParams } from './getPersonalTags';
import { getRecentTracks, RecentTrack, UserGetRecentTracksParams } from './getRecentTracks';
import { getTopAlbums, TopAlbum, UserGetTopAlbumsParams } from './getTopAlbums';
import { getTopArtists, TopArtist, UserGetTopArtistsParams } from './getTopArtists';
import { getTopTags, UserGetTopTagsParams } from './getTopTags';
import { getTopTracks, TopTrack, UserGetTopTracksParams } from './getTopTracks';
import {
  UserChartAlbum,
  getWeeklyAlbumChart,
  UserGetWeeklyAlbumChartParams,
} from './getWeeklyAlbumChart';
import {
  getWeeklyArtistChart,
  UserChartArtist,
  UserGetWeeklyArtistChartParams,
} from './getWeeklyArtistChart';
import { getWeeklyChartList, UserGetWeeklyChartListParams } from './getWeeklyChartList';
import {
  getWeeklyTrackChart,
  UserChartTrack,
  UserGetWeeklyTrackChartParams,
} from './getWeeklyTrackChart';

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

  public getRecentTracks = (params: UserGetRecentTracksParams): Promise<RecentTrack[]> => (
    getRecentTracks(this.proxy, params)
  );

  public getTopAlbums = (params: UserGetTopAlbumsParams): Promise<TopAlbum[]> => (
    getTopAlbums(this.proxy, params)
  );

  public getTopArtists = (params: UserGetTopArtistsParams): Promise<TopArtist[]> => (
    getTopArtists(this.proxy, params)
  );

  public getTopTags = (params: UserGetTopTagsParams): Promise<Tag[]> => (
    getTopTags(this.proxy, params)
  );

  public getTopTracks = (params: UserGetTopTracksParams): Promise<TopTrack[]> => (
    getTopTracks(this.proxy, params)
  );

  public getWeeklyAlbumChart = (
    params: UserGetWeeklyAlbumChartParams,
  ): Promise<UserChartAlbum[]> => (
    getWeeklyAlbumChart(this.proxy, params)
  );

  public getWeeklyArtistChart = (
    params: UserGetWeeklyArtistChartParams,
  ): Promise<UserChartArtist[]> => (
    getWeeklyArtistChart(this.proxy, params)
  );

  public getWeeklyChartList = (params: UserGetWeeklyChartListParams): Promise<Chart[]> => (
    getWeeklyChartList(this.proxy, params)
  );

  public getWeeklyTrackChart = (
    params: UserGetWeeklyTrackChartParams,
  ): Promise<UserChartTrack[]> => (
    getWeeklyTrackChart(this.proxy, params)
  );
}
