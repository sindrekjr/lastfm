import { Params } from '../../proxy';
import { MethodFunc, TrackInfo } from '../common';

export interface GeoTopTracksParams extends Params {
  country: string;
  location?: string;
  limit?: number;
  page?: number;
}

interface GeoTopTracksResponseBody {
  tracks: {
    track: TrackInfo[];
    '@attr': {
      country: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const getTopTracks: MethodFunc<GeoTopTracksParams, TrackInfo[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('geo.getTopTracks', params);
  const { tracks: { track } } = await response.json() as GeoTopTracksResponseBody;
  return track;
};
