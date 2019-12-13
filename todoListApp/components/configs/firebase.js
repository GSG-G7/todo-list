import firebase from 'firebase';

import 'firebase/firestore';

const firebaseConfig = {
// your firebase configs
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
