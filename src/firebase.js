import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXXB-JnVcuGyVRdDUZNYYP68cutc6FyJo",
  authDomain: "fb-clone-10106.firebaseapp.com",
  projectId: "fb-clone-10106",
  storageBucket: "fb-clone-10106.appspot.com",
  messagingSenderId: "28442687173",
  appId: "1:28442687173:web:61d64107f257341df3e2ac",
  measurementId: "G-9CHBX9JX0G"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
  