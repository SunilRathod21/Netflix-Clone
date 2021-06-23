import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
