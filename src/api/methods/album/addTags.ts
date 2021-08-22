import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface AlbumAddTagsParams extends Params {
  artist: string;
  album: string;
  tags: string | string[];
}

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
