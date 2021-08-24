import { ApiProxy } from '../../proxy';
import { BaseService } from '../service.base';

export type TagMethod =
  'tag.getInfo' |
  'tag.getSimilar' |
  'tag.getTopAlbums' |
  'tag.getTopArtists' |
  'tag.getTopTags' |
  'tag.getTopTracks' |
  'tag.getWeeklyChartList';

export class TagService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }
}
