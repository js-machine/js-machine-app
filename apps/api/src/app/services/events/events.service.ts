import { Event } from '@js-machine-app/models';
import { Injectable, Inject } from '@js-machine-app/api/ioc';
import { FirebaseService } from '@js-machine-app/api/services/firebase';

@Injectable()
export class EventsService {
  @Inject() private firebaseService!: FirebaseService;

  public async getEvents(): Promise<Event[]> {
    const snapshot = await this.firebaseService.firestore
      .collection('events')
      .orderBy('date', 'desc')
      .get();

    return this.firebaseService.mapCollectionFromSnapshot(snapshot);
  }

  public async getRecentEvents(limit = 4): Promise<Event[]> {
    const snapshot = await this.firebaseService.firestore
      .collection('events')
      .orderBy('date', 'desc')
      .limit(limit)
      .get();

    return this.firebaseService.mapCollectionFromSnapshot(snapshot);
  }
}
