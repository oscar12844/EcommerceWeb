import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./css/loginStyle.module.css";
import icons from "./fonts/material-icon/css/material-design-iconic-font.min.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import Login_logo from "./images/login.png";
import Button from "@mui/material/Button";
import CryptoJS from "crypto-js";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const [response, setResponse] = useState({});

  const handleSubmit = (event) => {
    const userid = CryptoJS.SHA256(state.email).toString(CryptoJS.enc.Hex);
    event.preventDefault();
    try {
      axios
        .get("http://localhost:8000/logincheck", {
          params: {
            email: state.email,
            password: state.password,
            userid: CryptoJS.SHA256(state.email).toString(CryptoJS.enc.Hex),
          },
        })
        .then((response) => {
          localStorage.setItem("user", response.data.username);
          localStorage.setItem("userid", userid);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState(() => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    //Sign in  Form
    <section className={styles["sign-in"] + " " + styles["body"]}>
      <div className={styles["container"]}>
        <div className={styles["signin-content"]}>
          <div className={styles["signin-image"]}>
            <figure>
              <img src={Login_logo} alt="Login Logo" />
            </figure>
            <Link to="/SignUp" className={styles["signup-image-link"]}>
              Create an account
            </Link>
          </div>

          <div className={styles["signin-form"]}>
            <h2 className={styles["form-title"]}>Login</h2>
            <form
              onSubmit={handleSubmit}
              className={styles["register-form"]}
              id="login-form"
            >
              <div className={styles["form-group"]}>
                <label htmlFor="email" className={styles["label-main"]}>
                  <i className={icons["zmdi"] + " " + icons["zmdi-email"]} />
                </label>
                <input
                  type="text"
                  name="email"
                  id="your_email"
                  value={state.email}
                  onChange={handleInputChange}
                  placeholder="Your Email Address"
                />
              </div>
              <div className={styles["form-group"]}>
                <label htmlFor="your_pass" className={styles["label-main"]}>
                  <i className={icons["zmdi"] + " " + icons["zmdi-lock"]} />
                </label>
                <input
                  type="password"
                  name="password"
                  id="your_pass"
                  value={state.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                />
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className={styles["agree-term"]}
                />
                <label
                  htmlFor="remember-me"
                  className={
                    styles["label-agree-term"] + " " + styles["label-main"]
                  }
                >
                  <span>
                    <span />
                  </span>
                  Remember me
                </label>
              </div>
              <div
                className={styles["form-group"] + " " + styles["form-button"]}
              >
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className={styles["form-submit"]}
                  value="Log in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <div className={styles["login-form"]}>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </>
  );
}
