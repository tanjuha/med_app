import React from "react";
import Button from "../../../components/Button";

function Login() {
  return (
    <div className="form">
      <h1>Login</h1>
      <p>
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
        <div className="d-grid gap-2">
          <Button label="Submit" type="submit" className="btn btn-primary" />
          <Button label="Reset" type="reset" className="btn btn-danger" />
        </div>
      </form>

      <a className="linkForgot" href="#">
        Forgot Password?
      </a>
    </div>
  );
}

export default Login;
