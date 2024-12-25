// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx4zD_fWNANlqBq9-NhngRZY6aTqlWxZQ",
  authDomain: "expofitness-2659e.firebaseapp.com",
  projectId: "expofitness-2659e",
  storageBucket: "expofitness-2659e.firebasestorage.app",
  messagingSenderId: "346723157997",
  appId: "1:346723157997:web:ed8f7398a1b2f696de49e4",
  measurementId: "G-FLGSJYBGX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const db = getFirestore(app);

export default app;