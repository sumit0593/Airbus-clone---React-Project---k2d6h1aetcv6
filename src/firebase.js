// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBERWcDxD73fkBlEPDwz8ZgCCn7IZFmIUk",
    authDomain: "dxndn-31acf.firebaseapp.com",
    projectId: "dxndn-31acf",
    storageBucket: "dxndn-31acf.appspot.com",
    messagingSenderId: "112026057504",
    appId: "1:112026057504:web:a92fc8227c991f1b56b545"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth , provider , db };
