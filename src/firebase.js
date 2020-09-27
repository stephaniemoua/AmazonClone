import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhLdjzzkcgtzDzkHf1l0aOfryhUiiVTP4",
  authDomain: "clone-b18f5.firebaseapp.com",
  databaseURL: "https://clone-b18f5.firebaseio.com",
  projectId: "clone-b18f5",
  storageBucket: "clone-b18f5.appspot.com",
  messagingSenderId: "524745308163",
  appId: "1:524745308163:web:44db8d3336f54878767636",
  measurementId: "G-8MFW96S1F7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
