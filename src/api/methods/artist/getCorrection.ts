import { Params } from '../../proxy';
import { Artist, MethodFunc } from '../common';

export type ArtistCorrectionParams = Params;

interface ArtistCorrectionResponseBody {
  corrections: {
    correction: {
      artist: Artist;
      '@attr': {
        index: string;
      };
    };
  };
}

export const getCorrection: MethodFunc<ArtistCorrectionParams, Artist> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('artist.getCorrection', params);
  const { corrections: {
    correction: { artist },
  }} = await response.json() as ArtistCorrectionResponseBody;
  return artist;
};
