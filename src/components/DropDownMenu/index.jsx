import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
import "./dropDownMenu.css";
import { NavLink } from "react-router-dom";

const DropdownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const user = useSelector((state) => state.auth.currentUser);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="font-bold flex items-center" onClick={toggleDropdown}>
        {user.username} <MdArrowDropDown />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content" onBlur={closeDropdown} tabIndex="0">
          <NavLink className="nav-link" to="/find-doctor">
            Your Profile
          </NavLink>
          <NavLink className="nav-link" to="/find-doctor">
            Your Reports
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
