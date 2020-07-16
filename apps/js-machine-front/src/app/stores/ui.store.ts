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
	
	@action public setBackgroundImage = (imageUrl: string) => {
		const prevImageUrl: string = this.backgroundState?.nextImageUrl 
		? this.backgroundState.nextImageUrl 
		: imageUrl;

		const isFirstUpdate: boolean = imageUrl == prevImageUrl;

		this.backgroundState = {
			nextImageUrl: imageUrl,
			prevImageUrl,
			isFirstUpdate
		}
	}
}
