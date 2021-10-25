import firebase from "firebase";
//import firebaseConfig from "./firebaseConfig";

const firebaseConfig = {
  apiKey: "AIzaSyD2_wUmCAC5NZlF5Zy1jH4QGJGm4sGlq6g",
  authDomain: "netflix-0000.firebaseapp.com",
  databaseURL: "https://netflix-0000-default-rtdb.firebaseio.com",
  projectId: "netflix-0000",
  storageBucket: "netflix-0000.appspot.com",
  messagingSenderId: "241385449700",
  appId: "1:241385449700:web:05ae81697adc30dafce4f1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
