import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAN4hTWUVT4JeWELw-BtOufk4_DBeVIDRc",
  authDomain: "crwn-db-6559a.firebaseapp.com",
  projectId: "crwn-db-6559a",
  storageBucket: "crwn-db-6559a.appspot.com",
  messagingSenderId: "621824390682",
  appId: "1:621824390682:web:177b7fd660c4c5459103a3",
  measurementId: "G-ZQ7CYZ23KL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
