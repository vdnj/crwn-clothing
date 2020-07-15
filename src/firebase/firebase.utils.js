import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrOVqJPG9A_5z1PTTD5EmMJB3ajsZZ13s",
    authDomain: "crwn-db-f7e26.firebaseapp.com",
    databaseURL: "https://crwn-db-f7e26.firebaseio.com",
    projectId: "crwn-db-f7e26",
    storageBucket: "crwn-db-f7e26.appspot.com",
    messagingSenderId: "630342873965",
    appId: "1:630342873965:web:b8681477ed42d45a692064"
  }

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;