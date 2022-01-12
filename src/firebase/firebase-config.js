// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKunIxm-JwvfZZS99bq6dHql7E5nWZ6J4",
  authDomain: "siteparty-707a6.firebaseapp.com",
  projectId: "siteparty-707a6",
  storageBucket: "siteparty-707a6.appspot.com",
  messagingSenderId: "33967687627",
  appId: "1:33967687627:web:b648a9d9270acfe37cd84e",
  measurementId: "G-L0PM8GFPZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);