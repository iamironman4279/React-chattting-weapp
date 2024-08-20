import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

function SignIn() {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="sign-in">
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;
