import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBNlXt_-_ZFJp3pBZ8hHw1JCsm5qkhq40M",
  authDomain: "chat-bc6e6.firebaseapp.com",
  projectId: "chat-bc6e6",
  storageBucket: "chat-bc6e6.appspot.com",
  messagingSenderId: "840013003936",
  appId: "1:840013003936:web:e1834e7a3201ff29751dc5"
};

// Initialize Firebase

  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
