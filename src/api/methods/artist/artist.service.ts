import { ApiProxy } from '../../proxy';
import { Album, Artist, Tag, Track } from '../common';
import { BaseService } from '../service.base';

import { addTags, ArtistAddTagsParams } from './addTags';
import { ArtistCorrectionParams, getCorrection } from './getCorrection';
import { ArtistInfo, ArtistInfoParams, getInfo } from './getInfo';
import { ArtistSimilarParams, getSimilar, SimilarArtist } from './getSimilar';
import { ArtistTagsParams, getTags } from './getTags';
import { ArtistTopAlbumsParams, getTopAlbums } from './getTopAlbums';
import { ArtistTopTagsParams, getTopTags } from './getTopTags';
import { ArtistTopTracksParams, getTopTracks } from './getTopTracks';
import { ArtistRemoveTagParams, removeTag } from './removeTag';
import { ArtistSearchParams, ArtistSearchResult, search } from './search';

export type ArtistMethod =
  'artist.addTags' |
  'artist.getCorrection' |
  'artist.getInfo' |
  'artist.getSimilar' |
  'artist.getTags' |
  'artist.getTopAlbums' |
  'artist.getTopTags' |
  'artist.getTopTracks' |
  'artist.removeTag' |
  'artist.search';

export class ArtistService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public addTags = (params: ArtistAddTagsParams): Promise<boolean> => (
    addTags(this.proxy, params)
  );

  public getCorrection = (params: ArtistCorrectionParams): Promise<Artist> => (
    getCorrection(this.proxy, params)
  );

  public getInfo = (params: ArtistInfoParams): Promise<ArtistInfo> => (
    getInfo(this.proxy, params)
  );

  public getSimilar = (params: ArtistSimilarParams): Promise<SimilarArtist[]> => (
    getSimilar(this.proxy, params)
  );

  public getTags = (params: ArtistTagsParams): Promise<Tag[]> => (
    getTags(this.proxy, params)
  );

  public getTopAlbums = (params: ArtistTopAlbumsParams): Promise<Album[]> => (
    getTopAlbums(this.proxy, params)
  );

  public getTopTags = (params: ArtistTopTagsParams): Promise<Tag[]> => (
    getTopTags(this.proxy, params)
  );

  public getTopTracks = (params: ArtistTopTracksParams): Promise<Track[]> => (
    getTopTracks(this.proxy, params)
  );

  public removeTag = (params: ArtistRemoveTagParams): Promise<boolean> => (
    removeTag(this.proxy, params)
  );

  public search = (params: ArtistSearchParams): Promise<ArtistSearchResult[]> => (
    search(this.proxy, params)
  );
}
