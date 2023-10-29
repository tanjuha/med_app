import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
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
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route exact path="/sing-up" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/best-services" element={<PrivateRoute />}>
          <Route exact path="/best-services" element={<BestServices />} />
        </Route>
        <Route path="/find-doctor" element={<PrivateRoute />}>
          <Route exact path="/find-doctor" element={<FindDoctor />} />
        </Route>
        <Route path="/find-doctor-instantly" element={<PrivateRoute />}>
          <Route
            exact
            path="/find-doctor-instantly"
            element={<FindDoctorInstantly />}
          />
        </Route>
        <Route path="/reviews" element={<PrivateRoute />}>
          <Route exact path="/reviews" element={<ReviewForm />} />
        </Route>
        <Route path="/reports" element={<PrivateRoute />}>
          <Route exact path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
