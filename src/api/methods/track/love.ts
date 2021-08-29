import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface TrackLoveParams extends Params {
  track: string;
  artist: string;
}

export const love: MethodFunc<TrackLoveParams, boolean> = async (proxy, params) => {
  const { status } = await proxy.sendPostRequest('track.love', params);
  return status === 200;
};
