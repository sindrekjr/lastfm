import { MethodFunc } from '../common';

export const unlove: MethodFunc<never, boolean> = async (proxy, params) => {
  const { status } = await proxy.sendPostRequest('track.unlove', params);
  return status === 200;
};
