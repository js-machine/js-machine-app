import { action, observable, runInAction } from "mobx";
import { RootStore } from "@js-machine-app/front/stores/root.store";

export class UiStore {
  @observable public isPageLoading?: boolean;

  public constructor(private rootStore: RootStore) {
  }

  @action public setIsLoading = (isPageLoading: boolean) => {
    this.isPageLoading = isPageLoading;
  }
}
