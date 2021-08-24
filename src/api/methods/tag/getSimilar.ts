import { Params } from '../../proxy';
import { MethodFunc, Tag } from '../common';

export interface TagSimilarParams extends Params {
  tag: string;
}

interface TagSimilarResponseBody {
  similartags: {
    tag: Tag[];
    '@attr': {
      tag: string;
    };
  };
}

export const getSimilar: MethodFunc<TagSimilarParams, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('tag.getSimilar', params);
  const { similartags: { tag } } = await response.json() as TagSimilarResponseBody;
  return tag;
};
