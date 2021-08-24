import { Params } from '../../proxy';
import { Artist, BoolStr, MethodFunc } from '../common';

export interface TagTopArtistsParams extends Params {
  tag: string;
  limit?: number;
  page?: number;
}

export interface RankedArtist extends Artist {
  streamable: BoolStr;
  '@attr': {
    rank: string;
  };
}

interface TagTopArtistsResponseBody {
  topartists: {
    artist: RankedArtist[];
    '@attr': {
      tag: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const getTopArtists: MethodFunc<TagTopArtistsParams, RankedArtist[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('tag.getTopArtists', params);
  const { topartists: { artist } } = await response.json() as TagTopArtistsResponseBody;
  return artist;
};
