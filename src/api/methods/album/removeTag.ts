import { MethodHandler } from '../common';
import { AlbumParams } from './album.service';

export type AlbumRemoveTagParams = AlbumParams & {
  tag: string;
};

export const removeTag: MethodHandler<AlbumRemoveTagParams, string> = async (proxy, params) => {
  throw new Error('Not yet implemented.');

  const response = await proxy.sendPostRequest('album.removeTag', params);
  return await response.text();
};

