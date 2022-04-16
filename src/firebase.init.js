// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9o7CcgD8UlK97i2BlpHp5sLrepXaf9qs",
  authDomain: "ema-john-simple-53-49390.firebaseapp.com",
  projectId: "ema-john-simple-53-49390",
  storageBucket: "ema-john-simple-53-49390.appspot.com",
  messagingSenderId: "195761379373",
  appId: "1:195761379373:web:cac0f79769a4eaeed7c0a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;