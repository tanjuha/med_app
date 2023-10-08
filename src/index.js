import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import BestServices from "./pages/BestServices";
import FindDoctor from "./pages/FindDoctor";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import FindDoctorInstantly from "./pages/FindDoctorInstantly";
import ReviewForm from "./pages/ReviewForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sing-up",
    element: <SingUp />,
  },

  {
    path: "/best-services",
    element: <BestServices />,
  },
  {
    path: "/find-doctor",
    element: <FindDoctor />,
  },
  {
    path: "/find-doctor-instantly",
    element: <FindDoctorInstantly />,
  },
  {
    path: "/reviews",
    element: <ReviewForm />,
  },
]);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
