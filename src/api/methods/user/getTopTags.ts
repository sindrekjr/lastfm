import { Params } from '../../proxy';
import { MethodFunc, Tag } from '../common';

export interface UserGetTopTagsParams extends Params {
  user: string;
  limit?: number;
}

interface UserGetTopTagsResponseBody {
  toptags: {
    tag: Tag[];
    '@attr': {
      user: string;
    };
  };
}

export const getTopTags: MethodFunc<UserGetTopTagsParams, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('user.getTopTags', params);
  const { toptags: { tag } } = await response.json() as UserGetTopTagsResponseBody;
  return tag;
};
