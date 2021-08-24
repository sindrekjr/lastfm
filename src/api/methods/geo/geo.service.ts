import { ApiProxy } from '../../proxy';
import { Artist } from '../common';
import { BaseService } from '../service.base';
import { GeoTopArtistsParams, getTopArtists } from './getTopArtists';

export type GeoMethod = 'geo.getTopArtists' | 'geo.getTopTracks';

export class GeoService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public getTopArtists = (params: GeoTopArtistsParams): Promise<Artist[]> => (
    getTopArtists(this.proxy, params)
  );
}
