import { AlbumParams } from '.';
import { ApiProxy } from '../../proxy';
import { Tag } from '../common';

export type AlbumTopTagsParams = AlbumParams & {
  autocorrect?: string;
};

export const getTopTags = async (proxy: ApiProxy, params: AlbumTopTagsParams): Promise<Tag[]> => {
  const response = await proxy.sendRequest('album.getTopTags', params);
  const { topTags } = await response.json();
  return topTags;
};
