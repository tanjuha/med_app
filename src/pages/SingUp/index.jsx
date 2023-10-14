import React from "react";
import { NavLink, useNavigate  } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Button";
import "../../components/Form/form.css";

function SingUp() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({role: role, name: name, phone: phone, email: email, password: password })
    );

    navigate("/");
  };

  return (
    <div className="form">
      <h1>Sing Up</h1>
      <p className="mb-6">
        Already a member?
        <NavLink to="/login" className="ml-1">
          Login
        </NavLink>
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <input
            className="form-control"
            list="roleOptions"
            id="role"
            placeholder="Select role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
          <datalist id="roleOptions">
            <option value="User"></option>
            <option value="Provider"></option>
            <option value="Admin"></option>
          </datalist>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPhone">Phone</label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputPhone"
            placeholder="Enter your phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="singUpEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="singUpEmail"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="singUpPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="singUpPassword"
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
    </div>
  );
}

export default SingUp;
