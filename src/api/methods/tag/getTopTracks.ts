import { Params } from '../../proxy';
import { BoolStr, Image, MethodFunc, Track } from '../common';

export interface TagTopTracksParams extends Params {
  tag: string;
  limit?: number;
  page?: number;
}

export interface RankedTrack extends Track {
  mbid: string;
  streamable: BoolStr;
  image: Image[];
  '@attr': {
    rank: string;
  };
}

interface TagTopTracksResponseBody {
  tracks: {
    track: [];
    '@attr': {
      tag: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const getTopTracks: MethodFunc<TagTopTracksParams, RankedTrack[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('tag.getTopTracks', params);
  const { tracks: { track } } = await response.json() as TagTopTracksResponseBody;
  return track;
};
