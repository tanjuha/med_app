import React from "react";
import Button from "../../../components/Button";
import "../../../components/Button/Form/form.css";

function Login() {
  return (
    <div className="form">
      <h1>Login</h1>
      <p className="mb-6">
        Are you have a new member? <a href="#">Sing Up Here</a>
      </p>

      <form>
        <div className="form-group">
          <label htmlFor="loginEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="loginEmail"
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
          />
        </div>
        <div className="form-btn">
          <Button label="Submit" type="submit" className="btn bg-primary" />
          <Button label="Reset" type="reset" className="btn bg-red-600" />
        </div>
      </form>

      <a className="linkForgot" href="#">
        Forgot Password?
      </a>
    </div>
  );
}

export default Login;
