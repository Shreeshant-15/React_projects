// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBByr9WVK_JX5K5vosqb_kL2-beNxqkNpY",
  authDomain: "vite-contact-e0720.firebaseapp.com",
  projectId: "vite-contact-e0720",
  storageBucket: "vite-contact-e0720.firebasestorage.app",
  messagingSenderId: "152155200232",
  appId: "1:152155200232:web:ac351867de2c762ecb875d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

