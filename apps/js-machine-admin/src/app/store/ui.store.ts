import { observable, action } from 'mobx';
import { RootStore } from './root.store';

export class UiStore {
  @observable public drawerOpen = false;

  public constructor(private rootStore: RootStore) {}

  @action public toggleDrawer = () => {
    this.drawerOpen = !this.drawerOpen;
  };
}
