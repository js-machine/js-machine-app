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

export const getDigests = functions.https.onRequest(
  async (request, response) => {
    const snapshot = await firestore
      .collection('digests')
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

export const createDigest = functions.https.onRequest(
  async (request, response) => {
    const { id, ...digest } = request.body.digest;

    try {
      const res = await firestore.collection('digests').add({
        ...digest,
        date: admin.firestore.Timestamp.fromDate(new Date(digest.date)),
      });

      response.status(201).send({ id: res.id });
    } catch {
      response.sendStatus(500);
    }
  },
);

export const saveDigest = functions.https.onRequest(
  async (request, response) => {
    const { id, ...digest } = request.body.digest;

    try {
      await firestore
        .collection('digests')
        .doc(id)
        .set(
          {
            ...digest,
            date: admin.firestore.Timestamp.fromDate(new Date(digest.date)),
          },
          { merge: true },
        );

      response.sendStatus(204);
    } catch {
      response.sendStatus(500);
    }
  },
);

export const deleteDigest = functions.https.onRequest(
  async (request, response) => {
    const digestId: string = request.body.digestId;

    try {
      await firestore
        .collection('digests')
        .doc(digestId)
        .delete();

      response.sendStatus(204);
    } catch {
      response.sendStatus(500);
    }
  },
);

export const hideDigest = functions.https.onRequest(
  async (request, response) => {
    const digestId: string = request.body.digestId;

    try {
      await firestore
        .collection('digests')
        .doc(digestId)
        .set({ visible: false }, { merge: true });

      response.sendStatus(204);
    } catch {
      response.sendStatus(500);
    }
  },
);

export const showDigest = functions.https.onRequest(
  async (request, response) => {
    const digestId: string = request.body.digestId;

    try {
      await firestore
        .collection('digests')
        .doc(digestId)
        .set({ visible: true }, { merge: true });

      response.sendStatus(204);
    } catch {
      response.sendStatus(500);
    }
  },
);

export const uploadDigestMd = functions.https.onRequest(
  async (request, response) => {
    const digestId: string = request.body.digestId;
    const content: string = request.body.content;

    try {
      await firestore
        .collection('digests')
        .doc(digestId)
        .set({ content }, { merge: true });

      response.sendStatus(204);
    } catch {
      response.sendStatus(500);
    }
  },
);
