import { ApiProxy } from '../../proxy';
import { BaseService } from '../service.base';

export type TrackMethod =
  'track.addTags' |
  'track.getCorrection' |
  'track.getInfo' |
  'track.getSimilar' |
  'track.getTags' |
  'track.getTopTags' |
  'track.love' |
  'track.removeTag' |
  'track.scrobble' |
  'track.search' |
  'track.unlove' |
  'track.updateNowPlaying';

export class TrackService extends BaseService {
  constructor(proxy: ApiProxy) {
    super(proxy);
  }
}
