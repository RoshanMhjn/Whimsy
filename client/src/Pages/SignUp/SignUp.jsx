import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
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
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fillout all fields!!");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
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
        navigate("/sign-in");
      }
    } catch (err) {
      setErrorMessage(error.errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="signup">
      <div className="signup-brand">
        <span className="brand">WELCOME!</span>
        <p>
          Join our diverse blog community,where voices thrive. <br /> Whether a
          seasoned writer or novice,
          <br /> share ideas, connect, and embark on inspiration together.
        </p>
      </div>
      <div className="signup-info">
        <form onSubmit={handleSubmit}>
          <p>Username: </p>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Username"
            id="username"
          />
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
            {loading ? <p>Loading...</p> : "Sign Up"}
          </button>
        </form>
        <Link className="signup-link" to="/sign-up">
          <span className="signup-text">Already have an account?</span>
          Sign In
        </Link>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};
