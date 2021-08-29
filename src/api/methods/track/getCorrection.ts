import { Params } from '../../proxy';
import { Artist, MethodFunc } from '../common';

export interface TrackCorrectionParams extends Params {
  artist: string;
  track: string;
}

export interface TrackCorrection {
  name: string;
  url: string;
  artist: Artist;
}

interface TrackCorrectionResponseBody {
  corrections: {
    correction: {
      track: TrackCorrection;
      '@attr': {
        index: string;
        artistcorrected: string;
        trackcorrected: string;
      };
    };
  };
}

export const getCorrection: MethodFunc<TrackCorrectionParams, TrackCorrection> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('track.getCorrection', params);
  const {
    corrections: { correction: { track } },
  } = await response.json() as TrackCorrectionResponseBody;

  return track;
};
