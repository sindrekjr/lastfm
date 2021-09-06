import { Params } from '../../proxy';
import { BoolStr, MethodFunc } from '../common';

export interface UpdateNowPlayingParams extends Params {
  artist: string;
  track: string;
  album?: string;
  trackNumber?: number;
  context?: string;
  mbid?: string;
  duration?: number;
  albumArtist?: string;
}

export interface NowPlaying {
  artist: {
    correct: BoolStr;
    '#text': string;
  };
  ignoredMessage?: {
    code: string;
    '#text': string;
  };
  album: {
    correct: BoolStr;
    '#text': string;
  };
  albumArtist: {
    correct: BoolStr;
    '#text': string;
  };
  track: {
    correct: BoolStr;
    '#text': string;
  };
}

interface UpdateNowPlayingResponseBody {
  nowplaying: NowPlaying;
}

export const updateNowPlaying: MethodFunc<UpdateNowPlayingParams, NowPlaying> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendPostRequest('track.updateNowPlaying', params);
  const { nowplaying } = await response.json() as UpdateNowPlayingResponseBody;
  return nowplaying;
};
