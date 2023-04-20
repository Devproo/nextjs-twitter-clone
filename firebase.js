// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAFVZKr0cRp6ZCJOVra-c81pPcqP6cvVw",
  authDomain: "nextjs-twitter-clone-7056a.firebaseapp.com",
  projectId: "nextjs-twitter-clone-7056a",
  storageBucket: "nextjs-twitter-clone-7056a.appspot.com",
  messagingSenderId: "1038995198793",
  appId: "1:1038995198793:web:fc9fc18fd398bd91d38098",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();
export default app;
export { db, storage };
