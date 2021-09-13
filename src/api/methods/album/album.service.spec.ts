import { ApiProxy } from '../../proxy';
import { commonMethodSuccessTests } from '../.jest';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new AlbumService(proxy);
  const sendRequest = jest.spyOn(proxy, 'sendRequest');

  afterEach(() => jest.clearAllMocks());


  /**
   * album.getInfo
   */
  describe('getInfo', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ album: {} }),
      } as Response));
    });

    describe.each([
      [{ album: 'Believe', artist: 'Cher' }],
    ])('success', getInfoParams => {
      commonMethodSuccessTests('album.getInfo', getInfoParams, service.getInfo, sendRequest);
    });
  });


  /**
   * album.getTags
   */
  describe('getTags', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ tags: { tag: [] }}),
      } as Response));
    });

    describe.each([
      [{ album: 'Believe', artist: 'Cher', user: 'NotAnActualUser' }],
    ])('success', getTagsParams => {
      commonMethodSuccessTests('album.getTags', getTagsParams, service.getTags, sendRequest);
    });
  });


  /**
   * album.getTopTags
   */
  describe('getTopTags', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ toptags: { tag: [] }}),
      } as Response));
    });

    describe.each([
      [{ album: 'The Bends', artist: 'Radioherad' }],
    ])('success', getTopTagsParams => {
      commonMethodSuccessTests(
        'album.getTopTags',
        getTopTagsParams,
        service.getTopTags,
        sendRequest,
      );
    });
  });


  /**
   * album.search
   */
  describe('search', () => {
    beforeAll(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({ results: { albummatches: { album: [] }}}),
      } as Response));
    });

    describe.each([
      [{ album: 'Hocus Pocus' }],
    ])('success', searchParams => {
      commonMethodSuccessTests('album.search', searchParams, service.search, sendRequest);
    });
  });
});
