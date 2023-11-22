import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import "../../components/Form/form.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { EMAIL_REGEX } from "../../services/consts";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { BiInfoCircle } from "react-icons/bi";


const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password);
    navigate("/");
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
          <label htmlFor="singUpEmail">
            Email:
            <BsCheckLg
              color="green"
              className={validEmail ? "valid" : "hidden"}
            />
            <RxCross2
              color="red"
              className={validEmail || !email ? "hidden" : "invalid"}
            />
          </label>
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
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="emailnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
           <p
                id="emailnote"
                className={
                  emailFocus && !validEmail ? "instructions" : "offscreen"
                }
              >
                <BiInfoCircle />
                Please enter correct email.
              </p>
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
