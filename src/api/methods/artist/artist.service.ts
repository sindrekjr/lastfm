import { ApiProxy } from '../../proxy';
import { AlbumShort, ArtistShort, Tag } from '../common';
import { BaseService } from '../service.base';

import { addTags, ArtistAddTagsParams } from './addTags';
import { ArtistCorrectionParams, getCorrection } from './getCorrection';
import { Artist, ArtistInfoParams, getInfo } from './getInfo';
import { ArtistSimilarParams, getSimilar, SimilarArtist } from './getSimilar';
import { ArtistTagsParams, getTags } from './getTags';
import { ArtistTopAlbumsParams, getTopAlbums } from './getTopAlbums';
import { ArtistRemoveTagParams, removeTag } from './removeTag';

export type ArtistMethod =
  'artist.addTags' |
  'artist.getCorrection' |
  'artist.getInfo' |
  'artist.getSimilar' |
  'artist.getTags' |
  'artist.getTopAlbums' |
  'artist.getTopTags' |
  'artist.removeTag' |
  'artist.search';

export class ArtistService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public addTags = async (params: ArtistAddTagsParams): Promise<boolean> => (
    addTags(this.proxy, params)
  );

  public getCorrection = async (params: ArtistCorrectionParams): Promise<ArtistShort> => (
    getCorrection(this.proxy, params)
  );

  public getInfo = async (params: ArtistInfoParams): Promise<Artist> => (
    getInfo(this.proxy, params)
  );

  public getSimilar = async (params: ArtistSimilarParams): Promise<SimilarArtist[]> => (
    getSimilar(this.proxy, params)
  );

  public getTags = async (params: ArtistTagsParams): Promise<Tag[]> => (
    getTags(this.proxy, params)
  );

  public getTopAlbums = async (params: ArtistTopAlbumsParams): Promise<AlbumShort[]> => (
    getTopAlbums(this.proxy, params)
  );

  public removeTag = async (params: ArtistRemoveTagParams): Promise<boolean> => (
    removeTag(this.proxy, params)
  );
}
