import { ApiProxy } from '../../proxy';
import { Image, Tag, Track } from '../common';
import { AlbumParams } from './album.service';

export type AlbumInfoParams = AlbumParams & {
  autocorrect?: number;
  username?: string;
  lang?: string;
};

export interface AlbumInfoResponse {
  name: string;
  artist: string;
  id: number;
  mbid: string;
  url: string;
  releaseDate: string;
  image: Image[];
  listeners: number;
  playcount: number;
  topTags: Tag[];
  tracks: {
    track: Track[];
  };
  tags: {
    tag: Tag[];
  };
  wiki: {
    published: string;
    content: string;
    summary: string;
  };
}

export const getInfo = async (
  proxy: ApiProxy,
  params: AlbumInfoParams,
): Promise<AlbumInfoResponse> => {
  const response = await proxy.sendRequest('album.getInfo', params);
  const { album } = await response.json();
  return album;
};
