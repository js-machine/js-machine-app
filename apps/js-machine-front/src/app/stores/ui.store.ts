import { action, observable, runInAction } from "mobx";
import { RootStore } from "@js-machine-app/front/stores/root.store";

export class UiStore {
  @observable public isLoading?: boolean;

  public constructor(private rootStore: RootStore) {
  }

  @action public setIsLoading =  (isLoading: boolean) => {
    runInAction(() => (this.isLoading = isLoading));
  }
}
