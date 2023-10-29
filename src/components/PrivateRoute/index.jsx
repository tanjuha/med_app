import { Outlet } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import Authentication from "../Authentication";

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.currentUser);

  return isAuthenticated ? <Outlet /> : <Authentication />;
};

export default PrivateRoute;
