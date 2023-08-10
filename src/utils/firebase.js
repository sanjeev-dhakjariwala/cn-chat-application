import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb-xy1klg0ilqYaDNNac9p5XE9UsjLsWY",
  authDomain: "cn-react-chat-app.firebaseapp.com",
  projectId: "cn-react-chat-app",
  storageBucket: "cn-react-chat-app.appspot.com",
  messagingSenderId: "2757492394",
  appId: "1:2757492394:web:ebd1b8da24ac18a6901ad3",
  measurementId: "G-EK5G6G3JCB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
