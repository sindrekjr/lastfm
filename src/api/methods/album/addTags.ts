import { MethodFunc } from '../common';
import { AlbumParams } from './album.service';

export type AlbumAddTagsParams = AlbumParams & {
  tags: string | string[];
};

const mapParams = (params: AlbumAddTagsParams) => ({
  ...params,
  tags: typeof params.tags === 'string'
    ? params.tags
    : params.tags.join(','),
});

export const addTags: MethodFunc<AlbumAddTagsParams, boolean> = async (proxy, params) => {
  // Currently always returns 200 OK unless request is invalid.
  const { status } = await proxy.sendPostRequest('album.addTags', mapParams(params));
  return status === 200;
};
