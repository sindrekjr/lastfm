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

export type MethodFunc<P extends Params, R> = (proxy: ApiProxy, params: P) => Promise<R>;

export type BoolStr = '0' | '1';

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
  artist: Artist;
  duration?: number;
  url: string;
  name: string;
  streamable: BoolStr | {
    fulltrack: BoolStr;
    '#text': BoolStr;
  }
}

export interface TrackInfo extends Track {
  playcount: string;
  listeners: string;
  mbid: string;
  streamable: BoolStr;
  image: Image[];
}
