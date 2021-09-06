import { ApiProxy } from '../../proxy';
import { Tag } from '../common';
import { BaseService } from '../service.base';

import { addTags, TrackAddTagsParams } from './addTags';
import { getCorrection, TrackCorrection, TrackCorrectionParams } from './getCorrection';
import { getInfo, TrackInfo, TrackInfoParams } from './getInfo';
import { getSimilar, SimilarTrack, TrackSimilarParams } from './getSimilar';
import { getTags, TrackTagsParams } from './getTags';
import { getTopTags, TrackTopTagsParams } from './getTopTags';
import { love, TrackLoveParams } from './love';
import { removeTag, TrackRemoveTagParams } from './removeTag';
import { Scrobble, scrobble, TrackScrobbleParams } from './scrobble';
import { search, TrackSearchParams, TrackSearchResult } from './search';
import { TrackUnloveParams, unlove } from './unlove';
import { NowPlaying, updateNowPlaying, UpdateNowPlayingParams } from './updateNowPlaying';

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

  public getCorrection = (params: TrackCorrectionParams): Promise<TrackCorrection> => (
    getCorrection(this.proxy, params)
  );

  public getInfo = (params: TrackInfoParams): Promise<TrackInfo> => (
    getInfo(this.proxy, params)
  );

  public getSimilar = (params: TrackSimilarParams): Promise<SimilarTrack[]> => (
    getSimilar(this.proxy, params)
  );

  public getTags = (params: TrackTagsParams): Promise<Tag[]> => (
    getTags(this.proxy, params)
  );

  public getTopTags = (params: TrackTopTagsParams): Promise<Tag[]> => (
    getTopTags(this.proxy, params)
  );

  public love = (params: TrackLoveParams): Promise<boolean> => (
    love(this.proxy, params)
  );

  public removeTag = (params: TrackRemoveTagParams): Promise<boolean> => (
    removeTag(this.proxy, params)
  );

  public scrobble = (params: TrackScrobbleParams[]): Promise<[number, Scrobble[]]> => (
    scrobble(this.proxy, ...params)
  );

  public search = (params: TrackSearchParams): Promise<TrackSearchResult[]> => (
    search(this.proxy, params)
  );

  public unlove = (params: TrackUnloveParams): Promise<boolean> => (
    unlove(this.proxy, params)
  );

  public updateNowPlaying = (params: UpdateNowPlayingParams): Promise<NowPlaying> => (
    updateNowPlaying(this.proxy, params)
  );
}
