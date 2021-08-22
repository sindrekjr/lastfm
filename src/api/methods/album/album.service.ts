import { ApiProxy, Params } from '../../proxy';
import { Album, AlbumShort, Tag } from '../common';
import { BaseService } from '../service.base';

import { AlbumInfoParams, getInfo } from './getInfo';
import { AlbumTagsParams, getTags } from './getTags';
import { AlbumTopTagsParams, getTopTags } from './getTopTags';
import { AlbumSearchParams, search } from './search';

export type AlbumMethod =
  'album.addTags' |
  'album.getInfo' |
  'album.getTags' |
  'album.getTopTags' |
  'album.removeTag' |
  'album.search';

export type AlbumParams = Params & (
  {
    artist: string;
    album: string;
  } | {
    mbid: string;
  }
);

export class AlbumService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

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
