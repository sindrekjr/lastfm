import { Params } from '../../proxy';
import { Image, MethodFunc } from '../common';

export interface TrackSearchParams extends Params {
  artist: string;
  track: string;
  limit?: number;
  page?: number;
}

export interface TrackSearchResult {
  name: string;
  artist: string;
  url: string;
  streamable: 'FIXME';
  listeners: string;
  image: Image[];
  mbid: string;
}

interface TrackSearchResponseBody {
  results: {
    'opensearch:Query': {
      '#text': string;
      role: string;
      startPage: string;
    };
    'opensearch:totalResults': string;
    'opensearch:startIndex': string;
    'opensearch:itemsPerPage': string;
    trackmatches: {
      track: [];
    };
    '@attr': Record<string, string>;
  };
}

export const search: MethodFunc<TrackSearchParams, TrackSearchResult[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('track.search', params);
  const { results: { trackmatches: { track } } } = await response.json() as TrackSearchResponseBody;
  return track;
};
