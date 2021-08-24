import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface TopTag {
  name: string;
  count: number;
  reach: number;
}

interface TagTopTagsResponseBody {
  toptags: {
    tag: TopTag[];
    '@attr': {
      offset: number;
      num_res: number;
      total: number;
    };
  };
}

export const getTopTags: MethodFunc<Params, TopTag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('tag.getTopTags', params);
  const { toptags: { tag } } = await response.json() as TagTopTagsResponseBody;
  return tag;
};
