import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

var firebaseConfig = {
  // copy and paste your firebase credential here
  apiKey: "AIzaSyDNylJUtrNnfQ8hxyfdyMbG_bhEW-67D4E",
  authDomain: "toodles-545bb.firebaseapp.com",
  projectId: "toodles-545bb",
  storageBucket: "toodles-545bb.appspot.com",
  messagingSenderId: "800838218682",
  appId: "1:800838218682:web:9f12509aecc86da3c4e383",
  measurementId: "G-1ZBZ1BDCDZ"
};
const app= firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { auth, db };