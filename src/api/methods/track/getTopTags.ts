import { Params } from '../../proxy';
import { BoolStr, MethodFunc, Tag } from '../common';

export type TrackTopTagsParams = Params & (
  { mbid: string; } | {
    artist: string;
    track: string;
  }
) & {
  autocorrect?: BoolStr;
};

interface TrackTopTagsResponseBody {
  toptags: {
    tag:  Tag[];
    '@attr': {
      artist: string;
      track: string;
    };
  };
}

export const getTopTags: MethodFunc<TrackTopTagsParams, Tag[]> = async (proxy, params) => {
  const response = await proxy.sendRequest('track.getTopTags', params);
  const { toptags: { tag } } = await response.json() as TrackTopTagsResponseBody;
  return tag;
};
