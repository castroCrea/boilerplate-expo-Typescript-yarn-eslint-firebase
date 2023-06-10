import firebase from 'firebase/compat/app'; // Import the compatibility version

import 'firebase/compat/auth'; // Import the compatibility version


// Optionally import the services that you want to use
import 'firebase/auth';
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'KEY',
  authDomain: 'APP_ID.firebaseapp.com',
  databaseURL: 'https://APP_ID.firebaseio.com',
  projectId: 'APP_ID',
  storageBucket: 'APP_ID.appspot.com',
  messagingSenderId: 'sender-APP_ID',
  appId: 'APP_ID',
  measurementId: 'G-measurement-APP_ID',
};


firebase?.initializeApp(firebaseConfig);
