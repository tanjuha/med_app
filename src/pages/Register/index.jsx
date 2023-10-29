import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { BiInfoCircle } from "react-icons/bi";
import {
  NAME_REGEX,
  PWD_REGEX,
  PHONE_REGEX,
  EMAIL_REGEX,
  REGISTER_URL,
} from "../../services/consts";
import Button from "../../components/Button";
import "../../components/Form/form.css";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Register = () => {
  const roleRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [role, setRole] = useState("user");
  const [validRole, setValidRole] = useState(true);
  const [roleFocus, setRoleFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // set focus to the role field
  useEffect(() => {
    roleRef.current.focus();
  }, []);

  // Validation
  useEffect(() => {
    setValidName(true);
  }, [role]);

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phone);
    setValidPhone(result);
  }, [phone]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  useEffect(() => {
    setErrMsg();
  }, [name, role, phone, email, password]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((authUser) => {
      signInWithEmailAndPassword(auth, email, password).then(
        updateProfile(auth.currentUser, {
          displayName: name,
        })
      );
      
    }).then(
      navigate("/")
    )
    .catch((err) => {
      alert(err); // TODO add Error Component
    });

    // if button enabled with js hack
    const fieldName = NAME_REGEX.test(name);
    const fieldPhone = PHONE_REGEX.test(phone);
    const fieldEmail = EMAIL_REGEX.test(email);
    const fieldPwd = PWD_REGEX.test(password);
    if (!fieldName || !fieldPhone || !fieldEmail || !fieldPwd) {
      setErrMsg("Invalid Entry");
      return;
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success Registration!</h1>
          <p>
            <NavLink to="/login" className="ml-1">
              Login
            </NavLink>
          </p>
        </section>
      ) : (
        <section className="form">
          <h1>Sing Up</h1>
          <p className="mb-6">
            Already a member?
            <NavLink to="/login" className="ml-1">
              Login
            </NavLink>
          </p>
          <form onSubmit={handleSubmit}>
            {/* General error message */}
            <p
              ref={errRef}
              className={errMsg ? "errMsg" : "offScreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            {/* Role field */}
            <div className="form-group">
              <label htmlFor="role" className="form-label">
                Role:
                <BsCheckLg
                  color="green"
                  className={validRole ? "valid" : "hidden"}
                />
                <RxCross2
                  color="red"
                  className={validRole || !role ? "hidden" : "invalid"}
                />
              </label>
              <select
                ref={roleRef}
                className="form-control"
                list="roleOptions"
                id="role"
                required
                aria-invalid={validRole ? "false" : "true"}
                aria-describedby="rolenote"
                onFocus={() => setRoleFocus(true)}
                onBlur={() => setRoleFocus(false)}
                placeholder="Select role"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                <option defaultValue value="User">
                  User
                </option>
                <option value="Provider">Provider</option>
                <option value="Admin">Admin</option>
              </select>
              <p
                id="rolenote"
                className={
                  roleFocus && !validRole ? "instructions" : "offscreen"
                }
              >
                <BiInfoCircle />
                Please select a role.
              </p>
            </div>

            {/* Name field */}
            <div className="form-group">
              <label htmlFor="name">
                Name:
                <BsCheckLg
                  color="green"
                  className={validName ? "valid" : "hidden"}
                />
                <RxCross2
                  color="red"
                  className={validName || !name ? "hidden" : "invalid"}
                />
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                autoComplete="off"
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="namenote"
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
              />
              <p
                id="namenote"
                className={
                  nameFocus && name && !validName ? "instructions" : "offscreen"
                }
              >
                <BiInfoCircle />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
            </div>

            {/* Phone field */}
            <div className="form-group">
              <label htmlFor="exampleInputPhone">
                Phone:
                <BsCheckLg
                  color="green"
                  className={validPhone ? "valid" : "hidden"}
                />
                <RxCross2
                  color="red"
                  className={validPhone || !phone ? "hidden" : "invalid"}
                />
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputPhone"
                placeholder="Enter your phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
                autoComplete="off"
                aria-invalid={validPhone ? "false" : "true"}
                aria-describedby="phonenote"
                onFocus={() => setPhoneFocus(true)}
                onBlur={() => setPhoneFocus(false)}
              />
              <p
                id="phonenote"
                className={
                  phoneFocus && !validPhone ? "instructions" : "offscreen"
                }
              >
                <BiInfoCircle />
                Please enter correct number.
              </p>
            </div>

            {/* Email field */}
            <div className="form-group">
              <label htmlFor="singUpEmail">
                Email:
                <BsCheckLg
                  color="green"
                  className={validEmail ? "valid" : "hidden"}
                />
                <RxCross2
                  color="red"
                  className={validEmail || !email ? "hidden" : "invalid"}
                />
              </label>
              <input
                type="email"
                className="form-control"
                id="singUpEmail"
                placeholder="Enter your email"
                value={email}
                autoComplete="off"
                onChange={(event) => setEmail(event.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p
                id="emailnote"
                className={
                  emailFocus && !validEmail ? "instructions" : "offscreen"
                }
              >
                <BiInfoCircle />
                Please enter correct email.
              </p>
            </div>

            {/* Password field */}
            <div className="form-group">
              <label htmlFor="singUpPassword">
                Password:
                <BsCheckLg
                  color="green"
                  className={validPassword ? "valid" : "hidden"}
                />
                <RxCross2
                  color="red"
                  className={validPassword || !password ? "hidden" : "invalid"}
                />
              </label>
              <input
                type="password"
                className="form-control"
                id="singUpPassword"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="off"
                aria-invalid={validPassword ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
              />
              <p
                id="pwdnote"
                className={
                  passwordFocus && !validPassword ? "instructions" : "offscreen"
                }
              >
                <BiInfoCircle />8 to 24 characters.
              </p>
            </div>
            <div className="form-btn">
              <Button
                disabled={
                  !validRole ||
                  !validName ||
                  !validPhone ||
                  !validEmail ||
                  !validPassword
                    ? true
                    : false
                }
                label="Submit"
                type="submit"
                className="btn bg-primary"
              />
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Register;
