import { Params } from '../../proxy';
import { BoolStr, MethodFunc, Tag } from '../common';

export type AlbumTopTagsParams = Params & (
  {
    artist: string;
    album: string;
  } | {
    mbid: string;
  }
) & {
  autocorrect?: BoolStr;
};

export interface AlbumTopTagsResponseBody {
  toptags: {
    tag: Tag[];
    '@attr': {
      album: string;
      artist: string;
    };
  };
}

export const getTopTags: MethodFunc<AlbumTopTagsParams, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.getTopTags', params);
  const { toptags: { tag } } = await response.json() as AlbumTopTagsResponseBody;
  return tag || [];
};
