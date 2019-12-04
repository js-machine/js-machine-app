import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import { environment } from '../environments/environment';

firebase.initializeApp(environment.firebase);
firebase.analytics();
