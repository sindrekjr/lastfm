import { Params } from '../../proxy';
import { BoolStr, MethodFunc, Tag } from '../common';

export type ArtistTopTagsParams = Params & (
  { artist: string } | { mbid: string }
) & {
  autocorrect?: BoolStr;
};

export interface ArtistTopTagsResponseBody {
  toptags: {
    tag: Tag[];
    '@attr': {
      artist: string;
    };
  };
}

export const getTopTags: MethodFunc<ArtistTopTagsParams, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('artist.getTopTags', params);
  const { toptags: { tag } } = await response.json() as ArtistTopTagsResponseBody;
  return tag || [];
};
