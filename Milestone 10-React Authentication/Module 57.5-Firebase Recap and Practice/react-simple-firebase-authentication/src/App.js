import "./App.css";
import app from "./firebase.init";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState([]);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const provider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth,googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebookSignIn=()=>
  {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.error('error',error)
      });
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn=()=>{
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleGoogleSignOut}>Google Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Sign In</button>
          <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
          <button onClick={handleGithubSignIn}>Github Sign In</button>
        </>
      )}
      <h2>Name : {user.displayName}</h2>
      <h3>Gmail : {user.email}</h3>
      <img src={user.photoURL} alt="" srcset="" />
    </div>
  );
}

export default App;