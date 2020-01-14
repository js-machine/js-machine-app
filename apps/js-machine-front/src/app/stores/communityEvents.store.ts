import { action, observable, runInAction } from "mobx";
import { Event } from "@js-machine-app/models";
import { UiStore } from "@js-machine-app/front/stores/ui.store";
import { getEvents, getRecentEvents } from "@js-machine-app/data-service";

export class CommunityEventsStore {
  @observable public events: Event[] = [];
  @observable public recentEvents: Event[] = [];

  public constructor(private uiStore: UiStore) {
  }

  @action public getEvents = async (withCache: boolean) => {
    let isLoading = false;

    if (withCache && !this.events.length) {
      this.uiStore.setIsLoading(true);
      isLoading = true;
    }

    try {
      const events = await getEvents();
      runInAction(() => (this.events = events));
    } finally {
      if (isLoading) {
        this.uiStore.setIsLoading(false);
      }
    }
  };

  @action public getRecentEvents = async (withCache: boolean) => {
    let isLoading = false;

    if (withCache && !this.recentEvents.length) {
      this.uiStore.setIsLoading(true);
      isLoading = true;
    }

    try {
      const recentEvents = await getRecentEvents();
      runInAction(() => (this.recentEvents = recentEvents));
    } finally {
      if (isLoading) {
        this.uiStore.setIsLoading(false);
      }
    }
  }
}
