import { Params } from '../../proxy';
import { Album, Artist, BoolStr, MethodFunc } from '../common';

export type ArtistTopAlbumsParams = Params & (
  { artist: string } | { mbid: string }
) & {
  autcorrect?: BoolStr;
  page?: number;
  limit?: number;
};

export interface TopAlbum extends Album {
  artist: Artist;
  playcount: number;
}

interface ArtistTopAlbumsResponseBody {
  topalbums: {
    album: TopAlbum[];
    '#text': string;
    '@attr': {
      artist: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  }
}

export const getTopAlbums: MethodFunc<ArtistTopAlbumsParams, TopAlbum[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('artist.getTopAlbums', params);
  const { topalbums: { album } } = await response.json() as ArtistTopAlbumsResponseBody;
  return album;
};

