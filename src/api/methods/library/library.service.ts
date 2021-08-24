import { ApiProxy } from '../../proxy';
import { BaseService } from '../service.base';
import { getArtists, LibraryArtist, LibraryArtistsParams } from './getArtists';

export type LibraryMethod = 'library.getArtists';

export class LibraryService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }

  public getArtists = (params: LibraryArtistsParams): Promise<LibraryArtist[]> => (
    getArtists(this.proxy, params)
  );
}
