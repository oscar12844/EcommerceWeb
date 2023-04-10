import React from "react";
import Heading from "../common/heading/Heading";
import "./writingnote.css";
import { writingnotes } from "../../dummydata";

const Writingnote = () => {
  return (
    <>
      <section className="writingnote1">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/writingnote.webp" alt="" />
          </div>
          <div className="right row">
            <Heading title="English Writing Notes" />
            <div className="items">
              {writingnotes.map((val) => {
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

export default Writingnote;
