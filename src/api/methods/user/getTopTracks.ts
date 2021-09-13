import { Params } from '../../proxy';
import { BoolStr, MethodFunc, Image, TimePeriod, Track } from '../common';

export interface UserGetTopTracksParams extends Params {
  user: string;
  period?: TimePeriod;
  limit?: number;
  page?: number;
}

export interface TopTrack extends Track {
  duration: string;
  playcount: string;
  image: Image[];
  streamable: {
    fulltrack: BoolStr;
    '#text': BoolStr;
  };
  mbid: string;
}

interface UserGetTopTracksResponseBody {
  toptracks: {
    track: TopTrack[];
    '@attr': {
      page: string;
      perPage: string;
      user: string;
      total: string;
      totalPages: string;
    };
  };
}

export const getTopTracks: MethodFunc<UserGetTopTracksParams, TopTrack[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('user.getTopTracks', params);
  const { toptracks: { track } } = await response.json() as UserGetTopTracksResponseBody;
  return track;
};
