import { ApiClient } from '../../client';
import { ApiProxy } from '../../proxy';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
  const api_key = 'testApiKey';
  const album = new AlbumService(new ApiClient(api_key));
  const proxy = jest.spyOn(ApiProxy, 'sendRequest');

  beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({}),
    } as Response));
  });

  afterEach(() => jest.clearAllMocks());

  describe.each([
    [
      {
        album: 'Believe',
        artist: 'Cher',
      },
    ],
  ])('getInfo', getInfoParams => {
    it('should call fetch', () => {
      album.getInfo(getInfoParams);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should call proxy with expected params', () => {
      album.getInfo(getInfoParams);
      expect(proxy).toHaveBeenCalledWith('album.getInfo', { api_key, ...getInfoParams });
      expect(proxy).toHaveBeenCalledTimes(1);
    });
  });

  describe.each([
    [
      {
        album: 'Believe',
        artist: 'Cher',
        user: 'NotAnActualUser',
      },
    ],
  ])('getTags', getTagsParams => {
    it('should call fetch', () => {
      album.getTags(getTagsParams);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should call proxy with expected params', () => {
      album.getTags(getTagsParams);
      expect(proxy).toHaveBeenCalledWith('album.getTags', { api_key, ...getTagsParams });
      expect(proxy).toHaveBeenCalledTimes(1);
    });
  });

  describe.each([
    [
      {
        album: 'The Bends',
        artist: 'Radioherad',
      },
    ],
  ])('getTopTags', getTopTagsParams => {
    it('should call fetch', () => {
      album.getTopTags(getTopTagsParams);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should call proxy with expected params', () => {
      album.getTopTags(getTopTagsParams);
      expect(proxy).toHaveBeenCalledWith('album.getTopTags', { api_key, ...getTopTagsParams });
      expect(proxy).toHaveBeenCalledTimes(1);
    });
  });
});
