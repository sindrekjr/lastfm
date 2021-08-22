import { MethodFunc } from '../common';
import { AlbumParams } from './album.service';

export type AlbumRemoveTagParams = AlbumParams & {
  tag: string;
};

export const removeTag: MethodFunc<AlbumRemoveTagParams, boolean> = async (proxy, params) => {
  // Currently always returns 200 OK unless request is invalid.
  const { status } = await proxy.sendPostRequest('album.removeTag', params);
  return status === 200;
};

