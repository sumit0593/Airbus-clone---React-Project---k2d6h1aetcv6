// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp_eq6fZpV7yjO09enuk3GyIHsbYdqEAQ",
  authDomain: "airbus-clone-react.firebaseapp.com",
  projectId: "airbus-clone-react",
  storageBucket: "airbus-clone-react.appspot.com",
  messagingSenderId: "610223257861",
  appId: "1:610223257861:web:dd244e151e20d711acdf6c",
  measurementId: "G-3C102WFWBG"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth , provider , db };
