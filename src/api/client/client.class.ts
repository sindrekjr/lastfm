import { AlbumService, AuthService, Session } from '../methods';
import { ApiProxy, ApiProxyOptions } from '../proxy';

export interface ApiClientOptions extends ApiProxyOptions {
  proxy?: ApiProxy;
  services?: {
    album?: AlbumService;
    auth?: AuthService;
  };
}

export class ApiClient {
  private proxy: ApiProxy;

  public album: AlbumService;
  public auth: AuthService;

  constructor(options: ApiClientOptions) {
    const { proxy, services } = options;
    this.proxy = proxy || new ApiProxy(options);

    if (services) {
      const { album, auth } = services;
      this.album = album || new AlbumService(this.proxy);
      this.auth = auth || new AuthService(this.proxy);
    } else {
      this.album = new AlbumService(this.proxy);
      this.auth = new AuthService(this.proxy);
    }
  }

  public authenticate = async (): Promise<Session> => {
    throw new Error('Not yet implemented');
    // const token = await this.auth.getToken();
    // return await this.auth.getSession({ token });
  }
}
