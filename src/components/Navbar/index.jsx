import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import AppointmentDetails from "../AppointmentDetails";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  const appointment = useSelector((state) => state.appointment);

  const { date, doctor, name, phone, speciality, time } = appointment.value;
  const user = useSelector(state => state.auth.currentUser)

  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

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
            <NavLink className="nav-link" to="/find-doctor-instantly">
              Instant Consultation
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reports">
              Reports
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/doctors">
              Doctord
            </NavLink>
          </li>
          <li className="nav-item">
            <b> {user.username}</b>
          </li>
          <li>
            <button
            onClick={handelLogout}
              id="sing_up"
              className="btn-outline-primary mr-4"
            >
              Log out
            </button>
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
