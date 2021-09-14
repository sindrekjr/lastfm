import { ApiProxy } from '../../proxy';
import { commonMethodSuccessTests } from '../.jest/helpers';
import { TagService } from './tag.service';

describe('TagService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new TagService(proxy);
  const sendRequest = jest.spyOn(proxy, 'sendRequest');

  afterEach(() => jest.clearAllMocks());


  /**
   * tag.getInfo
   */
  describe('getInfo', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ artists: { artist: [] } }),
      } as Response));
    });

    describe.each([
      [{ tag: 'rock' }],
    ])('success', getInfoParams => {
      commonMethodSuccessTests('tag.getInfo', getInfoParams, service.getInfo, sendRequest);
    });
  });
});
