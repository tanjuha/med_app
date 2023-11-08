import React, { useEffect } from "react";
import { auth } from "../../firebase";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, setLoading } from "../../redux/auth";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const user = useSelector((state) => state.auth.currentUser);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        navigate("/login");
        console.log("User is not logged in.");
      }
    });
  }, []);

  return <>{isLoading ? <div>Loading</div> : user ? <Home /> : <Login />}</>;
};

export default Authentication;
