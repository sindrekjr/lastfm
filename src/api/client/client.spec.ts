import { ApiClient } from './client.class';

describe('ApiClient', () => {
  const apiKey = 'testApiKey';
  const sharedSecret = 'testSharedSecret';

  it('should not throw', () => expect(() => new ApiClient({ apiKey, sharedSecret })).not.toThrow());
});
