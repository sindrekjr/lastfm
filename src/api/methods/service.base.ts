import { ApiProxy } from '../proxy';

export abstract class BaseService {
  protected proxy: ApiProxy;

  constructor(proxy: ApiProxy) {
    this.proxy = proxy;
  }
}
