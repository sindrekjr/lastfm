import { ApiProxy, Params } from '../proxy';
import { AlbumMethod } from './album';
import { ArtistMethod } from './artist';
import { AuthMethod } from './auth';

export type Method = AlbumMethod | ArtistMethod | AuthMethod;

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
  count: number;
}

export interface Track {
  artist: Artist;
  duration: number;
  url: string;
  name: string;
  streamable: {
    fulltrack: BoolStr;
    '#text': BoolStr;
  }
}
