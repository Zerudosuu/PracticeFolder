// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdUCJQ-ielkrj-PaTjFrHBHKcbsvC_HCA",
  authDomain: "react-chat-86f49.firebaseapp.com",
  projectId: "react-chat-86f49",
  storageBucket: "react-chat-86f49.appspot.com",
  messagingSenderId: "352444815879",
  appId: "1:352444815879:web:e0522a865e7febca87a8a2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
