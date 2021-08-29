import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface TrackUnloveParams extends Params {
  track: string;
  artist: string;
}

export const unlove: MethodFunc<TrackUnloveParams, boolean> = async (proxy, params) => {
  const { status } = await proxy.sendPostRequest('track.unlove', params);
  return status === 200;
};
