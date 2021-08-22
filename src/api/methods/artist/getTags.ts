import { Params } from '../../proxy';
import { BoolStr, MethodFunc, Tag } from '../common';

export type ArtistTagsParams = Params & (
  { artist: string } | { mbid: string }
) & {
  autocorrect?: BoolStr;
  user: string;
};

export interface ArtistTagsResponseBody {
  tags: {
    tag: Tag[];
    '#text': string;
    '@attr': {
      artist: string;
    };
  };
}

export const getTags: MethodFunc<ArtistTagsParams, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('artist.getTags', params);
  const { tags: { tag } } = await response.json() as ArtistTagsResponseBody;
  return tag || [];
};
