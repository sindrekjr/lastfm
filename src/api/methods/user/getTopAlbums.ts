import { Params } from '../../proxy';
import { Album, Artist, MethodFunc, TimePeriod } from '../common';

export interface UserGetTopAlbumsParams extends Params {
  user: string;
  period?: TimePeriod;
  limit?: number;
  page?: number;
}

export interface TopAlbum extends Album {
  artist: Artist;
  playcount: string;
  '@attr': {
    rank: string;
  };
}

interface UserGetTopAlbumsResponseBody {
  topalbums: {
    album: [];
    '@attr': {
      page: string;
      perPage: string;
      user: string;
      total: string;
      totalPages: string;
    };
  };
}

export const getTopAlbums: MethodFunc<UserGetTopAlbumsParams, TopAlbum[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('user.getTopAlbums', params);
  const { topalbums: { album } } = await response.json() as UserGetTopAlbumsResponseBody;
  return album;
};
