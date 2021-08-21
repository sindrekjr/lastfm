import { ApiProxy } from '../../proxy';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
  const apiKey = 'testApiKey';
  const proxy = new ApiProxy({ apiKey });
  const album = new AlbumService(proxy);
  const sendRequest = jest.spyOn(proxy, 'sendRequest');

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
      expect(sendRequest).toHaveBeenCalledWith('album.getInfo', getInfoParams);
      expect(sendRequest).toHaveBeenCalledTimes(1);
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
      expect(sendRequest).toHaveBeenCalledWith('album.getTags', getTagsParams);
      expect(sendRequest).toHaveBeenCalledTimes(1);
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
      expect(sendRequest).toHaveBeenCalledWith('album.getTopTags', getTopTagsParams);
      expect(sendRequest).toHaveBeenCalledTimes(1);
    });
  });
});
