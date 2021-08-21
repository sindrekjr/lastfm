import { ApiClient } from '../../client';
import { Tag } from '../common';

import { AlbumInfoParams, AlbumInfoResponse, getInfo } from './getInfo';
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

  public getInfo = async (params: AlbumInfoParams): Promise<AlbumInfoResponse> => (
    getInfo(this.client.key, params)
  );

  public getTags = async (params: AlbumTagsParams): Promise<Tag[]> => (
    getTags(this.client.key, params)
  );

  public getTopTags = async (params: AlbumTopTagsParams): Promise<Tag[]> => (
    getTopTags(this.client.key, params)
  );
}
