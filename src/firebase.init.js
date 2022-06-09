// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZMEvVvMW6ceOI90t77wpDaohDmjbSkvY",
  authDomain: "ananyas-portfolio.firebaseapp.com",
  projectId: "ananyas-portfolio",
  storageBucket: "ananyas-portfolio.appspot.com",
  messagingSenderId: "786252954321",
  appId: "1:786252954321:web:36246017d2a8dbcc3923f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;