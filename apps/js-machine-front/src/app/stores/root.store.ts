import { AuthStore } from './auth.store';
import { UiStore } from './ui.store';
import { RouterStore } from 'mobx-react-router';
import { NewsStore } from "@js-machine-app/front/stores/news.store";
import { CommunityEventsStore } from "@js-machine-app/front/stores/communityEvents.store";
import { MainStore } from "@js-machine-app/front/stores/main.store";

export class RootStore {
  public routerStore = new RouterStore();
  public authStore = new AuthStore(this);
  public uiStore = new UiStore(this);
  public newsStore = new NewsStore(this.uiStore);
  public communityEventsStore = new CommunityEventsStore(this.uiStore);
  public mainStore = new MainStore(this.uiStore);
}
