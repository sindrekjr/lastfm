import { ApiProxy, Params } from '../../proxy';
import { Method } from '../common';
import { ChartService } from './chart.service';

describe('ChartService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new ChartService(proxy);
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
   * chart.getTopArtists
   */
  describe('getTopArtists', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ artists: { artist: [] } }),
      } as Response));
    });

    describe.each([
      [{}],
    ])('success', getTopArtistsParams => {
      commonMethodSuccessTests('chart.getTopArtists', getTopArtistsParams, service.getTopArtists);
    });
  });


  /**
   * chart.getTopTags
   */
  describe('getTopTags', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ tags: { tag: [] } }),
      } as Response));
    });

    describe.each([
      [{}],
    ])('success', getTopTagsParams => {
      commonMethodSuccessTests('chart.getTopTags', getTopTagsParams, service.getTopTags);
    });
  });


  /**
   * chart.getTopTracks
   */
  describe('getTopTracks', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ tracks: { track: [] } }),
      } as Response));
    });

    describe.each([
      [{}],
    ])('success', getTopTracksParams => {
      commonMethodSuccessTests('chart.getTopTracks', getTopTracksParams, service.getTopTracks);
    });
  });
});
