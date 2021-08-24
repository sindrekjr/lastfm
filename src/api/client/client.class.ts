import {
  AlbumService,
  ArtistService,
  AuthService,
  ChartService,
  GeoService,
  LibraryService,
} from '../methods';
import { ApiProxy, ApiProxyOptions } from '../proxy';

export interface ApiClientOptions extends ApiProxyOptions {
  proxy?: ApiProxy;
  services?: {
    album?: AlbumService;
    artist?: ArtistService;
    auth?: AuthService;
    chart?: ChartService;
    geo?: GeoService;
    library?: LibraryService;
  };
}

export class ApiClient {
  private proxy: ApiProxy;

  public album: AlbumService;
  public artist: ArtistService;
  public auth: AuthService;
  public chart: ChartService;
  public geo: GeoService;
  public library: LibraryService;

  constructor(options: ApiClientOptions) {
    const { proxy, services } = options;
    this.proxy = proxy || new ApiProxy(options);

    this.album = services?.album || new AlbumService(this.proxy);
    this.artist = services?.artist || new ArtistService(this.proxy);
    this.auth = services?.auth || new AuthService(this.proxy);
    this.chart = services?.chart || new ChartService(this.proxy);
    this.geo = services?.geo || new GeoService(this.proxy);
    this.library = services?.library || new LibraryService(this.proxy);
  }
}
