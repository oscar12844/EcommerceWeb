import React from "react";
import Heading from "../common/heading/Heading";
import "./readingnote.css";
import { readingnotes } from "../../dummydata";

const Readingnote = () => {
  return (
    <>
      <section className="readingnote1">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/readingnote.jpg" alt="" />
          </div>
          <div className="right row">
            <Heading title="English Reading Notes" />
            <div className="items">
              {readingnotes.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="text">
                      <h2>{val.name}</h2>
                      <p>{val.desc}</p>
                    </div>
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Readingnote;
