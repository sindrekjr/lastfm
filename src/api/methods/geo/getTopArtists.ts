import { Params } from '../../proxy';
import { Artist, BoolStr, MethodFunc } from '../common';

export interface GeoTopArtistsParams extends Params {
  country: string;
  limit?: number;
  page?: number;
}

interface TopArtist extends Artist {
  listeners: string;
  streamable: BoolStr;
}

interface GeoTopArtistsResponseBody {
  topartists: {
    artist: TopArtist[];
    '@attr': {
      country: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const getTopArtists: MethodFunc<GeoTopArtistsParams, Artist[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('geo.getTopArtists', params);
  const { topartists: { artist } } = await response.json() as GeoTopArtistsResponseBody;
  return artist;
};
