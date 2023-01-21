// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNkZb0CK6kUspy3C5XNjtJO84oM215gbY",
  authDomain: "react-simple-firebase-bca71.firebaseapp.com",
  projectId: "react-simple-firebase-bca71",
  storageBucket: "react-simple-firebase-bca71.appspot.com",
  messagingSenderId: "178009690409",
  appId: "1:178009690409:web:bb153cdec5576b5dd5a738",
  measurementId: "G-GKDZGZC1VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;