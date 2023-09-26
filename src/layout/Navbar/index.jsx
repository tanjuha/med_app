import React from "react";
import Button from "../../components/Button";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="flex justify-between py-4">
      <div className="logo">
        <a className="text-4xl font-bold mr-1" href="#">
          toBeHealthy
        </a>
        <img src={require("../../assets/images/health-care.png")} />
      </div>
      <ul className="navbar flex items-center">
        <li className="nav-item active">
          <a href="#home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#appointment" className="nav-link">
            Appointment
          </a>
        </li>
        <li className="nav-item">
          <a href="#health_blog" className="nav-link">
            Health Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#reviews" className="nav-link">
            Reviews
          </a>
        </li>
        <li>
          <Button
            label="Sing Up"
            id="sing_up"
            className="btn-outline-primary mr-4"
          />
        </li>
        <li>
          <Button
            label="Login"
            id="login"
            className="btn-outline-primary"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
