import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP0d5rLNkxeJmXgAz1WDIAr0Sj78vDKmA",
  authDomain: "sistema-af01c.firebaseapp.com",
  projectId: "sistema-af01c",
  storageBucket: "sistema-af01c.appspot.com",
  messagingSenderId: "152522299893",
  appId: "1:152522299893:web:762bf1bc93faf45a2168bc",
  measurementId: "G-6YW4YBD31G"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;