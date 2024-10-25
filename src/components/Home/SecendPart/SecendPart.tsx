// import { bg_secend } from "@/constants/image";
// import Image from "next/image";
import React from "react";
import BrandsIntro from "./BrandsIntro";
import HomeSearch from "./HomeSearch";
import Testimonials from "./Testimonials";

const SecendPart = () => {
  return (
    <div>
      {/* <div>
        <Image src={bg_secend} width={1440} height={2394} alt="bg Image" />
      </div> */}
      <div>
        <BrandsIntro />
        <HomeSearch />
        <Testimonials />
      </div>
    </div>
  );
};

export default SecendPart;
