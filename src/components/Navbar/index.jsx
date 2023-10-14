import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import AppointmentDetails from "../AppointmentDetails";
import { useSelector } from "react-redux";

function Navbar() {
  const appointment = useSelector((state) => state.appointment);

  const { date, doctor, name, phone, speciality, time } = appointment.value;

  return (
    <>
      <nav className="flex justify-between py-4">
        <div className="logo">
          <NavLink className="text-4xl font-bold mr-1" to="/">
            toBeHealthy
          </NavLink>
          <img src={require("../../assets/images/health-care.png")} />
        </div>
        <ul className="navbar flex items-center">
          <li className="nav-item active">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/find-doctor">
              Appointment
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="#health_blog" className="nav-link">
              Health Blog
            </a>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reviews">
              Reviews
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reports">
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sing-up"
              id="sing_up"
              className="btn-outline-primary mr-4"
            >
              Sing Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" id="login" className="btn-outline-primary">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      {appointment.isAppointment && (
        <AppointmentDetails
          doctor={doctor}
          speciality={speciality}
          name={name}
          phone={phone}
          date={date}
          time={time}
        />
      )}
    </>
  );
}

export default Navbar;
