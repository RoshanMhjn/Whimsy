import React from "react";
import "./OAuth.css";

import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../../firebase";

import { useDispatch } from "react-redux";

import signInSucess from "../../redux/User/userSlice";

import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSucess(data));
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleClick} className="google-button">
        Continue with Google
      </button>
    </div>
  );
}
