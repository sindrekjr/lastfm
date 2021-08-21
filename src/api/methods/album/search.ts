import { Params } from '../../proxy';
import { Album, MethodHandler } from '../common';

export type AlbumSearchParams = Params & {
  album: string;
  limit?: number;
  page?: number;
}

export interface AlbumSearchResponseBody {
  results: {
    albummatches: Album[];
  }
}

export const search: MethodHandler<AlbumSearchParams, Album[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.search', params);
  const { results: { albummatches } } = await response.json() as AlbumSearchResponseBody;
  return albummatches;
};
