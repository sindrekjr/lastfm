import { AlbumService } from '../services';

export class ApiClient {
  key: string;
  secret?: string;

  constructor(apiKey: string)
  constructor(apiKey: string, sharedSecret: string)
  constructor(apiKey: string, sharedSecret?: string) {
    this.key = apiKey;
    this.secret = sharedSecret;
    this.album = new AlbumService(this);
  }

  public album: AlbumService;
}
