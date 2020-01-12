import { action, observable, runInAction } from "mobx";
import { Digest } from "@js-machine-app/models";
import { getDigests } from "@js-machine-app/data-service";
import { UiStore } from "@js-machine-app/front/stores/ui.store";

export class NewsStore {
  @observable public news: Digest[] = [];

  public constructor(private uiStore: UiStore) {
  }

  @action public get = async (withCache: boolean) => {
    let isLoading = false;

    if (withCache && !this.news.length) {
      this.uiStore.setIsLoading(true);
      isLoading = true
    }

    try {
      const news = await getDigests();
      runInAction(() => (this.news = news));
    } finally {
      if (isLoading) {
        this.uiStore.setIsLoading(false);
      }
    }
  }
}
