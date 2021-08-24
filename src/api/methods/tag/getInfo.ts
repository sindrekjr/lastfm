import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface TagInfoParams extends Params {
  tag: string;
  lang?: string;
}

export interface TagInfo {
  name: string;
  total: number;
  reach: number;
  wiki: {
    summary: string;
    content: string;
  };
}

interface TagInfoResponseBody {
  tag: TagInfo;
}

export const getInfo: MethodFunc<TagInfoParams, TagInfo> = async (proxy, params) => {
  const response = await proxy.sendRequest('tag.getInfo', params);
  const { tag } = await response.json() as TagInfoResponseBody;
  return tag;
};
