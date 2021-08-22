import { ArtistShort, Image, MethodFunc, Tag } from '../common';
import { ArtistParams } from './artist.service';

export type ArtistInfoParams = ArtistParams & {
  lang?: string;
  autcorrect?: number;
  username?: string;
};

export interface Artist extends ArtistShort {
  image: Image[];
  streamable: number;
  stats: {
    listeners: number;
    plays: number;
  };
  similar: ArtistShort[];
  tags: {
    tag: Tag[];
  };
  bio: {
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
