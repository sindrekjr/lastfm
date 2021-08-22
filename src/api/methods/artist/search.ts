import { Params } from '../../proxy';
import { Artist, BoolStr, MethodFunc } from '../common';

export interface ArtistSearchParams extends Params {
  artist: string;
  limit?: number;
  page?: number;
}

export interface ArtistSearchResult extends Artist {
  listeners: string;
  streamable: BoolStr;
}

interface ArtistSearchResponseBody {
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
    artistmatches: {
      artist: ArtistSearchResult[];
    };
    '@attr': {
      for: string;
    };
  }
}

export const search: MethodFunc<ArtistSearchParams, ArtistSearchResult[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('artist.search', params);
  const { results: {
    artistmatches: { artist },
  }} = await response.json() as ArtistSearchResponseBody;
  return artist;
};
