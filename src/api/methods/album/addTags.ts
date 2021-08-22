import { MethodHandler } from '../common';
import { AlbumParams } from './album.service';

export type AlbumAddTagsParams = AlbumParams & {
  tags: string | string[];
};

export const addTags: MethodHandler<AlbumAddTagsParams, string> = async (proxy, params) => {
  throw new Error('Not yet implemented');

  const response = await proxy.sendPostRequest('album.addTags', params);
  return await response.text();
};
