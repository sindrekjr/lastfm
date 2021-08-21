import { AlbumParams } from ".";
import { Tag } from "../common";
import { ApiProxy } from "../../proxy";

export type AlbumTagsParams = AlbumParams & {
  autocorrect?: string;
  user: string;
};

export const getTags = async (api_key: string, params: AlbumTagsParams): Promise<Tag[]> => {
  const response = await ApiProxy.sendRequest('album.getTags', {
    api_key,
    ...params,
  });
  const { tags } = await response.json();
  return tags;
};
