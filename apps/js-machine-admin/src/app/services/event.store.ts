import { useContext, createContext } from 'react';
import { Event } from '@js-machine-app/models';
import { observable, action, runInAction } from 'mobx';

import {
    getEvents,
    createEvent
  } from '@js-machine-app/data-service';

export class EventStore {
    @observable public events!: Event[]

    public constructor() {
        this.init();
      }
    
      @action public init = () => {
        this.events = [];
      };

    @action public loadEvents = async () => {
        if (!this.events.length) {
          const events = await getEvents();
          runInAction(() => (this.events = events));
        }
    };
      
  @action public createEvent = async (event: Event) => {
    try {
      const { id } = await createEvent(event);
      runInAction(() => {
        event.id = id;
        this.events.push(event);
      });
    } catch (err) {
      console.error(err);
    }
  };

//   @action public saveEvent = async (event: Event) => {
//     try {
//       await updateEvent(event);
//       runInAction(() => {
//         this.events = this.events.map(d => (d.id === event.id ? event : d));
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   @action public hideEvent = async (event: Event) => {
//     try {
//       await updateEvent({ ...event, visible: false });
//       runInAction(() => (event.visible = false));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   @action public showEvent = async (event: Event) => {
//     try {
//       await updateEvent({ ...event, visible: true });
//       runInAction(() => (event.visible = true));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   @action public uploadEvent = async (event: Event, file: File) => {
//     try {
//       const content = await readMdFromFile(file);
//       await updateEvent({ ...event, content });
//       runInAction(() => (event.content = content));
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   @action public downloadEvent = async (event: Event) => {
//     const blob: Blob = new Blob([event.content], {
//       type: 'text/plain;charset=utf-8',
//     });

//     saveAs(blob, `${event.title}.md`);
//   };

//   @action public deleteDigest = async (event: Event) => {
//     try {
//       await deleteEvent(event.id);
//       runInAction(
//         () => (this.event = this.event.filter(d => d.id !== event.id)),
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   };
}

const StoreContext = createContext(new EventStore());
export const useEventStore = () => useContext(StoreContext);