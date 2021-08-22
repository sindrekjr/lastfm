import { AlbumService, AuthService, ChartService, Session } from '../methods';
import { ArtistService } from '../methods/artist';
import { ApiProxy, ApiProxyOptions } from '../proxy';

export interface ApiClientOptions extends ApiProxyOptions {
  proxy?: ApiProxy;
  services?: {
    album?: AlbumService;
    artist?: ArtistService;
    auth?: AuthService;
    chart?: ChartService;
  };
}

export class ApiClient {
  private proxy: ApiProxy;

  public album: AlbumService;
  public artist: ArtistService;
  public auth: AuthService;
  public chart: ChartService;

  constructor(options: ApiClientOptions) {
    const { proxy, services } = options;
    this.proxy = proxy || new ApiProxy(options);

    this.album = services?.album || new AlbumService(this.proxy);
    this.artist = services?.artist || new ArtistService(this.proxy);
    this.auth = services?.auth || new AuthService(this.proxy);
    this.chart = services?.chart || new ChartService(this.proxy);
  }

  public authenticate = async (): Promise<Session> => {
    throw new Error('Not yet implemented');
    // const token = await this.auth.getToken();
    // return await this.auth.getSession({ token });
  }
}
