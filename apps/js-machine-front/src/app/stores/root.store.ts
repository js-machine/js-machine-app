import { AuthStore } from './auth.store';
import { UiStore } from './ui.store';
import { RouterStore } from 'mobx-react-router';

export class RootStore {
  public routerStore = new RouterStore();
  public authStore = new AuthStore(this);
  public uiStore = new UiStore();
}
