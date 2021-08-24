import { MethodFunc, Track } from '../common';

export const search: MethodFunc<never, Track> = async (proxy, params) => {
  const response = await proxy.sendRequest('track.search', params);
  return await response.json();
};
