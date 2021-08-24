import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface TrackRemoveTagParams extends Params {
  artist: string;
  track: string;
  tag: string;
}

export const removeTag: MethodFunc<TrackRemoveTagParams, boolean> = async (proxy, params) => {
  // Currently always returns 200 OK unless request is invalid.
  const { status } = await proxy.sendPostRequest('track.removeTag', params);
  return status === 200;
};
