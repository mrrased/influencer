import { Hero_IMG, Subtract } from "@/constants/image";
import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div>
      <div className="relative flex justify-end">
        <Image src={Subtract} alt="Subtract" width={1340} height={1053} />
      </div>
      <div className="absolute top-0 left-0">
        <ul>
          <li className="text-6xl text-blue font-sans font-bold text-center mt-32">
            {`"Unlock Your Potential"`}
          </li>
          <li className="text-blue text-2xl text-center mx-64 mt-11">
            The all-in-one influencer marketing platform - connecting your brand
            to the right influencer with the right audience for maximum ROI.
          </li>
          <li className="mt-14">
            <Image src={Hero_IMG} alt="Home" width={1303} height={448} />
          </li>
          <ul className="flex items-center space-x-5 justify-center">
            <li>
              <button className="bg-blue flex items-center space-x-3 px-6 py-2 text-xl text-white rounded-md font-Poppins">
                <span>Become an Influencer</span>
                <BsArrowUpRight />
              </button>
            </li>
            <li>
              <button className="bg-blue flex items-center space-x-3 px-6 py-2 text-xl text-white rounded-md font-Poppins">
                <span>Join as Brand</span>
                <BsArrowUpRight />
              </button>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
