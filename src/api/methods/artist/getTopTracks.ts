import { Params } from '../../proxy';
import { BoolStr, MethodFunc, Track } from '../common';

export type ArtistTopTracksParams = Params & (
  { artist: string } | { mbid: string }
) & {
  autcorrect?: BoolStr;
  limit?: number;
  page?: number;
};

interface ArtistTopTracksResponseBody {
  toptracks: {
    track: Track[];
    '@attr': {
      artist: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  }
}

export const getTopTracks: MethodFunc<ArtistTopTracksParams, Track[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('artist.getTopTracks', params);
  const { toptracks: { track } } = await response.json() as ArtistTopTracksResponseBody;
  return track;
};
