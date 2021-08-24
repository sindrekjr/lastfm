import { Params } from '../../proxy';
import { BoolStr, MethodFunc, Track } from '../common';

export type TrackSimilarParams = Params & (
  { mbid: string; } | {
    artist: string;
    track: string;
  }
) & {
  autocorrect?: BoolStr;
  limit?: number;
};

export const getSimilar: MethodFunc<TrackSimilarParams, Track[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('track.getSimilar', params);
  return await response.json();
};
