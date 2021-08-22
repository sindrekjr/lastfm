import { Params } from '../../proxy';
import { MethodFunc, TrackInfo } from '../common';

export interface ChartTopTracksParams extends Params {
  page?: number;
  limit?: number;
}

interface ChartTopTracksResponseBody {
  tracks: {
    track: TrackInfo[];
    '@attr': {
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const getTopTracks: MethodFunc<ChartTopTracksParams, TrackInfo[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('chart.getTopTracks', params);
  const { tracks: { track } } = await response.json() as ChartTopTracksResponseBody;
  return track;
};
