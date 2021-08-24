import { Params } from '../../proxy';
import { Album, MethodFunc } from '../common';

export interface TagTopAlbumsParams extends Params {
  tag: string;
  limit?: number;
  page?: number;
}

interface TagTopAlbumsResponseBody {
  albums: {
    album: Album[];
    '@attr': {
      tag: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const getTopAlbums: MethodFunc<TagTopAlbumsParams, Album[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('tag.getTopAlbums', params);
  const { albums: { album } } = await response.json() as TagTopAlbumsResponseBody;
  return album;
};
