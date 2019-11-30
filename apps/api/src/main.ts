import * as functions from 'firebase-functions';
import server from '@js-machine-app/api/server';

export const api = functions.https.onRequest(server);
