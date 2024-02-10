import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSIafsNZgb3cZ5nYM2QYwI_5RiYYiKszs",
  authDomain: "ecommerce-react-c5433.firebaseapp.com",
  projectId: "ecommerce-react-c5433",
  storageBucket: "ecommerce-react-c5433.appspot.com",
  messagingSenderId: "365628350904",
  appId: "1:365628350904:web:d6c5f4f34c476c37012f4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
