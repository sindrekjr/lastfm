import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface ArtistRemoveTagParams extends Params {
  tag: string;
}

export const removeTag: MethodFunc<ArtistRemoveTagParams, boolean> = async (proxy, params) => {
  // Currently always returns 200 OK unless request is invalid.
  const { status } = await proxy.sendPostRequest('artist.removeTag', params);
  return status === 200;
};

