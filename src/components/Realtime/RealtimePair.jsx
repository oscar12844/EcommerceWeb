import React from "react";
import Back from "../common/back/Back";
import PairSpeakerCard from "./PairSpeakerCard";
import "./realtimepair.css";
import Faq from "./Faq";

const Pricing = () => {
  return (
    <>
      <Back title="Choose The Native Speaker" />
      <section className="realtime padding">
        <div className="container grid">
          <PairSpeakerCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
