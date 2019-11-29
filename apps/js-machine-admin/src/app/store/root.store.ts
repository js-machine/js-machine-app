import { UiStore } from './ui.store';
import { RouterStore } from 'mobx-react-router';

export class RootStore {
  public uiStore: UiStore = new UiStore(this);
  public routerStore: RouterStore = new RouterStore();
}
