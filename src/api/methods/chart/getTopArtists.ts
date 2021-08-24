import { Params } from '../../proxy';
import { Artist, BoolStr, MethodFunc } from '../common';

export interface ChartTopArtistsParams extends Params {
  page?: number;
  limit?: number;
}

export interface TopArtist extends Artist {
  playcount: string;
  listeners: string;
  streamable: BoolStr;
}

interface ChartTopArtistsResponseBody {
  artists: {
    artist: TopArtist[];
    '@attr': {
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const getTopArtists: MethodFunc<ChartTopArtistsParams, TopArtist[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('chart.getTopArtists', params);
  const { artists: { artist } } = await response.json() as ChartTopArtistsResponseBody;
  return artist;
};
