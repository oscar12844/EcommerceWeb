import React from "react";
import Back from "../common/back/Back";
import PairSpeakerCard from "./PairSpeakerCard";
import "./realtimepair.css";


const Pricing = () => {
  return (
    <>
      <Back title="Choose The Native Speaker" />
      <section className="realtime padding">
        <div className="container grid">
          <PairSpeakerCard />
        </div>
      </section>
    </>
  );
};

export default Pricing;
