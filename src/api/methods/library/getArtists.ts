import { Params } from '../../proxy';
import { Artist, BoolStr, MethodFunc } from '../common';

export interface LibraryArtistsParams extends Params {
  user: string;
  limit?: number;
  page?: number;
}

export interface LibraryArtist extends Artist {
  playcount: string;
  tagcount: string;
  streamable: BoolStr;
}

interface LibraryArtistsResponseBody {
  artists: {
    artist: LibraryArtist[];
    '@attr': {
      page: string;
      perPage: string;
      user: string;
      total: string;
      totalPages: string;
    };
  };
}

export const getArtists: MethodFunc<LibraryArtistsParams, LibraryArtist[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('library.getArtists', params);
  const { artists: { artist } } = await response.json() as LibraryArtistsResponseBody;
  return artist;
};
