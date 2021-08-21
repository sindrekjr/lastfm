import { Params } from '../../proxy';
import { AlbumShort, MethodHandler } from '../common';

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
      album: AlbumShort[];
    };
    '@attr': {
      for: string;
    };
  }
}

export const search: MethodHandler<AlbumSearchParams, AlbumShort[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('album.search', params);
  const { results: { albummatches: { album } } } = await response.json() as AlbumSearchResponseBody;
  return album;
};
