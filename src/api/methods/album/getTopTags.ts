import { AlbumParams } from ".";
import { ApiProxy } from "../../proxy";
import { Tag } from "../common";

export type AlbumTopTagsParams = AlbumParams & {
  autocorrect?: string;
};

export const getTopTags = async (api_key: string, params: AlbumTopTagsParams): Promise<Tag[]> => {
  const response = await ApiProxy.sendRequest('album.getTopTags', {
    api_key,
    ...params,
  });
  const { topTags } = await response.json();
  return topTags;
};
