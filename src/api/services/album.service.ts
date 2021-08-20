import { ApiClient } from '../client';
import { ApiProxy } from '../proxy';

type AlbumParams = ({
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

export interface AlbumInfoResponse {
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

export class AlbumService {
  private client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }

  public getInfo = async (params: AlbumParams): Promise<AlbumInfoResponse> => {
    const response = await ApiProxy.sendRequest('album.getInfo', {
      api_key: this.client.key,
      ...params,
    });
    const { album } = await response.json();
    return album;
  }
}
