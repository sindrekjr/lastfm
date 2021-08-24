import { Params } from '../../proxy';
import { MethodFunc, Track } from '../common';

export interface TrackCorrectionParams extends Params {
  artist: string;
  track: string;
}

export const getCorrection: MethodFunc<TrackCorrectionParams, Track> = async (proxy, params) => {
  const response = await proxy.sendRequest('track.getCorrection', params);
  return await response.json();
};
