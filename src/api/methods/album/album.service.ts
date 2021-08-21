import { ApiClient } from '../../client';

import { AlbumInfoParams, getInfo } from './getInfo';
import { AlbumTagsParams, getTags } from './getTags';
import { AlbumTopTagsParams, getTopTags } from './getTopTags';

export type AlbumParams = ({
  artist: string;
  album: string;
} | {
  mbid: string;
});

export class AlbumService {
  private client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  public getInfo = async (params: AlbumInfoParams) => getInfo(this.client.key, params);

  public getTags = async (params: AlbumTagsParams) => getTags(this.client.key, params);

  public getTopTags = async (params: AlbumTopTagsParams) => getTopTags(this.client.key, params);
}
