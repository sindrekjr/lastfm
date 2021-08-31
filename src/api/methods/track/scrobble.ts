import { Params } from '../../proxy';
import { Album, Artist, BoolStr, MethodFunc, Track } from '../common';

export interface TrackScrobbleParams extends Params {
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

export interface Scrobble {
  artist: Artist;
  ignoredMessage: any;
  albumArtist: Artist;
  timestamp: string;
  album: Album;
  track: Track;
}

interface TrackScrobbleResponseBody {
  scrobbles: {
    '@attr': {
      accepted: number;
      ignored: number;
    };
    scrobble: Scrobble;
  };
}

const mapParams = (params: TrackScrobbleParams): TrackScrobbleParams => ({
  ...params,
  timestamp: typeof params.timestamp === 'number'
    ? params.timestamp
    : Math.floor(params.timestamp.getTime() / 1000),
});

export const scrobble: MethodFunc<TrackScrobbleParams, boolean> = async (proxy, params) => {
  const response = await proxy.sendPostRequest('track.scrobble', mapParams(params));
  return await response.json();
};
