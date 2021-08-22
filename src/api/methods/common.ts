import { ApiProxy, Params } from '../proxy';
import { AlbumMethod } from './album';
import { ArtistMethod } from './artist';
import { AuthMethod } from './auth';

export type Method = AlbumMethod | ArtistMethod | AuthMethod;

export type MethodFunc<P extends Params, R> = (proxy: ApiProxy, params: P) => Promise<R>;

export interface AlbumShort {
  name: string;
  artist: string;
  mbid: string;
  url: string;
  streamable?: string;
  image?: Image[];
}

export interface ArtistShort {
  name: string;
  mbid: string;
  url: string;
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
  artist: ArtistShort;
  duration: number;
  url: string;
  name: string;
  streamable: {
    fulltrack: string;
    '#text': string;
  }
}
