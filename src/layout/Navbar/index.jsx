import React from "react";
import Button from "../../components/Button";

function Navbar() {
  return (
    <nav className="container navbar navbar-expand-lg">
      <div className="logo">
        <a className="navbar-brand m-0" href="#">
          toBeHealthy
        </a>
        <img src={require('../../assets/images/health-care.png')} />
      </div>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
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
              className="btn btn-outline-primary my-2 my-sm-0 px-4"
            />
          </li>
          <li>
            <Button
              label="Login"
              id="login"
              className="btn btn-outline-primary my-2 my-sm-0 px-4"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
