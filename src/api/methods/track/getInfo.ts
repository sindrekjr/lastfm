import { Params } from '../../proxy';
import { Album, BoolStr, MethodFunc, Tag, Track } from '../common';

export type TrackInfoParams = Params & (
  { mbid: string; } | {
    artist: string;
    track: string;
  }
) & {
  autocorrect?: BoolStr;
  username?: string;
};

export interface TrackInfo extends Track {
  mbid: string;
  listeners: string;
  playcount: string;
  album?: Album;
  toptags: {
    tag: Tag[];
  };
  wiki: {
    published: string;
    summary: string;
    content: string;
  }
}

interface TrackInfoResponseBody {
  track: TrackInfo;
}

export const getInfo: MethodFunc<TrackInfoParams, TrackInfo> = async (proxy, params) => {
  const response = await proxy.sendRequest('track.getInfo', params);
  const { track } = await response.json() as TrackInfoResponseBody;
  return track;
};
