import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./css/loginStyle.module.css";
import icons from "./fonts/material-icon/css/material-design-iconic-font.min.module.css";
import GoogleIcon from "@mui/icons-material/Google";
import Login_logo from "./images/login.png";
import Button from "@mui/material/Button";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CryptoJS from "crypto-js";

const firebaseConfig = {
  apiKey: "AIzaSyAlDq8mw4rIOvmN621OGQOgrQokyAilW1k",
  authDomain: "comp4121-ecommerce.firebaseapp.com",
  databaseURL:
    "https://comp4121-ecommerce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comp4121-ecommerce",
  storageBucket: "comp4121-ecommerce.appspot.com",
  messagingSenderId: "708889910845",
  appId: "1:708889910845:web:dfccf9c90dc5a85254d454",
  measurementId: "G-YKDH3LDWBL",
};

export default function Login() {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Realtime Database and get a reference to the service
    const dbRef = ref(getDatabase(app));
    console.log("connected");

    const auth = getAuth();
    const hashedEmail = CryptoJS.SHA256(state.email).toString(CryptoJS.enc.Hex);
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        get(child(dbRef, "users/" + hashedEmail))
          .then((snapshot) => {
            console.log(state.password, state.email);
            if (
              snapshot.exists() &&
              snapshot.val().password === state.password
            ) {
              console.log("LOGIN SUCCESSFUL");
              localStorage.setItem("user", snapshot.val().username);
              localStorage.setItem("userid", hashedEmail);
              console.log(localStorage.getItem("user"));
              console.log(localStorage.getItem("userid"));
              navigate("/");
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
            <div className={styles["social-login"]}>
              <span className={styles["social-label"]}>Or login with</span>
              <ul className={styles.socials}>
                <li>
                  <Button color="error">
                    <GoogleIcon />
                  </Button>
                </li>
              </ul>
            </div>
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
