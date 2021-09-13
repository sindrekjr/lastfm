import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface UserGetWeeklyAlbumChartParams extends Params {
  user: string;
  from?: number | Date;
  to?: number | Date;
}

export interface UserChartAlbum {
  artist: {
    mbid: string;
    '#text': string;
  };
  mbid: string;
  playcount: string;
  name: string;
  url: string;
  '@attr': {
    rank: string;
  };
}

interface GetWeeklyAlbumChartResponseBody {
  weeklyalbumchart: {
    album: UserChartAlbum[];
    '@attr': {
      user: string;
      from: string;
      to: string;
    };
  };
}

export const getWeeklyAlbumChart: MethodFunc<UserGetWeeklyAlbumChartParams, UserChartAlbum[]> = (
  async (proxy, params) => {
    const response = await proxy.sendRequest('user.getWeeklyAlbumChart', params);
    const {
      weeklyalbumchart: {
        album,
      },
    } = await response.json() as GetWeeklyAlbumChartResponseBody;
    return album;
  }
);
