import { ApiProxy } from '../../proxy';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const album = new AlbumService(proxy);
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
      [
        {
          album: 'Believe',
          artist: 'Cher',
        },
      ],
    ])('success', getInfoParams => {
      it('should call fetch', () => {
        album.getInfo(getInfoParams);
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call proxy with expected params', () => {
        album.getInfo(getInfoParams);
        expect(sendRequest).toHaveBeenCalledWith('album.getInfo', getInfoParams);
        expect(sendRequest).toHaveBeenCalledTimes(1);
      });
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
      [
        {
          album: 'Believe',
          artist: 'Cher',
          user: 'NotAnActualUser',
        },
      ],
    ])('success', getTagsParams => {
      it('should call fetch', () => {
        album.getTags(getTagsParams);
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call proxy with expected params', () => {
        album.getTags(getTagsParams);
        expect(sendRequest).toHaveBeenCalledWith('album.getTags', getTagsParams);
        expect(sendRequest).toHaveBeenCalledTimes(1);
      });
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
      [
        {
          album: 'The Bends',
          artist: 'Radioherad',
        },
      ],
    ])('success', getTopTagsParams => {
      it('should call fetch', () => {
        album.getTopTags(getTopTagsParams);
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call proxy with expected params', () => {
        album.getTopTags(getTopTagsParams);
        expect(sendRequest).toHaveBeenCalledWith('album.getTopTags', getTopTagsParams);
        expect(sendRequest).toHaveBeenCalledTimes(1);
      });
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
      [
        { album: 'Hocus Pocus' },
      ],
    ])('success', searchParams => {
      it('should call fetch', () => {
        album.search(searchParams);
        expect(fetch).toHaveBeenCalledTimes(1);
      });

      it('should call proxy with expected params', () => {
        album.search(searchParams);
        expect(sendRequest).toHaveBeenCalledWith('album.search', searchParams);
        expect(sendRequest).toHaveBeenCalledTimes(1);
      });
    });
  });
});
