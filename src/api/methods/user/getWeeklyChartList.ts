import { Params } from '../../proxy';
import { Chart, MethodFunc } from '../common';

export interface UserGetWeeklyChartListParams extends Params {
  user: string;
}

interface GetWeeklyChartListResponseBody {
  weeklychartlist: {
    chart: Chart[];
    '@attr': {
      user: string;
    };
  };
}

export const getWeeklyChartList: MethodFunc<UserGetWeeklyChartListParams, Chart[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('user.getWeeklyChartList', params);
  const { weeklychartlist: { chart } } = await response.json() as GetWeeklyChartListResponseBody;
  return chart;
};
