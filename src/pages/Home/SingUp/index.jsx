import React from "react";
import Button from "../../../components/Button";


function SingUp () {
    return (
        <div className="form">
        <h1>Sing Up</h1>
        <p>Already a member? <a href="#">Login</a></p>
  
        <form>
          <div className="form-group">
            <label htmlFor="role" className="form-label">Role</label>
            <input
              className="form-control"
              list="roleOptions"
              id="role"
              placeholder="Select role"
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPhone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPhone"
              placeholder="Enter your phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="singUpEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="singUpEmail"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="singUpPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="singUpPassword"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2">
            <Button label="Submit" type="submit" className="btn btn-primary"/>
            <Button label="Reset" type="reset" className="btn btn-danger"/>
          </div>
        </form>
      </div>
    )
}

export default SingUp;