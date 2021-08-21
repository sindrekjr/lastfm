import { AlbumParams } from '.';
import { ApiProxy } from '../../proxy';
import { Tag } from '../common';

export type AlbumTopTagsParams = AlbumParams & {
  autocorrect?: string;
};

export const getTopTags = async (proxy: ApiProxy, params: AlbumTopTagsParams): Promise<Tag[]> => {
  const response = await proxy.sendRequest('album.getTopTags', params);
  const { toptags: { tag } } = await response.json();
  return tag;
};
