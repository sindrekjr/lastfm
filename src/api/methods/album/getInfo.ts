import { Album, MethodFunc } from '../common';
import { AlbumParams } from './album.service';

export type AlbumInfoParams = AlbumParams & {
  autocorrect?: number;
  username?: string;
  lang?: string;
};

export interface AlbumInfoResponseBody {
  album: Album;
}

export const getInfo: MethodFunc<AlbumInfoParams, Album> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.getInfo', params);
  const { album } = await response.json() as AlbumInfoResponseBody;
  return album;
};
