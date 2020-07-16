import { action, observable } from "mobx";
import { RootStore } from "@js-machine-app/front/stores/root.store";
import { BackgroundState } from "./models/backgroundState";

export class UiStore {
	@observable public isPageLoading?: boolean;
	@observable public backgroundState?: BackgroundState;

  public constructor(private rootStore: RootStore) {
  }

  @action public setIsLoading = (isPageLoading: boolean) => {
    this.isPageLoading = isPageLoading;
	}
	
	@action public setBackgroundImage = (imageUrl: string, isDark = true) => {
		this.backgroundState = {
			imageUrl,
			isDark
		}
	}
}
