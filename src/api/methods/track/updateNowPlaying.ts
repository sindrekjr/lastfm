import { MethodFunc } from '../common';

export const updateNowPlaying: MethodFunc<never, boolean> = async (proxy, params) => {
  const { status } = await proxy.sendPostRequest('track.updateNowPlaying', params);
  return status === 200;
};
