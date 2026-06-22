
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-1de51.firebaseapp.com",
  projectId: "interviewai-1de51",
  storageBucket: "interviewai-1de51.firebasestorage.app",
  messagingSenderId: "216275551244",
  appId: "1:216275551244:web:4edc4e6ab39298f0549a29",
  measurementId: "G-JYE2ZZY3DB"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}