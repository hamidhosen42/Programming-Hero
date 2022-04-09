import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

   const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
   };

  useEffect(() => {
      onAuthStateChanged(auth,user=>{
          setUser(user);
      })
  }, []);


  return { user, singInWithGoogle, handleSignOut };
};

export default useFirebase;