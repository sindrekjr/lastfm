import { AlbumParams } from '.';
import { MethodHandler, Tag } from '../common';

export type AlbumTopTagsParams = AlbumParams & {
  autocorrect?: string;
};

export interface AlbumTopTagsResponseBody {
  toptags: {
    tag: Tag[];
  };
}

export const getTopTags: MethodHandler<AlbumTopTagsParams, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.getTopTags', params);
  const { toptags: { tag } } = await response.json() as AlbumTopTagsResponseBody;
  return tag;
};
