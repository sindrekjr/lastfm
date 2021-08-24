import { ApiProxy } from '../../proxy';
import { TrackInfo } from '../common';
import { BaseService } from '../service.base';

import { ChartTopArtistsParams, getTopArtists, TopArtist } from './getTopArtists';
import { ChartTopTagsParams, getTopTags, TopTag } from './getTopTags';
import { ChartTopTracksParams, getTopTracks } from './getTopTracks';

export type ChartMethod =
  'chart.getTopArtists' |
  'chart.getTopTags' |
  'chart.getTopTracks';

export class ChartService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public getTopArtists = async (params: ChartTopArtistsParams = {}): Promise<TopArtist[]> => (
    getTopArtists(this.proxy, params)
  );

  public getTopTags = async (params: ChartTopTagsParams = {}): Promise<TopTag[]> => (
    getTopTags(this.proxy, params)
  );

  public getTopTracks = async (params: ChartTopTracksParams = {}): Promise<TrackInfo[]> => (
    getTopTracks(this.proxy, params)
  );
}
