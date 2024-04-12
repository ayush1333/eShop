import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDhBAWUxg32CdgrLzvjZtdhQzF4w-FPpXc',
  authDomain: 'eshop-ac85c.firebaseapp.com',
  projectId: 'eshop-ac85c',
  storageBucket: 'eshop-ac85c.appspot.com',
  messagingSenderId: '307544954600',
  appId: '1:307544954600:web:aa845b523f45dedc5d9b5d',
  measurementId: 'G-BXYETG8PYP',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth };
