import { AlbumService } from '../methods';
import { ApiProxy, ApiProxyOptions } from '../proxy';

export interface ApiClientOptions extends ApiProxyOptions {
  proxy?: ApiProxy;
  services?: {
    album?: AlbumService;
  };
}

export class ApiClient {
  private proxy: ApiProxy;

  constructor(options: ApiClientOptions) {
    const { proxy, services } = options;
    this.proxy = proxy || new ApiProxy(options);

    if (services) {
      const { album } = services;
      this.album = album || new AlbumService(this.proxy);
    } else {
      this.album = new AlbumService(this.proxy);
    }
  }

  public album: AlbumService;
}
