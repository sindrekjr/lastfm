import { Method } from '../methods';
import { ApiProxy } from './proxy.class';

describe('ApiProxy', () => {
  const apiKey = 'testApiKey';
  const userAgent = 'testUserAgent';
  const proxy = new ApiProxy({ apiKey, userAgent });

  beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({}),
    } as Response));
  });

  describe.each([
    [
      'album.getInfo' as Method,
      {
        album: 'Jagged Little Pill',
        artist: 'Alanis Morissette',
      },
      [
        'https://ws.audioscrobbler.com/2.0/'
        + '?api_key=testApiKey'
        + '&format=json'
        + '&method=album.getInfo'
        + '&album=Jagged+Little+Pill'
        + '&artist=Alanis+Morissette',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': userAgent,
          },
        },
      ],
    ],
  ])('sendRequest', (method, params, expected) => {
    it('should call fetch once', () => {
      proxy.sendRequest(method, params);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    it('should call fetch with expected params', () => {
      proxy.sendRequest(method, params);
      expect(fetch).toHaveBeenCalledWith(...expected);
    });
  });
});
