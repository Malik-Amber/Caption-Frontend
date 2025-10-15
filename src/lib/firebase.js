// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTmwbD5ehNLGsS7IYRbGbEmnAW2DEENSM",
  authDomain: "caption-generated.firebaseapp.com",
  projectId: "caption-generated",
  storageBucket: "caption-generated.firebasestorage.app",
  messagingSenderId: "156681646235",
  appId: "1:156681646235:web:6a62584f0a2632af4d963e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
