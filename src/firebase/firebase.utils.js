import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDre_AvQFiiT5jPoIq-vTNtw7v8xXzCu7w',
  authDomain: 'crown-db-525b8.firebaseapp.com',
  databaseURL: 'https://crown-db-525b8.firebaseio.com',
  projectId: 'crown-db-525b8',
  storageBucket: 'crown-db-525b8.appspot.com',
  messagingSenderId: '854310884875',
  appId: '1:854310884875:web:5551a0232057fe4a2f590e',
  measurementId: 'G-J2VF07Q6WM'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
