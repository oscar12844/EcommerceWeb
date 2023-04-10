import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

const Head = () => {
  const nagivate = useNavigate();
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLogin(true);
    }
  }, [login]);

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
          <div style={{ maxWidth: "120px" }}>
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
                  <DialogContent>
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
                        setLogin(false);
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
                <Dialog
                  open={dialoglogin}
                  onClose={handledialogCloselogin}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle>
                  <DialogContent>
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
