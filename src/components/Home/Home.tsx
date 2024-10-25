import React from "react";
import SecendPart from "./SecendPart/SecendPart";
import Hero from "../HeroPart/Hero";
import TopFooter from "../Footer/TopFooter/TopFooter";
import BottomFooter from "../Footer/BottomFooter/BottomFooter";
import Copyright from "../Footer/Copyright";

const Home = () => {
  return (
    <div>
      <Hero />
      <div id="home-secendPart">
        <SecendPart />
        <div id="footer-part">
          <TopFooter />
          <BottomFooter />
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Home;
