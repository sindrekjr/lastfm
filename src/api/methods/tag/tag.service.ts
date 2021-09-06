import { ApiProxy, Params } from '../../proxy';
import { Album, Tag } from '../common';
import { BaseService } from '../service.base';

import { getInfo, TagInfo, TagInfoParams } from './getInfo';
import { getSimilar, TagSimilarParams } from './getSimilar';
import { getTopAlbums, TagTopAlbumsParams } from './getTopAlbums';
import { getTopArtists, RankedArtist, TagTopArtistsParams } from './getTopArtists';
import { getTopTags, TopTag } from './getTopTags';
import { getTopTracks, RankedTrack, TagTopTracksParams } from './getTopTracks';
import { Chart, getWeeklyChartList, TagWeeklyChartListParams } from './getWeeklyChartList';

export type TagMethod =
  'tag.getInfo' |
  'tag.getSimilar' |
  'tag.getTopAlbums' |
  'tag.getTopArtists' |
  'tag.getTopTags' |
  'tag.getTopTracks' |
  'tag.getWeeklyChartList';

export class TagService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public getInfo = (params: TagInfoParams): Promise<TagInfo> => (
    getInfo(this.proxy, params)
  );

  public getSimilar = (params: TagSimilarParams): Promise<Tag[]> => (
    getSimilar(this.proxy, params)
  );

  public getTopAlbums = (params: TagTopAlbumsParams): Promise<Album[]> => (
    getTopAlbums(this.proxy, params)
  );

  public getTopArtists = (params: TagTopArtistsParams): Promise<RankedArtist[]> => (
    getTopArtists(this.proxy, params)
  );

  public getTopTags = (params: Params = {}): Promise<TopTag[]> => (
    getTopTags(this.proxy, params)
  );

  public getTopTracks = (params: TagTopTracksParams): Promise<RankedTrack[]> => (
    getTopTracks(this.proxy, params)
  );

  public getWeeklyChartList = (params: TagWeeklyChartListParams): Promise<Chart[]> => (
    getWeeklyChartList(this.proxy, params)
  );
}
