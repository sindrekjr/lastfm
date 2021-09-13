import { Params } from '../../proxy';
import { Chart, MethodFunc } from '../common';

export interface TagWeeklyChartListParams extends Params {
  tag: string;
}

interface TagWeeklyChartListResponseBody {
  weeklychartlist: {
    chart: Chart[];
    '@attr': {
      tag: string;
    };
  };
}

export const getWeeklyChartList: MethodFunc<TagWeeklyChartListParams, Chart[]> = async (
  proxy,
  params,
) => {
  const response = await proxy.sendRequest('tag.getWeeklyChartList', params);
  const { weeklychartlist: { chart } } = await response.json() as TagWeeklyChartListResponseBody;
  return chart;
};
