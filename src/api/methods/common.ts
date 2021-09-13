import { ApiProxy, Params } from '../proxy';
import { AlbumMethod } from './album';
import { ArtistMethod } from './artist';
import { AuthMethod } from './auth';
import { ChartMethod } from './chart';
import { GeoMethod } from './geo';
import { LibraryMethod } from './library';
import { TagMethod } from './tag';
import { TrackMethod } from './track';
import { UserMethod } from './user';

export type Method =
  AlbumMethod |
  ArtistMethod |
  AuthMethod |
  ChartMethod |
  GeoMethod |
  LibraryMethod |
  TagMethod |
  TrackMethod |
  UserMethod;

export type MethodFunc<P extends Params, R> = (proxy: ApiProxy, ...params: P[]) => Promise<R>;

export type BoolStr = '0' | '1';

export type TagType = 'artist' | 'album' | 'track';

export type TimePeriod = 'overall' | '7day' | '1month' | '3month' | '6month' | '12month';

export interface Album {
  name: string;
  artist: string | Artist;
  mbid: string;
  url: string;
  image?: Image[];
}

export interface Artist {
  name: string;
  url: string;
  mbid?: string;
  image?: Image[];
}

export interface Chart {
  '#text': string;
  from: string;
  to: string;
}

export interface Image {
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega' | '';
  '#text': string;
}

export interface Tag {
  name: string;
  url: string;
  count?: number;
}

export interface Track {
  name: string;
  url: string;
  duration?: number | string;
  streamable: BoolStr | {
    fulltrack: BoolStr;
    '#text': BoolStr;
  };
  artist: Artist;
}

export interface TrackExtended extends Track {
  mbid: string;
  listeners: string;
  playcount: string;
  streamable: BoolStr;
  image: Image[];
}
