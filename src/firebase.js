// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "peterfullstack-ptfolio.firebaseapp.com",
  projectId: "peterfullstack-ptfolio",
  storageBucket: "peterfullstack-ptfolio.appspot.com",
  messagingSenderId: "488534446678",
  appId: "1:488534446678:web:915d87e96c9056c6e761f7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);