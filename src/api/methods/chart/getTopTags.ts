import { Params } from '../../proxy';
import { BoolStr, MethodFunc } from '../common';

export interface ChartTopTagsParams extends Params {
  page?: number;
  limit?: number;
}

export interface TopTag {
  name: string;
  url: string;
  reach: string;
  taggings: string;
  streamable: BoolStr;
  wiki: Record<string, unknown>;
}

interface ChartTopTagsResponseBody {
  tags: {
    tag: TopTag[];
    '@attr': {
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const getTopTags: MethodFunc<ChartTopTagsParams, TopTag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('chart.getTopTags', params);
  const { tags: { tag } } = await response.json() as ChartTopTagsResponseBody;
  return tag;
};
