import { MethodFunc } from '../common';

export const love: MethodFunc<never, boolean> = async (proxy, params) => {
  const { status } = await proxy.sendPostRequest('track.love', params);
  return status === 200;
};
