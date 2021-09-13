import { Params } from '../../proxy';
import { Artist, BoolStr, MethodFunc, TimePeriod } from '../common';

export interface UserGetTopArtistsParams extends Params {
  user: string;
  period?: TimePeriod;
  limit?: number;
  page?: number;
}

export interface TopArtist extends Artist {
  playcount: string;
  streamable: BoolStr;
  '@attr': {
    rank: string;
  };
}

interface UserGetTopArtistsResponseBody {
  topartists: {
    artist: TopArtist[];
    '@attr': {
      page: string;
      perPage: string;
      user: string;
      total: string;
      totalPages: string;
    };
  };
}

export const getTopArtists: MethodFunc<UserGetTopArtistsParams, TopArtist[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('user.getTopArtists', params);
  const { topartists: { artist } } = await response.json() as UserGetTopArtistsResponseBody;
  return artist;
};
