// Import the functions you need from the SDKs you need
import { initializeApp,getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCICvPV0PdUcFwao-3p-xD4gzZY4W4tIcM",
  authDomain: "genius-car-service-firebase.firebaseapp.com",
  projectId: "genius-car-service-firebase",
  storageBucket: "genius-car-service-firebase.appspot.com",
  messagingSenderId: "312755558112",
  appId: "1:312755558112:web:25dd64c89af48e4f06e285",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;