import { MethodFunc, Tag } from '../common';

export const getTopTags: MethodFunc<never, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('track.getTopTags', params);
  return await response.json();
};
