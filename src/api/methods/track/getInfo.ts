import { Params } from '../../proxy';
import { BoolStr, MethodFunc, TrackInfo } from '../common';

export type TrackInfoParams = Params & (
  { mbid: string; } | {
    artist: string;
    track: string;
  }
) & {
  autocorrect?: BoolStr;
  username?: string;
};

export const getInfo: MethodFunc<TrackInfoParams, TrackInfo> = async (proxy, params) => {
  const response = await proxy.sendRequest('track.getInfo', params);
  return await response.json();
};
