import { Params } from '../../proxy';
import { Album, MethodHandler } from '../common';

export type AlbumSearchParams = Params & {
  album: string;
  limit?: number;
  page?: number;
}

export interface AlbumSearchResponseBody {
  results: {
    'opensearch:Query': {
      '#text': string;
      role: string;
      searchTerms: string;
      startPage: string;
    };
    'opensearch:totalResults': string;
    'opensearch:startIndex': string;
    'opensearch:itemsPerPage': string;
    albummatches: {
      album: Album[];
    };
    '@attr': {
      for: string;
    };
  }
}

export const search: MethodHandler<AlbumSearchParams, Album[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.search', params);
  const { results: { albummatches: { album } } } = await response.json() as AlbumSearchResponseBody;
  return album;
};
