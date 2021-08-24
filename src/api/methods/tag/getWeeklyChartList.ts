import { Params } from '../../proxy';
import { MethodFunc } from '../common';

export interface TagWeeklyChartListParams extends Params {
  tag: string;
}

export interface Chart {
  '#text': string;
  from: string;
  to: string;
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
