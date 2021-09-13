import { ApiProxy } from '../../proxy';
import { commonMethodSuccessTests } from '../.jest';
import { ArtistService } from './artist.service';

describe('ArtistService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new ArtistService(proxy);
  const sendRequest = jest.spyOn(proxy, 'sendRequest');

  afterEach(() => jest.clearAllMocks());


  /**
   * artist.getCorrection
   */
  describe('getCorrection', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
          corrections: { correction: { artist: {} } },
        }),
      } as Response));
    });

    describe.each([
      [{ artist: 'The Beatles' }],
    ])('success', getCorrectionParams => {
      commonMethodSuccessTests(
        'artist.getCorrection',
        getCorrectionParams,
        service.getCorrection,
        sendRequest,
      );
    });
  });


  /**
   * artist.getInfo
   */
  describe('getInfo', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
          corrections: { correction: { artist: {} } },
        }),
      } as Response));
    });

    describe.each([
      [{ artist: 'The Beatles' }],
    ])('success', getInfoParams => {
      commonMethodSuccessTests('artist.getInfo', getInfoParams, service.getInfo, sendRequest);
    });
  });


  /**
   * artist.getSimilar
   */
  describe('getSimilar', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
          similarartists: { artist: [] },
        }),
      } as Response));
    });

    describe.each([
      [{ artist: 'The Beatles' }],
    ])('success', getSimilarParams => {
      commonMethodSuccessTests(
        'artist.getSimilar',
        getSimilarParams,
        service.getSimilar,
        sendRequest,
      );
    });
  });


  /**
   * artist.getTags
   */
  describe('getTags', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ tags: { tag: [] } }),
      } as Response));
    });

    describe.each([
      [{ artist: 'The Beatles', user: 'NotAnActualUser' }],
    ])('success', getTagsParams => {
      commonMethodSuccessTests('artist.getTags', getTagsParams, service.getTags, sendRequest);
    });
  });


  /**
   * artist.getTopTags
   */
  describe('getTopTags', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ toptags: { tag: [] }}),
      } as Response));
    });

    describe.each([
      [{ artist: 'The Beatles' }],
    ])('success', getTopTagsParams => {
      commonMethodSuccessTests(
        'artist.getTopTags',
        getTopTagsParams,
        service.getTopTags,
        sendRequest,
      );
    });
  });


  /**
   * artist.getTopTracks
   */
  describe('getTopTracks', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ toptracks: { track: [] } }),
      } as Response));
    });

    describe.each([
      [{ artist: 'The Beatles' }],
    ])('success', getTopTracksParams => {
      commonMethodSuccessTests(
        'artist.getTopTracks',
        getTopTracksParams,
        service.getTopTracks,
        sendRequest,
      );
    });
  });


  /**
   * artist.search
   */
  describe('search', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
          results: { artistmatches: { artist: [] } },
        }),
      } as Response));
    });

    describe.each([
      [{ artist: 'The Beatles' }],
    ])('success', searchParams => {
      commonMethodSuccessTests('artist.search', searchParams, service.search, sendRequest);
    });
  });
});
