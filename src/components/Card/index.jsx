import React from "react";
import { NavLink } from "react-router-dom";

import "./card.css";

const Card = ({ imgUrl, label, path }) => {
  return (
    <div className="card">
      <NavLink to={path}>
        <img src={imgUrl} />
        {label}
      </NavLink>
    </div>
  );
};

export default Card;
