import React from "react";
import { useHistory } from "react-router-dom";

const Head = () => {
  const nagivate = useHistory();
  return (
    <>
      <section className="head">
        <div className="container flexSB">
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
                nagivate.push("/");
              }}
            ></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
