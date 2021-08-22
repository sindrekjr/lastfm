import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface AlbumRemoveTagParams extends Params {
  tag: string;
}

export const removeTag: MethodFunc<AlbumRemoveTagParams, boolean> = async (proxy, params) => {
  // Currently always returns 200 OK unless request is invalid.
  const { status } = await proxy.sendPostRequest('album.removeTag', params);
  return status === 200;
};

