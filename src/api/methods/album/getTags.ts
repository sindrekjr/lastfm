import { Params } from '../../proxy';
import { BoolStr, MethodFunc, Tag } from '../common';

export type AlbumTagsParams = Params & (
  {
    artist: string;
    album: string;
  } | {
    mbid: string;
  }
) & {
  autocorrect?: BoolStr;
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

export const getTags: MethodFunc<AlbumTagsParams, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.getTags', params);
  const { tags: { tag } } = await response.json() as AlbumTagsResponseBody;
  return tag || [];
};
