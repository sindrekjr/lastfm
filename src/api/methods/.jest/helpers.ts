import { Params } from '../../proxy';
import { Method } from '../common/models';

export const commonMethodSuccessTests = <P extends Params>(
  method: Method,
  params: P,
  call: (params: P) => void,
  sendRequest: jest.SpyInstance,
) => {
  beforeEach(() => call(params));
  afterEach(() => jest.clearAllMocks());

  it('should call fetch', () => {
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should call proxy with expected parms', () => {
    expect(sendRequest).toHaveBeenCalledWith(method, params);
    expect(sendRequest).toHaveBeenCalledTimes(1);
  });
};
