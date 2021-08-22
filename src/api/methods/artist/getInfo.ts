import { Params } from '../../proxy';
import { ArtistShort, BoolStr, Image, MethodFunc, Tag } from '../common';

export interface ArtistInfoParams extends Params {
  artist: string;
  lang?: string;
  autcorrect?: BoolStr;
  username?: string;
}

export interface Artist extends ArtistShort {
  image: Image[];
  streamable: BoolStr;
  ontour: BoolStr;
  stats: {
    listeners: string;
    plays: string;
  };
  similar: {
    artist: ArtistShort[];
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
  artist: Artist;
}

export const getInfo: MethodFunc<ArtistInfoParams, Artist> = async (
  proxy,
  params,
): Promise<Artist> => {
  const response = await proxy.sendRequest('artist.getInfo', params);
  const { artist } = await response.json() as ArtistInfoResponseBody;
  return artist;
};
