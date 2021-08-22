import { ApiClient } from './client.class';

describe('ApiClient', () => {
  const apiKey = 'testApiKey';
  const secret = 'testSharedSecret';

  it('should not throw', () => expect(() => new ApiClient({ apiKey, secret })).not.toThrow());
});
