import React, { useEffect } from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
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
