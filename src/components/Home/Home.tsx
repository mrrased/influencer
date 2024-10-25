import React from "react";
import SecendPart from "./SecendPart/SecendPart";
import Hero from "../HeroPart/Hero";
import TopFooter from "../Footer/TopFooter/TopFooter";
import BottomFooter from "../Footer/BottomFooter/BottomFooter";
import Copyright from "../Footer/Copyright";
import HomeCampaigns from "../Influencer/HomeCampaigns/HomeCampaigns";
import ExcluPartnership from "../Influencer/HomeCampaigns/ExclusivePartnership/ExcluPartnership";
import TopPerforming from "../Influencer/HomeCampaigns/TopPerforming/TopPerforming";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeCampaigns />
      <ExcluPartnership />
      <TopPerforming />
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
