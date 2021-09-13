import { ApiProxy, Params } from '../../proxy';
import { Album, Artist, TagType, Track } from '../common';

export interface UserGetPersonalTagsParams<T extends TagType> extends Params {
  user: string;
  tag: string;
  taggingtype: T;
  limit?: number;
  page?: number;
}

interface UserGetPersonalTagsResponseBody {
  taggings: {
    artists: {
      artist: Artist[]
    };
    albums: {
      album: Album[];
    };
    tracks: {
      track: Track[];
    };
    '@attr': {
      user: string;
      tag: string;
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export async function getPersonalTags(
  proxy: ApiProxy,
  params: UserGetPersonalTagsParams<'artist'>,
): Promise<Artist[]>;

export async function getPersonalTags(
  proxy: ApiProxy,
  params: UserGetPersonalTagsParams<'album'>,
): Promise<Album[]>;

export async function getPersonalTags(
  proxy: ApiProxy,
  params: UserGetPersonalTagsParams<'track'>,
): Promise<Track[]>;

export async function getPersonalTags<T extends TagType>(
  proxy: ApiProxy,
  params: UserGetPersonalTagsParams<T>,
): Promise<Artist[] | Album[] | Track[]> {
  const { taggingtype } = params;
  const response = await proxy.sendRequest('user.getPersonalTags', params);

  if (taggingtype === 'artist') {
    const { taggings: { artists: { artist } } } = (
      await response.json() as UserGetPersonalTagsResponseBody
    );
    return artist;
  }

  if (taggingtype === 'album') {
    const { taggings: { albums: { album } } } = (
      await response.json() as UserGetPersonalTagsResponseBody
    );
    return album;
  }

  if (taggingtype === 'track') {
    const { taggings: { tracks: { track } } } = (
      await response.json() as UserGetPersonalTagsResponseBody
    );
    return track;
  }

  throw new Error();
}
