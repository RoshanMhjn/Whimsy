import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/User/userSlice";
import OAuth from "../../Components/OAuth/OAuth";

export const SignIn = () => {
  const [formData, setFormData] = useState({});

  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  //console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all the fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };

  return (
    <div className="signin">
      <div className="signin-brand">
        <span className="brand">WELCOME!</span>
        <p>
          Join our diverse blog community,where voices thrive. <br /> Whether a
          seasoned writer or novice,
          <br /> share ideas, connect, and embark on inspiration together.
        </p>
      </div>
      <div className="signin-info">
        <form onSubmit={handleSubmit}>
          <p>Email:</p>
          <input
            onChange={handleChange}
            type="email"
            placeholder="name@company.com"
            id="email"
          />
          <p>Password</p>
          <input
            onChange={handleChange}
            type="password"
            placeholder="Your Password"
            id="password"
          />

          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? (
              <p className="main-loading-signin">Loading...</p>
            ) : (
              "Sign in"
            )}
          </button>
          <OAuth />
        </form>
        <span className="signin-text">Don't have an account?</span>
        <Link className="signin-link" to="/sign-up">
          Sign Up
        </Link>

        {errorMessage && (
          <div className="error-box">
            <p className="error-message">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};
