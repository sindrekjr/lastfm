import { ApiClient } from '../../client';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
  const album = new AlbumService(new ApiClient(''));

  beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({}),
    } as Response));
  });

  afterEach(() => jest.clearAllMocks());

  describe('getInfo', () => {
    it('should result in expected fetch call', () => {
      album.getInfo({ artist: '', album: '' });
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('getTags', () => {
    it('should result in expected fetch call', () => {
      album.getTags({ artist: '', album: '', user: '' });
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  describe('getTopTags', () => {
    it('should result in expected fetch call', () => {
      album.getTopTags({ artist: '', album: '' });
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
