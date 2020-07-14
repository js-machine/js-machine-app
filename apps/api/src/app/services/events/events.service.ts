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

  public async getEventById(id: string): Promise<Event> {
    const snapshot = await this.firebaseService.firestore
      .collection('events')
      .doc(id)
      .get();

    return this.firebaseService.mapEntityFromSnapshot(snapshot);
  }

  public async getRecentEvents(limit = 4): Promise<Event[]> {
    const snapshot = await this.firebaseService.firestore
      .collection('events')
      .orderBy('date', 'desc')
      .limit(limit)
      .get();

    return this.firebaseService.mapCollectionFromSnapshot(snapshot);
  }

  public async createEvent(event: Event): Promise<string> {
    const reference = await this.firebaseService.firestore
      .collection('events')
      .add(this.firebaseService.convertToFirebaseEntity(event));

    return reference.id;
  }

  public async updateEvent(id: string, event: Event): Promise<void> {
    await this.firebaseService.firestore
      .collection('events')
      .doc(id)
      .set(this.firebaseService.convertToFirebaseEntity(event), {
        merge: true,
      });
  }

  public async deleteEvent(id: string): Promise<void> {
    await this.firebaseService.firestore
      .collection('events')
      .doc(id)
      .delete();
  }
}
