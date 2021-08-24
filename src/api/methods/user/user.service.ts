import { ApiProxy } from '../../proxy';
import { BaseService } from '../service.base';

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
}
