import { ApiProxy } from '../../proxy';
import { BaseService } from '../service.base';

import { addTags, TrackAddTagsParams } from './addTags';
import { getCorrection, TrackCorrectionParams } from './getCorrection';
import { getInfo, TrackInfoParams } from './getInfo';
import { getSimilar, TrackSimilarParams } from './getSimilar';
import { getTags, TrackTagsParams } from './getTags';

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

  public addTags = (params: TrackAddTagsParams): Promise<boolean> => (
    addTags(this.proxy, params)
  );

  public getCorrection = (params: TrackCorrectionParams) => (
    getCorrection(this.proxy, params)
  );

  public getInfo = (params: TrackInfoParams) => (
    getInfo(this.proxy, params)
  );

  public getSimilar = (params: TrackSimilarParams) => (
    getSimilar(this.proxy, params)
  );

  public getTags = (params: TrackTagsParams) => (
    getTags(this.proxy, params)
  );
}
