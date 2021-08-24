import { Params } from '../../proxy';
import { BoolStr, MethodFunc, Tag } from '../common';

export type TrackTagsParams = Params & (
  { mbid: string; } | {
    artist: string;
    track: string;
  }
) & {
  user: string;
  autocorrect?: BoolStr;
};

interface TrackTagsResponseBody {
  tags: {
    tag: [];
    '@attr': {
      artist: string;
      track: string;
    };
  };
}

export const getTags: MethodFunc<TrackTagsParams, Tag[]> = async (proxy, params) => {
  const response = proxy.sendRequest('track.getTags', params);
  const { tags: { tag } } = await (await response).json() as TrackTagsResponseBody;
  return tag;
};
