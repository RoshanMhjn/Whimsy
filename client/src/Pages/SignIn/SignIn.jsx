import React, { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [formData, setFormData] = useState({});

  const [errorMessage, setErrorMessage] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  //console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fillout all fields!!");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        setErrorMessage(data.message);
        setLoading(false);
      }

      if (res.ok) {
        navigate("/");
      }
    } catch (err) {
      setErrorMessage(error.errorMessage);
      setLoading(false);
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
            {loading ? <p className="main-loading">Loading...</p> : "Sign in"}
          </button>
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
