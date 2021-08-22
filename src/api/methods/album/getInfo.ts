import { AlbumShort, MethodFunc, Tag, Track } from '../common';
import { AlbumParams } from './album.service';

export type AlbumInfoParams = AlbumParams & {
  autocorrect?: number;
  username?: string;
  lang?: string;
};

export interface Album extends AlbumShort {
  id: number;
  listeners: number;
  playcount: number;
  releasedate?: string;
  toptags?: Tag[];
  tracks?: {
    track: Track[];
  };
  tags?: {
    tag: Tag[];
  };
  wiki?: {
    published: string;
    content: string;
    summary: string;
  };
}

export interface AlbumInfoResponseBody {
  album: Album;
}

export const getInfo: MethodFunc<AlbumInfoParams, Album> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.getInfo', params);
  const { album } = await response.json() as AlbumInfoResponseBody;
  return album;
};
