import { ApiProxy } from '../../proxy';
import { commonMethodSuccessTests } from '../.jest';
import { ChartService } from './chart.service';

describe('ChartService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new ChartService(proxy);
  const sendRequest = jest.spyOn(proxy, 'sendRequest');

  afterEach(() => jest.clearAllMocks());


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
      commonMethodSuccessTests(
        'chart.getTopArtists',
        getTopArtistsParams,
        service.getTopArtists,
        sendRequest,
      );
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
      commonMethodSuccessTests(
        'chart.getTopTags',
        getTopTagsParams,
        service.getTopTags,
        sendRequest,
      );
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
      commonMethodSuccessTests(
        'chart.getTopTracks',
        getTopTracksParams,
        service.getTopTracks,
        sendRequest,
      );
    });
  });
});
