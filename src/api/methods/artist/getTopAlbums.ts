import { Params } from '../../proxy';
import { AlbumShort, BoolStr, MethodFunc } from '../common';

export type ArtistTopAlbumsParams = Params & (
  { artist: string } | { mbid: string }
) & {
  autcorrect?: BoolStr;
  page?: number;
  limit?: number;
};

interface ArtistTopAlbumsResponseBody {
  topalbums: {
    album: AlbumShort[];
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

export const getTopAlbums: MethodFunc<ArtistTopAlbumsParams, AlbumShort[]> = async (
  proxy,
  params,
): Promise<AlbumShort[]> => {
  const response = await proxy.sendRequest('artist.getTopAlbums', params);
  const { topalbums: { album } } = await response.json() as ArtistTopAlbumsResponseBody;
  return album;
};

