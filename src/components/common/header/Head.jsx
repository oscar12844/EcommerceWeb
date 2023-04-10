import React from "react";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const nagivate = useNavigate();
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
            <i
              className="fas fa-sign-out-alt icon"
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("userid");
                nagivate("/");
              }}
            ></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
