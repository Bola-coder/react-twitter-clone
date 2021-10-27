import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCoiszrbJzBvUVy7yiEBVDL2pNjegYA9gQ",
  authDomain: "twitter-clone-90ea9.firebaseapp.com",
  projectId: "twitter-clone-90ea9",
  storageBucket: "twitter-clone-90ea9.appspot.com",
  messagingSenderId: "634171924574",
  appId: "1:634171924574:web:dcd40d72cdfbc70f8694cf",
  measurementId: "G-1XYRYF5CZ6",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
