import { AuthStore } from './auth.store';
import { RouterStore } from 'mobx-react-router';

export class RootStore {
  public authStore: AuthStore = new AuthStore(this);
  public routerStore: RouterStore = new RouterStore();
}
