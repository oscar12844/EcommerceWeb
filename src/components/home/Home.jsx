import React from "react";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Testimonal from "./testimonal/Testimonal";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <HAbout />
      <AboutCard />
      <Testimonal />
      <Faq />
    </>
  );
};

export default Home;
