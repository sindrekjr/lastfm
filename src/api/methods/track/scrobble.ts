import { Params, ParamValue } from '../../proxy';
import { BoolStr, MethodFunc } from '../common';

export interface TrackScrobbleParams extends Params<ParamValue> {
  artist: string;
  track: string;
  timestamp: Date | number;
  album?: string;
  context?: string;
  streamId?: string;
  chosenByUser?: BoolStr;
  trackNumber?: number;
  mbid?: string;
  albumArtist?: string;
  duration?: number;
}

export interface TrackScrobbleManyParams extends Params<ParamValue[]> {
  artist: string[];
  track: string[];
  timestamp: number[];
  album: string[];
  context: string[];
  streamId: string[];
  chosenByUser: BoolStr[];
  trackNumber: number[];
  mbid: string[];
  albumArtist: string[];
  duration: number[];
}

export interface Scrobble {
  artist: {
    correct: BoolStr;
    '#text': string;
  };
  ignoredMessage?: {
    code: string;
    '#text'?: string;
  };
  albumArtist: {
    correct: BoolStr;
    '#text'?: string;
  };
  timestamp: string;
  album: {
    correct: BoolStr;
    '#text'?: string;
  };
  track: {
    correct: BoolStr;
    '#text': string;
  };
}

interface TrackScrobbleResponseBody {
  scrobbles: {
    '@attr': {
      accepted: number;
      ignored: number;
    };
    scrobble: Scrobble[];
  };
}

const mapTimestamp = (timestamp: Date | number) => {
  const asNumber = typeof timestamp === 'number'
    ? timestamp
    : timestamp.getTime();

  return asNumber.toString().length === Date.now().toString().length - 3
    ? asNumber
    : Math.floor(asNumber / 1000);
};

const mapParams = (
  allParams: TrackScrobbleParams[],
): TrackScrobbleParams | Params => {
  const mappedParams = allParams.map<TrackScrobbleParams>(params => ({
    ...params,
    timestamp: mapTimestamp(params.timestamp),
  }));

  if (mappedParams.length === 1) return mappedParams[0];

  return mappedParams.reduce((acc, params, i) => {
    Object.keys(params).forEach(key => acc[`${key}[${i}]`] = params[key]);
    return acc;
  }, {} as Params);
};

export const scrobble: MethodFunc<TrackScrobbleParams, [number, Scrobble[]]> = async (
  proxy,
  ...params
) => {
  const response = await proxy.sendPostRequest('track.scrobble', mapParams(params));
  const {
    scrobbles: {
      '@attr': { accepted },
      scrobble,
    },
  } = await response.json() as TrackScrobbleResponseBody;
  return [accepted, scrobble];
};
