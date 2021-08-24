import { ApiProxy } from '../../proxy';
import { Artist, TrackInfo } from '../common';
import { BaseService } from '../service.base';
import { GeoTopArtistsParams, getTopArtists } from './getTopArtists';
import { GeoTopTracksParams, getTopTracks } from './getTopTracks';

export type GeoMethod = 'geo.getTopArtists' | 'geo.getTopTracks';

export class GeoService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public getTopArtists = (params: GeoTopArtistsParams): Promise<Artist[]> => (
    getTopArtists(this.proxy, params)
  );

  public getTopTracks = (params: GeoTopTracksParams): Promise<TrackInfo[]> => (
    getTopTracks(this.proxy, params)
  );
}
