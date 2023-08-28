// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvBV5T0hR4j_es_yI5b_4jHVPn9rcKUPg",
  authDomain: "fchat-2ae6b.firebaseapp.com",
  projectId: "fchat-2ae6b",
  storageBucket: "fchat-2ae6b.appspot.com",
  messagingSenderId: "990466687413",
  appId: "1:990466687413:web:e0d3fa0ba4bbe85bc159fc",
  measurementId: "G-KJX73EXKQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);