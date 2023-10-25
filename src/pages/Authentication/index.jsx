import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Home from "../Home";
import Login from "../Login";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, setLoading } from "../../redux/auth";

const Authentication = () => {
  const user = useSelector((state) => state.auth.currentUser);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();

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
        console.log("User is not logged in.");
      }
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : user ? (
        <Home />
      ) : (
        <Login />
      )}
    </>
  );
};

export default Authentication;
