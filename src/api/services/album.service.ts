import { ApiProxy, Params } from '../proxy';

type AlbumParams = Params & ({
  artist: string;
  album: string;
} | {
  mbid: string;
}) & {
  autocorrect?: number;
  username?: string;
  lang?: string;
};

interface Image {
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega' | '';
  '#text': string;
}

interface AlbumInfoResponse {
  id: number;
  url: string;
  mbid: string;
  name: string;
  artist: string;
  image: Image[];
  playcount: number;
  listeners: number;
  wiki: {
    published: string;
    content: string;
    summary: string;
  }
}

export const getInfo = async (params: AlbumParams): Promise<AlbumInfoResponse> => {
  const response = await ApiProxy.sendRequest('album.getInfo', params);
  const { album } = await response.json();
  return album;
};
