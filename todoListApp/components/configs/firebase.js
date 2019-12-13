import firebase from 'firebase';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBtiQeQ3kM46oXOHUTh30opfjpGagU9dhM',
  authDomain: 'react-native-firebase-3e588.firebaseapp.com',
  databaseURL: 'https://react-native-firebase-3e588.firebaseio.com',
  projectId: 'react-native-firebase-3e588',
  storageBucket: 'react-native-firebase-3e588.appspot.com',
  messagingSenderId: '395172426521',
  appId: '1:395172426521:web:c7d8116d1f370aae7b8b88',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
