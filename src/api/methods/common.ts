import { ApiProxy, Params } from '../proxy';
import { AlbumMethod } from './album';

export type Method = AlbumMethod;

export type MethodHandler<P extends Params, R> = (proxy: ApiProxy, params: P) => Promise<R>;

export interface Album {
  name: string;
  artist: string;
  id: number;
  mbid: string;
  url: string;
  listeners: number;
  playcount: number;
  releasedate?: string;
  image?: Image[];
  toptags?: Tag[];
  tracks?: {
    track: Track[];
  };
  tags?: {
    tag: Tag[];
  };
  wiki?: {
    published: string;
    content: string;
    summary: string;
  };
}

export interface AlbumShort {
  name: string;
  artist: string;
  mbid: string;
  url: string;
  streamable: string;
  image?: string;
}

export interface Artist {
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
  artist: Artist;
  duration: number;
  url: string;
  name: string;
  streamable: {
    fulltrack: string;
    '#text': string;
  }
}
