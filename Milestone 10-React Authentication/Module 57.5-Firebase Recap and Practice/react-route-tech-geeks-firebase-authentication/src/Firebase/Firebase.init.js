import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKtkJBOg0nCxrpABm6mokfXoJhIxMVdpU",
  authDomain: "email-password-auth-61e00.firebaseapp.com",
  projectId: "email-password-auth-61e00",
  storageBucket: "email-password-auth-61e00.appspot.com",
  messagingSenderId: "823849435599",
  appId: "1:823849435599:web:88960d92832bbf7649d2ba",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;