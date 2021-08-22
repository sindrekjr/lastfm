import { ApiProxy, Params } from '../../proxy';
import { Method } from '../common';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const service = new AlbumService(proxy);
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
      commonMethodSuccessTests('album.getInfo', getInfoParams, service.getInfo);
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
      commonMethodSuccessTests('album.getTags', getTagsParams, service.getTags);
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
      commonMethodSuccessTests('album.getTopTags', getTopTagsParams, service.getTopTags);
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
      commonMethodSuccessTests('album.search', searchParams, service.search);
    });
  });
});
