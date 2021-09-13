import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface UserGetWeeklyArtistChartParams extends Params {
  user: string;
  from?: number | Date;
  to?: number | Date;
}

export interface UserChartArtist {
  mbid: string;
  playcount: string;
  name: string;
  url: string;
  '@attr': {
    rank: string;
  };
}

interface GetWeeklyArtistChartResponseBody {
  weeklyartistchart: {
    artist: UserChartArtist[];
    '@attr': {
      user: string;
      from: string;
      to: string;
    };
  };
}

export const getWeeklyArtistChart: MethodFunc<UserGetWeeklyArtistChartParams, UserChartArtist[]> = (
  async (proxy, params) => {
    const response = await proxy.sendRequest('user.getWeeklyArtistChart', params);
    const {
      weeklyartistchart: {
        artist,
      },
    } = await response.json() as GetWeeklyArtistChartResponseBody;
    return artist;
  }
);
