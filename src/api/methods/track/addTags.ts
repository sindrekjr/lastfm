import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface TrackAddTagsParams extends Params {
  artist: string;
  track: string;
  tags: string | string[];
}

const mapParams = (params: TrackAddTagsParams) => ({
  ...params,
  tags: typeof params.tags === 'string'
    ? params.tags
    : params.tags.join(','),
});

export const addTags: MethodFunc<TrackAddTagsParams, boolean> = async (proxy, params) => {
  // Currently always returns 200 OK unless request is invalid.
  const { status } = await proxy.sendPostRequest('track.addTags', mapParams(params));
  return status === 200;
};
