import { Params } from '../../proxy';
import { BoolStr, Image, MethodFunc, Track } from '../common';

export type TrackSimilarParams = Params & (
  { mbid: string; } | {
    artist: string;
    track: string;
  }
) & {
  autocorrect?: BoolStr;
  limit?: number;
};

export interface SimilarTrack extends Track {
  playcount: number;
  match: number;
  image: Image[];
  streamable: {
    fulltrack: BoolStr;
    '#text': BoolStr;
  };
}

interface TrackSimilarResponsebody {
  similartracks: {
    track: SimilarTrack[];
    '@attr': {
      artist: string;
    };
  };
}

export const getSimilar: MethodFunc<TrackSimilarParams, SimilarTrack[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('track.getSimilar', params);
  const { similartracks: { track } } = await response.json() as TrackSimilarResponsebody;
  return track;
};
