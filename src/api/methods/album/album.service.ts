import { ApiProxy } from '../../proxy';
import { Album, Tag } from '../common';
import { BaseService } from '../service.base';

import { addTags, AlbumAddTagsParams } from './addTags';
import { AlbumInfo, AlbumInfoParams, getInfo } from './getInfo';
import { AlbumTagsParams, getTags } from './getTags';
import { AlbumTopTagsParams, getTopTags } from './getTopTags';
import { AlbumRemoveTagParams, removeTag } from './removeTag';
import { AlbumSearchParams, search } from './search';

export type AlbumMethod =
  'album.addTags' |
  'album.getInfo' |
  'album.getTags' |
  'album.getTopTags' |
  'album.removeTag' |
  'album.search';

export class AlbumService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public addTags = async (params: AlbumAddTagsParams): Promise<boolean> => (
    addTags(this.proxy, params)
  );

  public getInfo = async (params: AlbumInfoParams): Promise<AlbumInfo> => (
    getInfo(this.proxy, params)
  );

  public getTags = async (params: AlbumTagsParams): Promise<Tag[]> => (
    getTags(this.proxy, params)
  );

  public getTopTags = async (params: AlbumTopTagsParams): Promise<Tag[]> => (
    getTopTags(this.proxy, params)
  );

  public removeTag = async (params: AlbumRemoveTagParams): Promise<boolean> => (
    removeTag(this.proxy, params)
  );

  public search = async (params: AlbumSearchParams): Promise<Album[]> => (
    search(this.proxy, params)
  );
}
