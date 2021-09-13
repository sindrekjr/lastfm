import { Params } from '../../proxy';
import { BoolStr, Image, MethodFunc, Track } from '../common';

export interface UserGetLovedTracksParams extends Params {
  user: string;
  limit?: number;
  page?: number;
}

export interface LovedTrack extends Track {
  mbid: string;
  date: {
    uts: string;
    '£text': string;
  };
  image: Image[];
  streamable: {
    fulltrack: BoolStr;
    '#text': BoolStr;
  };
}

interface UserGetLovedTracksResponseBody {
  lovedtracks: {
    '@attr': {
      page: string;
      perPage: string;
      user: string;
      total: string;
      totalPages: string;
    };
    track: LovedTrack[];
  };
}

export const getLovedTracks: MethodFunc<UserGetLovedTracksParams, LovedTrack[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('user.getLovedTracks', params);
  const { lovedtracks: { track } } = await response.json() as UserGetLovedTracksResponseBody;
  return track;
};
