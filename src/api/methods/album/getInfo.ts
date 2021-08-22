import { Params } from '../../proxy';
import { Album, MethodFunc, Tag, Track } from '../common';

export type AlbumInfoParams = Params & (
  {
    artist: string;
    album: string;
  } | {
    mbid: string;
  }
) & {
  autocorrect?: number;
  username?: string;
  lang?: string;
}

export interface AlbumInfo extends Album {
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
  album: AlbumInfo;
}

export const getInfo: MethodFunc<AlbumInfoParams, AlbumInfo> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.getInfo', params);
  const { album } = await response.json() as AlbumInfoResponseBody;
  return album;
};
