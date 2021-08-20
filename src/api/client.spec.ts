import { ApiClient } from './client.class';

describe('ApiClient', () => {
  it('should not throw', () => expect(() => new ApiClient('')).not.toThrow());

  it('should store given api key', () => {
    const client = new ApiClient('testApiKey');
    expect(Object.values(client)).toContain('testApiKey');
  });

  it('should store given shared secret', () => {
    const client = new ApiClient('', 'testSharedSecret');
    expect(Object.values(client)).toContain('testSharedSecret');
  });
});
