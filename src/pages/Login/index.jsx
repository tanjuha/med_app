import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Button";
import "../../components/Form/form.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ email: email, password: password })
    );

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
        <div className="form-group">
          <label htmlFor="loginEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
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
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-btn">
          <Button label="Submit" type="submit" className="btn bg-primary" />
          <Button label="Reset" type="reset" className="btn bg-red-600" />
        </div>
      </form>
      <NavLink className="linkForgot" to="/">
        Forgot Password?
      </NavLink>
    </div>
  );
}

export default Login;
