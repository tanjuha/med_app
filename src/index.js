import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Login from "./pages/Login";
import BestServices from "./pages/BestServices";
import FindDoctor from "./pages/FindDoctor";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import FindDoctorInstantly from "./pages/FindDoctorInstantly";
import ReviewForm from "./pages/ReviewForm";
import Reports from "./pages/Reports";
import Register from "./pages/Register";
import Authentication from "./pages/Authentication";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sing-up",
    element: <Register />,
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
  {
    path: "/reports",
    element: <Reports />,
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
