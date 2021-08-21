import { AlbumParams } from '.';
import { MethodHandler, Tag } from '../common';

export type AlbumTagsParams = AlbumParams & {
  autocorrect?: string;
  user: string;
};

export interface AlbumTagsResponseBody {
  tags: {
    tag: Tag[];
    '#text': string;
    '@attr': {
      album: string;
      artist: string;
    };
  };
}

export const getTags: MethodHandler<AlbumTagsParams, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.getTags', params);
  const { tags: { tag } } = await response.json() as AlbumTagsResponseBody;
  return tag;
};
