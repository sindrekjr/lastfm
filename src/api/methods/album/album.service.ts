import { ApiProxy, Params } from '../../proxy';
import { Album, AlbumShort, Tag } from '../common';
import { addTags, AlbumAddTagsParams } from './addTags';

import { AlbumInfoParams, getInfo } from './getInfo';
import { AlbumTagsParams, getTags } from './getTags';
import { AlbumTopTagsParams, getTopTags } from './getTopTags';
import { AlbumSearchParams, search } from './search';

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

  public addTags = async (params: AlbumAddTagsParams): Promise<string> => (
    addTags(this.proxy, params)
  );

  public getInfo = async (params: AlbumInfoParams): Promise<Album> => (
    getInfo(this.proxy, params)
  );

  public getTags = async (params: AlbumTagsParams): Promise<Tag[]> => (
    getTags(this.proxy, params)
  );

  public getTopTags = async (params: AlbumTopTagsParams): Promise<Tag[]> => (
    getTopTags(this.proxy, params)
  );

  public search = async (params: AlbumSearchParams): Promise<AlbumShort[]> => (
    search(this.proxy, params)
  );
}
