import { AlbumParams } from ".";
import { Tag } from "../common";
import { ApiProxy } from "../../proxy";

export type AlbumTagsParams = AlbumParams & {
  autocorrect?: string;
  user: string;
};

export const getTags = async (proxy: ApiProxy, params: AlbumTagsParams): Promise<Tag[]> => {
  const response = await proxy.sendRequest('album.getTags', params);
  const { tags } = await response.json();
  return tags;
};
