// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ5hQ08JQt0VYZCv_BRhnw_jC0rTAeeTE",
  authDomain: "skyt-782c3.firebaseapp.com",
  projectId: "skyt-782c3",
  storageBucket: "skyt-782c3.firebasestorage.app",
  messagingSenderId: "597345210065",
  appId: "1:597345210065:web:03227bfa15114bcf3cbff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth, Google Provider, and Firestore
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
