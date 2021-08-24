import { ApiProxy, Params } from '../../proxy';
import { Method } from '../common';
import { LibraryService } from './library.service';

describe('LibraryService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new LibraryService(proxy);
  const sendRequest = jest.spyOn(proxy, 'sendRequest');

  afterEach(() => jest.clearAllMocks());

  const commonMethodSuccessTests = <P extends Params>(
    method: Method,
    params: P,
    call: (params: P) => void,
  ) => {
    beforeEach(() => call(params));

    it('should call fetch', () => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should call proxy with expected parms', () => {
      expect(sendRequest).toHaveBeenCalledWith(method, params);
      expect(sendRequest).toHaveBeenCalledTimes(1);
    });
  };


  /**
   * library.getArtists
   */
  describe('getArtists', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ artists: { artist: [] } }),
      } as Response));
    });

    describe.each([
      [{ user: 'NotAnActualUser' }],
    ])('success', getArtistsParams => {
      commonMethodSuccessTests('library.getArtists', getArtistsParams, service.getArtists);
    });
  });
});
