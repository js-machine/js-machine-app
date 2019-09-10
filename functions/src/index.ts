import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();

export const getAllEvents = functions.https.onRequest(
  async (request, response) => {
    const snapshot = await firestore
      .collection('events')
      .orderBy('date', 'asc')
      .get();

    response.send(
      snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.ref.id,
        date: doc.data().date.toDate(),
      })),
    );
  },
);

export const getRecentEvents = functions.https.onRequest(
  async (request, response) => {
    const snapshot = await firestore
      .collection('events')
      .orderBy('date', 'asc')
      .limit(7)
      .get();

    response.send(
      snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.ref.id,
        date: doc.data().date.toDate(),
      })),
    );
  },
);
