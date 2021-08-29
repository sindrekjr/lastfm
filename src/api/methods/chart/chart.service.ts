import { ApiProxy } from '../../proxy';
import { TrackExtended } from '../common';
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

  public getTopArtists = (params: ChartTopArtistsParams = {}): Promise<TopArtist[]> => (
    getTopArtists(this.proxy, params)
  );

  public getTopTags = (params: ChartTopTagsParams = {}): Promise<TopTag[]> => (
    getTopTags(this.proxy, params)
  );

  public getTopTracks = (params: ChartTopTracksParams = {}): Promise<TrackExtended[]> => (
    getTopTracks(this.proxy, params)
  );
}
