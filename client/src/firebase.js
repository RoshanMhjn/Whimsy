// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "whimsy-ef46b.firebaseapp.com",
  projectId: "whimsy-ef46b",
  storageBucket: "whimsy-ef46b.appspot.com",
  messagingSenderId: "707269302366",
  appId: "1:707269302366:web:d429caeb8ceea692463ccf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
