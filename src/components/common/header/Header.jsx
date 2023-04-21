import { Link } from "react-router-dom";
import "./header.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { async } from "q";

const Header = () => {
  const nagivate = useNavigate();
  const [login, setLogin] = useState(false);
  const [delay, setDelay] = useState(false);
  const [user, setUser] = useState("");
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (localStorage.getItem("user")) {
      setLogin(true);
      user = user.length > 10 ? user.slice(0, 10) + "..." : user;
      setUser(user);
    } else {
      setLogin(false);
    }
    setDelay(false);
  }, [delay]);

  const [dialoglogin, setdialoglogin] = useState(false);

  const handleClickdialoglogin = () => {
    setdialoglogin(true);
  };

  const handledialogCloselogin = () => {
    setdialoglogin(false);
  };

  const [dialogsignout, setdialogsignout] = useState(false);

  const handleClickdialogsignout = () => {
    setdialogsignout(true);
  };

  const handledialogClosesignout = () => {
    setdialogsignout(false);
  };

  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div style={{ maxWidth: "100px", maxHeight: "100px" }}>
            <img src="./images/logo.webp" alt="logo" />
          </div>

          <div className="logo">
            <h1>Virtual Language Gate</h1>
            <span>Learn Virtually</span>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>

            {login ? (
              <>
                <i
                  className="fas fa-sign-out-alt icon"
                  onClick={handleClickdialogsignout}
                ></i>
                <Dialog
                  open={dialogsignout}
                  onClose={handledialogClosesignout}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Are you ready to signout?"}
                  </DialogTitle>
                  <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">
                      Make sure every action is done before you signout.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handledialogClosesignout} color="error">
                      No
                    </Button>
                    <Button
                      onClick={() => {
                        localStorage.removeItem("user");
                        localStorage.removeItem("userid");
                        handledialogClosesignout();
                        setDelay(true);
                        nagivate("/");
                      }}
                      color="success"
                      autoFocus
                    >
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>
              </>
            ) : (
              <>
                <i
                  className="fas fa-sign-in-alt icon"
                  onClick={handleClickdialoglogin}
                ></i>
                {dialoglogin && (
                  <Dialog
                    open={dialoglogin}
                    onClose={handledialogCloselogin}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
                    <DialogContent dividers>
                      <DialogContentText id="alert-dialog-description">
                        You will be redirected to login page.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handledialogCloselogin} color="error">
                        No
                      </Button>
                      <Button
                        onClick={() => {
                          nagivate("/login");
                        }}
                        color="success"
                        autoFocus
                      >
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <header>
        <nav className="flexSB">
          <ul className="flexSB">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>

            {login ? (
              <>
                <li>
                  <Link to="/mycourse">MyCourse</Link>
                </li>
                <li>
                  <Link to="/realtimepair">Real-Time Pair</Link>
                </li>
              </>
            ) : null}

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start">
            {login ? (
              <div className="button">Welcome, {user}</div>
            ) : (
              <div className="button">Join VLG Now!</div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
