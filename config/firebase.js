import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
//   apiKey: "AIzaSyCokfVYZxsQHjA1tkJGJe2NxLDO82cpZ1U",
//   authDomain: "annonme.firebaseapp.com",
//   projectId: "annonme",
//   storageBucket: "annonme.appspot.com",
//   messagingSenderId: "473853279594",
//     appId: "1:473853279594:web:116f7a8e6c2584a26af913"
  
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();