import { Params } from '../../proxy';
import { ArtistShort, BoolStr, MethodFunc } from '../common';

export type ArtistSimilarParams = Params & (
  { artist: string } | { mbid: string }
) & {
  autocorrect?: BoolStr
  limit?: number;
};

export interface SimilarArtist extends ArtistShort {
  match: string;
}

interface ArtistSimilarResponseBody {
  similarartists: {
    artist: SimilarArtist[];
    '@attr': {
      artist: string;
    };
  };
}

export const getSimilar: MethodFunc<ArtistSimilarParams, SimilarArtist[]> = async (
  proxy,
  params,
): Promise<SimilarArtist[]> => {
  const response = await proxy.sendRequest('artist.getSimilar', params);
  const { similarartists: { artist } } = await response.json() as ArtistSimilarResponseBody;
  return artist;
};
