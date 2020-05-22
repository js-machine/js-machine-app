import * as functions from 'firebase-functions';
import server from '@js-machine-app/api/server';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const api = functions.https.onRequest(server as any);
