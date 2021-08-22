import { Params } from '../../proxy';
import { Artist, BoolStr, Image, MethodFunc, Tag } from '../common';

export interface ArtistInfoParams extends Params {
  artist: string;
  lang?: string;
  autcorrect?: BoolStr;
  username?: string;
}

export interface ArtistInfo extends Artist {
  image: Image[];
  streamable: BoolStr;
  ontour: BoolStr;
  stats: {
    listeners: string;
    playcount: string;
  };
  similar: {
    artist: Artist[];
  };
  tags: {
    tag: Tag[];
  };
  bio: {
    links: {
      link: {
        '#text': string;
        rel: string;
        href: string;
      }
    };
    published: string;
    summary: string;
    content: string;
  }
}

interface ArtistInfoResponseBody {
  artist: ArtistInfo;
}

export const getInfo: MethodFunc<ArtistInfoParams, ArtistInfo> = async (
  proxy,
  params,
): Promise<ArtistInfo> => {
  const response = await proxy.sendRequest('artist.getInfo', params);
  const { artist } = await response.json() as ArtistInfoResponseBody;
  return artist;
};
