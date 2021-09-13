import { Params } from '../../proxy';
import { Image, MethodFunc } from '../common';

export interface UserGetWeeklyTrackChartParams extends Params {
  user: string;
  from?: number | Date;
  to?: number | Date;
}

export interface UserChartTrack {
  artist: {
    mbid: string;
    '#text': string;
  };
  mbid: string;
  url: string;
  image: Image[];
  name: string;
  playcount: string;
}

interface GetWeeklyTrackChartResponseBody {
  weeklytrackchart: {
    track: UserChartTrack[];
    '@attr': {
      user: string;
      from: string;
      to: string;
    };
  };
}

export const getWeeklyTrackChart: MethodFunc<UserGetWeeklyTrackChartParams, UserChartTrack[]> = (
  async (proxy, params) => {
    const response = await proxy.sendRequest('user.getWeeklyTrackChart', params);
    const {
      weeklytrackchart: {
        track,
      },
    } = await response.json() as GetWeeklyTrackChartResponseBody;
    return track;
  }
);
