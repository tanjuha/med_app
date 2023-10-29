import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import axios from "../../api/axios";

import Button from "../../components/Button";
import "../../components/Form/form.css";
import { LOGIN_URL } from "../../services/consts";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="form">
    <h1>Login</h1>
    <p className="mb-6">
      Are you have a new member?
      <NavLink to="/sing-up" className="ml-1">
        Sing Up Here
      </NavLink>
    </p>

    <form onSubmit={handleSubmit}>
      {/* General error message */}
      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offScreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      {/* Email field */}
      <div className="form-group">
        <label htmlFor="loginEmail">Email</label>
        <input
          ref={userRef}
          type="email"
          autoComplete="off"
          className="form-control"
          id="loginEmail"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="loginPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="loginPassword"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="form-btn">
        <Button label="Submit" type="submit" className="btn bg-primary" />
      </div>
    </form>
    <NavLink className="linkForgot" to="/">
      Forgot Password?
    </NavLink>
  </div>
  );
};

export default Login;
