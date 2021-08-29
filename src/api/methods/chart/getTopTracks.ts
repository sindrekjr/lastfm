import { Params } from '../../proxy';
import { MethodFunc, TrackExtended } from '../common';

export interface ChartTopTracksParams extends Params {
  page?: number;
  limit?: number;
}

interface ChartTopTracksResponseBody {
  tracks: {
    track: TrackExtended[];
    '@attr': {
      page: string;
      perPage: string;
      totalPages: string;
      total: string;
    };
  };
}

export const getTopTracks: MethodFunc<ChartTopTracksParams, TrackExtended[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('chart.getTopTracks', params);
  const { tracks: { track } } = await response.json() as ChartTopTracksResponseBody;
  return track;
};
