import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

  // TODO: Replace the following with your app's Firebase project configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQ_pmQ4rVtJtaGDToa8dJMOdQEoY3VcKw",
    authDomain: "timepass-99e3c.firebaseapp.com",
    projectId: "timepass-99e3c",
    storageBucket: "timepass-99e3c.appspot.com",
    messagingSenderId: "761685849308",
    appId: "1:761685849308:web:7fe8c94353d9a34012f019",
    measurementId: "G-PZTDHK5848"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;