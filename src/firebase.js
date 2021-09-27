import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHM02lQyEI-1OZzFpbhxTuw-D8urJezz8",
  authDomain: "e-clone-cb175.firebaseapp.com",
  projectId: "e-clone-cb175",
  storageBucket: "e-clone-cb175.appspot.com",
  messagingSenderId: "387673621829",
  appId: "1:387673621829:web:54330938533b4a6be1ea2c",
  measurementId: "G-W2T8JF3RKL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
