import { Params } from '../../proxy';
import { Artist, MethodFunc } from '../common';

export type ArtistCorrectionParams = Params;

export interface Correction {
  artist: Artist;
}

interface ArtistCorrectionResponseBody {
  corrections: {
    correction: Correction[];
  };
}

export const getCorrection: MethodFunc<ArtistCorrectionParams, Correction[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('artist.getCorrection', params);
  const { corrections: { correction }} = await response.json() as ArtistCorrectionResponseBody;
  return correction;
};
