import React, { useEffect } from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";

const Home = () => {
  useEffect(() => {
    console.log(localStorage.getItem("user"));
    console.log(localStorage.getItem("userid"));
  }, []);

  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
    </>
  );
};

export default Home;
