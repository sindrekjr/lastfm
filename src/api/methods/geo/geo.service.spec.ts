import { ApiProxy } from '../../proxy';
import { commonMethodSuccessTests } from '../.jest';
import { GeoService } from './geo.service';

describe('GeoService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new GeoService(proxy);
  const sendRequest = jest.spyOn(proxy, 'sendRequest');

  afterEach(() => jest.clearAllMocks());


  /**
   * geo.getTopArtists
   */
  describe('getTopArtists', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ topartists: { artist: [] } }),
      } as Response));
    });

    describe.each([
      [{ country: 'Germany' }],
    ])('success', getTopArtistsParams => {
      commonMethodSuccessTests(
        'geo.getTopArtists',
        getTopArtistsParams,
        service.getTopArtists,
        sendRequest,
      );
    });
  });


  /**
   * geo.getTopTracks
   */
  describe('getTopTracks', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ tracks: { track: [] } }),
      } as Response));
    });

    describe.each([
      [{ country: 'Germany' }],
    ])('success', getTopTracksParams => {
      commonMethodSuccessTests(
        'geo.getTopTracks',
        getTopTracksParams,
        service.getTopTracks,
        sendRequest,
      );
    });
  });
});
