import { Params } from '../../proxy';
import { BoolStr, Image, MethodFunc } from '../common';

export interface UserGetRecentTracksParams extends Params {
  user: string;
  limit?: number;
  page?: number;
  extended?: BoolStr;
  from?: number | Date;
  to?: number | Date;
}

export interface RecentTrack {
  artist: {
    mbid: string;
    '#text': string;
  };
  album: {
    mbid: string;
    '#text': string;
  };
  image: Image[];
  streamable: BoolStr;
  date: {
    uts: string;
    '#text': string;
  };
  url: string;
  name: string;
  mbid: string;
}

interface UserGetRecentTracksResponseBody {
  recenttracks: {
    '@attr': {
      page: string;
      perPage: string;
      user: string;
      total: string;
      totalPages: string;
    };
    track: RecentTrack[];
  };
}

export const getRecentTracks: MethodFunc<UserGetRecentTracksParams, RecentTrack[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('user.getRecentTracks', params);
  const { recenttracks: { track } } = await response.json() as UserGetRecentTracksResponseBody;
  return track;
};
