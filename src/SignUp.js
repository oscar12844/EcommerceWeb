import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./css/loginStyle.module.css";
import icons from "./fonts/material-icon/css/material-design-iconic-font.min.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import Login_logo from "./images/signup-image.jpg";
import Button from "@mui/material/Button";
import CryptoJS from "crypto-js";

import axios from "axios";

export default function SignUp() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validPassword, setvalidPassword] = useState(true);
  const [correctrepeatedPassword, setcorrectrepeatedPassword] = useState(true);
  const [emptyEmail, setemptyEmail] = useState(false);
  const [emptyPassword, setemptyPassword] = useState(false);
  const [emptyrepeatedPassword, setemptyrepeatedPassword] = useState(false);

  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    repeatedPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState(() => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event, password) => {
    // Prevent page reload
    event.preventDefault();

    // Create a new user

    //should check email is not empty
    if (state.email === "") {
      setemptyEmail(true);
      return;
    } else {
      setemptyEmail(false);
    }

    //should check password is not empty
    if (state.password === "") {
      setemptyPassword(true);
      return;
    } else {
      setemptyPassword(false);
    }

    //should check repeated password is not empty
    if (state.repeatedPassword === "") {
      setemptyrepeatedPassword(true);
      return;
    } else {
      setemptyrepeatedPassword(false);
    }

    //should check repeated password is the same as password
    if (state.password !== state.repeatedPassword) {
      setcorrectrepeatedPassword(false);
      return;
    } else {
      setcorrectrepeatedPassword(true);
    }

    //after checking, make HTTP Post request to localhost:8000/api/signup
    const userid = CryptoJS.SHA256(state.email).toString(CryptoJS.enc.Hex);
    axios
      .post("http://localhost:8000/signup", {
        username: state.username === "" ? state.email : state.username,
        email: state.email,
        password: state.password,
        userid: userid,
      })
      .then((response) => {
        setvalidPassword(true);

        if (response.data.accepted === true) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 406) {
          setvalidPassword(false);
        }
      });
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    //Sign Up  Form
    <section className={styles["signup"] + " " + styles["body"]}>
      <div className={styles["container"]}>
        <div className={styles["signup-content"]}>
          <div className={styles["signup-form"]}>
            <h2 className={styles["form-title"]}>Sign up</h2>
            <form
              onSubmit={handleSubmit}
              className={styles["register-form"]}
              id={styles["register-form"]}
            >
              <div className={styles["form-group"]}>
                <label htmlFor="name" className={styles["label-main"]}>
                  <i
                    className={icons["zmdi"] + " " + icons["zmdi-account"]}
                  ></i>
                </label>
                <input
                  type="text"
                  name="username"
                  id={styles["name"]}
                  value={state.username}
                  onChange={handleInputChange}
                  placeholder="Username (Optional)"
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="email" className={styles["label-main"]}>
                  <i className={icons["zmdi"] + " " + icons["zmdi-email"]}></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id={styles["email"]}
                  value={state.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                />
              </div>
              {!emptyEmail ? (
                ""
              ) : (
                <p
                  className={styles["fst-italic"] + " " + styles["text-danger"]}
                >
                  *The email cannot be empty
                </p>
              )}
              <div className={styles["form-group"]}>
                <label htmlFor="pass" className={styles["label-main"]}>
                  <i className={icons["zmdi"] + " " + icons["zmdi-lock"]}></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id={styles["pass"]}
                  value={state.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
              </div>
              {!emptyPassword ? (
                ""
              ) : (
                <p
                  className={styles["fst-italic"] + " " + styles["text-danger"]}
                >
                  *The password cannot be empty
                </p>
              )}
              {!validPassword ? (
                <p
                  className={styles["fst-italic"] + " " + styles["text-danger"]}
                >
                  *The password must be at least 8 length long
                </p>
              ) : (
                ""
              )}
              <div className={styles["form-group"]}>
                <label for="re-pass" className={styles["label-main"]}>
                  <i
                    className={icons["zmdi"] + " " + icons["zmdi-lock-outline"]}
                  ></i>
                </label>
                <input
                  type="password"
                  name="repeatedPassword"
                  id="re_pass"
                  placeholder="Repeat your password"
                  value={state.repeatedPassword}
                  onChange={handleInputChange}
                />
              </div>
              {!emptyrepeatedPassword ? (
                ""
              ) : (
                <p
                  className={styles["fst-italic"] + " " + styles["text-danger"]}
                >
                  *The repeated password cannot be empty
                </p>
              )}
              {!correctrepeatedPassword ? (
                <p
                  className={styles["fst-italic"] + " " + styles["text-danger"]}
                >
                  *Not the same as password
                </p>
              ) : (
                ""
              )}
              <div className={styles["form-group"]}>
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label
                  for="agree-term"
                  className={
                    styles["label-agree-term"] + " " + styles["label-main"]
                  }
                >
                  <span>
                    <span></span>
                  </span>
                  I agree all statements in
                  <a href="#" className={styles["term-service"]}>
                    Terms of service
                  </a>
                </label>
              </div>
              <div
                className={styles["form-group"] + " " + styles["form-button"]}
              >
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className={styles["form-submit"]}
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div className={styles["signup-image"]}>
            <figure>
              <img src={Login_logo} alt="Login Logo"></img>
            </figure>
            <Link to="/login" className={styles["signup-image-link"]}>
              I am already registered
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  return <>{renderForm}</>;
}
