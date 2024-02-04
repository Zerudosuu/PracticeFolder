import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCeRvh3Zdo6IpagV05GDA4pZLAjjPb3P5A",
  authDomain: "expense-tracker-6ef6e.firebaseapp.com",
  projectId: "expense-tracker-6ef6e",
  storageBucket: "expense-tracker-6ef6e.appspot.com",
  messagingSenderId: "14215558718",
  appId: "1:14215558718:web:b84ce19d950304ffc3836f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

//firebase login
//firebase init
//firebase deploy
