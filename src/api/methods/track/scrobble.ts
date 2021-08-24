import { MethodFunc } from '../common';

export const scrobble: MethodFunc<never, boolean> = async (proxy, params) => {
  const { status } = await proxy.sendPostRequest('track.scrobble', params);
  return status === 200;
};
