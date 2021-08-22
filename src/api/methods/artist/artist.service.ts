import { ApiProxy } from '../../proxy';
import { ArtistShort } from '../common';
import { BaseService } from '../service.base';
import { addTags, ArtistAddTagsParams } from './addTags';

import { ArtistCorrectionParams, getCorrection } from './getCorrection';
import { Artist, ArtistInfoParams, getInfo } from './getInfo';

export type ArtistMethod =
  'artist.addTags' |
  'artist.getCorrection' |
  'artist.getInfo' |
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
}
