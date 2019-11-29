import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { Injectable } from '@js-machine-app/api/ioc';

admin.initializeApp(functions.config().firebase);

@Injectable()
export class FirebaseService {
  public readonly firestore = admin.firestore();

  public mapCollectionFromSnapshot<T>(
    snapshot: FirebaseFirestore.QuerySnapshot,
  ): T[] {
    return snapshot.docs.map<T>(doc => this.mapEntityFromSnapshot(doc));
  }

  public mapEntityFromSnapshot<T>(
    snapshot:
      | FirebaseFirestore.DocumentSnapshot
      | FirebaseFirestore.QueryDocumentSnapshot,
  ): T {
    const data = snapshot.data();

    if (!data) {
      throw new Error('data is undefined');
    }

    return {
      ...(data as T),
      id: snapshot.ref.id,
      date: data.date.toDate(),
    };
  }

  public convertToFirebaseEntity<T extends { id?: string; date: string }>(
    data: T,
  ): Pick<T, Exclude<keyof T, 'id'>> & {
    date: FirebaseFirestore.Timestamp;
  } {
    // unsafe remove id property
    delete data.id;

    const date = data.date ? new Date(data.date) : new Date();

    return {
      ...data,
      date: admin.firestore.Timestamp.fromDate(date),
    };
  }
}
