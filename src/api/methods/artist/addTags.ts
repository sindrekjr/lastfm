import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface ArtistAddTagsParams extends Params {
  tags: string | string[];
}

const mapParams = (params: ArtistAddTagsParams) => ({
  ...params,
  tags: typeof params.tags === 'string'
    ? params.tags
    : params.tags.join(','),
});

export const addTags: MethodFunc<ArtistAddTagsParams, boolean> = async (
  proxy,
  params,
): Promise<boolean> => {
  // Currently always returns 200 OK unless request is invalid.
  const { status } = await proxy.sendPostRequest('artist.addTags', mapParams(params));
  return status === 200;
};
