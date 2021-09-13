import { ApiProxy } from '../../proxy';
import { commonMethodSuccessTests } from '../.jest';
import { LibraryService } from './library.service';

describe('LibraryService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new LibraryService(proxy);
  const sendRequest = jest.spyOn(proxy, 'sendRequest');

  afterEach(() => jest.clearAllMocks());

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
      commonMethodSuccessTests(
        'library.getArtists',
        getArtistsParams,
        service.getArtists,
        sendRequest,
      );
    });
  });
});
