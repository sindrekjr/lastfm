import { ApiProxy, Params } from '../../proxy';
import { BaseService } from '../service.base';
import { ArtistCorrectionParams, Correction, getCorrection } from './getCorrection';

export type ArtistMethod =
  'artist.addTags' |
  'artist.getCorrection' |
  'artist.getTags' |
  'artist.getTopAlbums' |
  'artist.getTopTags' |
  'artist.removeTag' |
  'artist.search';

export type ArtistParams = Params & {
  artist: string;
};

export class ArtistService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public getCorrection = async (params: ArtistCorrectionParams): Promise<Correction[]> => (
    getCorrection(this.proxy, params)
  );
}
