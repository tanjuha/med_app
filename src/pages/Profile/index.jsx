import React, { useRef, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { editUserName, setUserPhone } from "../../redux/auth";
import { closeModal, openModal } from "../../redux/modal";

const Profile = () => {
  const user = useSelector((state) => state.auth);
  const modal = useSelector((state) => state.modal.isModal);
  const dispatch = useDispatch();

  const userRef = useRef();

  const [userName, setUserName] = useState(user.currentUser.username);
  const [phone, setPhone] = useState(user.userPhone);

  useEffect(() => {
    if (modal) userRef.current.focus();
  }, [modal]);

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(openModal());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Todo add this logic to Firebase
    dispatch(setUserPhone(phone));
    dispatch(editUserName(userName));

    dispatch(closeModal());
  };

  return (
    <>
      <Navbar />
      {modal ? (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="loginEmail">Email</label>
                <input
                  type="email"
                  autoComplete="off"
                  className="form-control"
                  id="loginEmail"
                  readOnly
                  disabled
                  value={user.currentUser.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="editUserName">Username</label>
                <input
                  ref={userRef}
                  type="text"
                  className="form-control"
                  id="editUserName"
                  required
                  placeholder="Username"
                  value={userName}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ediPhone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="ediPhone"
                  required
                  placeholder="Phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="form-btn">
                <button type="submit" className="btn bg-primary mt-4">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="card flex flex-col mx-auto mt-5 items-center justify-center">
          <h1 className="mb-4">Welcome {user.currentUser.username}!</h1>
          <p>
            <strong>Email:</strong> {user.currentUser.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.userPhone}
          </p>
          <button className="btn bg-primary mt-4" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
