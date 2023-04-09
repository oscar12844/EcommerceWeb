import React from "react";
import { realtimespeaker } from "../../dummydata";

const PairSpeakerCard = () => {
  return (
    <>
      {realtimespeaker.map((val) => (
        <div className="items shadow">
          <h4>{val.name}</h4>
          <h1>
            <img src={val.cover} alt="" />
          </h1>
          <p>{val.desc}</p>
          <button className="outline-btn">START PAIR!</button>
        </div>
      ))}
    </>
  );
};

export default PairSpeakerCard;
