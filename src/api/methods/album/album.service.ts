import { ApiProxy, Params } from '../../proxy';
import { Tag } from '../common';

import { AlbumInfoParams, AlbumInfoResponse, getInfo } from './getInfo';
import { AlbumTagsParams, getTags } from './getTags';
import { AlbumTopTagsParams, getTopTags } from './getTopTags';

export type AlbumParams = Params & (
  {
    artist: string;
    album: string;
  } | {
    mbid: string;
  }
);

export class AlbumService {
  private proxy: ApiProxy;

  constructor(proxy: ApiProxy) {
    this.proxy = proxy;
  }

  public getInfo = async (params: AlbumInfoParams): Promise<AlbumInfoResponse> => (
    getInfo(this.proxy, params)
  );

  public getTags = async (params: AlbumTagsParams): Promise<Tag[]> => (
    getTags(this.proxy, params)
  );

  public getTopTags = async (params: AlbumTopTagsParams): Promise<Tag[]> => (
    getTopTags(this.proxy, params)
  );
}
