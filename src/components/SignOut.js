import React from "react";
import { auth } from "../firebase";

function SignOut() {
  return (
    auth.currentUser && (
      <button onClick={() => auth.signOut()} className="sign-out">
        Sign Out
      </button>
    )
  );
}

export default SignOut;
