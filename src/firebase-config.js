// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOxvXWprQ7MNrBPFj8S7QFaa1uZIUsF44",
  authDomain: "projectskillz-4cec6.firebaseapp.com",
  projectId: "projectskillz-4cec6",
  storageBucket: "projectskillz-4cec6.appspot.com",
  messagingSenderId: "1098551165082",
  appId: "1:1098551165082:web:d64af00729177d39ad5f23",
  measurementId: "G-XGT83Y2NGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);