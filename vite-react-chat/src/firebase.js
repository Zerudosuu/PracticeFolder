// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8mXQrCQdNnrGkw2UNtP4J25MFiMpAuF0",
  authDomain: "react-chat-d79a0.firebaseapp.com",
  projectId: "react-chat-d79a0",
  storageBucket: "react-chat-d79a0.appspot.com",
  messagingSenderId: "52553248720",
  appId: "1:52553248720:web:9262f418e8b256eb1b53d5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);

console.log(db);
