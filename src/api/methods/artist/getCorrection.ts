import { Params } from '../../proxy';
import { ArtistShort, MethodFunc } from '../common';

export interface ArtistCorrectionParams extends Params {
  arist: string;
}

interface ArtistCorrectionResponseBody {
  corrections: {
    correction: {
      artist: ArtistShort;
      '@attr': {
        index: string;
      };
    };
  };
}

export const getCorrection: MethodFunc<ArtistCorrectionParams, ArtistShort> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('artist.getCorrection', params);
  const { corrections: {
    correction: { artist },
  }} = await response.json() as ArtistCorrectionResponseBody;
  return artist;
};
