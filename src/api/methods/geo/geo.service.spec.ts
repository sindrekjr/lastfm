import { ApiProxy, Params } from '../../proxy';
import { Method } from '../common';
import { GeoService } from './geo.service';

describe('GeoService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new GeoService(proxy);
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
      commonMethodSuccessTests('geo.getTopArtists', getTopArtistsParams, service.getTopArtists);
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
      commonMethodSuccessTests('geo.getTopTracks', getTopTracksParams, service.getTopTracks);
    });
  });
});
