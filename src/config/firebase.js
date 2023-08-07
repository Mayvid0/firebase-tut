import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA8z5fNk3_SFGQh_jw1G-eL9cHq516-RgU",
  authDomain: "fir-tut-a8362.firebaseapp.com",
  projectId: "fir-tut-a8362",
  storageBucket: "fir-tut-a8362.appspot.com",
  messagingSenderId: "511794461941",
  appId: "1:511794461941:web:b01a462ea6112665c819bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const db = getFirestore(app)
export const storage= getStorage(app)