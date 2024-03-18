import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div>
      SignIn
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
};
