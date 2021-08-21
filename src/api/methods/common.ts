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
