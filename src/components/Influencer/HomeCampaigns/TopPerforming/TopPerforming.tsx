"use client";

import { Carousel } from "antd";
import Image from "next/image";
import React, { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";
import { tp1, tp2, tp3 } from "@/constants/image";
import { AnimatedGroup } from "@/components/core/AnimatedGroup";

const data = [
  {
    id: 1,
    img: tp1,
    subTitle: "Conversion rate optimization",
    title: "Best selling bag online market place",
    date: "Anil Viradiya - MARCH 9, 2024",
  },
  {
    id: 2,
    img: tp2,
    subTitle: "Conversion rate optimization",
    title: "Best selling bag online market place",
    date: "Anil Viradiya - MARCH 9, 2024",
  },
  {
    id: 3,
    img: tp3,
    subTitle: "Conversion rate optimization",
    title: "Best selling bag online market place",
    date: "Anil Viradiya - MARCH 9, 2024",
  },
  {
    id: 4,
    img: tp2,
    subTitle: "Conversion rate optimization",
    title: "Best selling bag online market place",
    date: "Anil Viradiya - MARCH 9, 2024",
  },
];

const TopPerforming = () => {
  const carouselRef = useRef<CarouselRef | null>(null);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };
  return (
    <div className="mt-[50px] mb-10">
      <div className="mb-[30px] flex items-center justify-between mx-4 2xl:mx-0">
        <div>
          <h2 className="text-black text-[24px] font-semibold leading-7 ">
            Top Performing Campaigns
          </h2>
        </div>
        <div className="space-x-4">
          <button
            onClick={handlePrev}
            className="px-3 py-0.5 border rounded-md"
          >
            <LeftOutlined style={{ fontSize: "16px", color: "#9B59B6" }} />
          </button>
          <button
            onClick={handleNext}
            className="px-3 py-0.5 border rounded-md"
          >
            <RightOutlined style={{ fontSize: "16px", color: "#9B59B6" }} />
          </button>
        </div>
      </div>
      <div>
        <AnimatedGroup>
          <Carousel
            autoplay
            ref={carouselRef}
            afterChange={onChange}
            responsive={[
              {
                breakpoint: 576,
                settings: { slidesToShow: 1 },
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 2 },
              },
              {
                breakpoint: 1020,
                settings: { slidesToShow: 2 },
              },
              {
                breakpoint: 9999,
                settings: { slidesToShow: 3 },
              },
            ]}
          >
            {data &&
              data.map((item, i) => {
                console.log(item);
                return (
                  <div key={i} className="px-2">
                    <div className="flex justify-center border rounded-md">
                      <div className="">
                        <div className="mb-1 mx-auto">
                          <div className="">
                            <Image
                              // fill
                              src={item.img}
                              alt="Blog Image"
                              priority
                              width={450}
                              height={200}
                              id="new-campaign-style"
                              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 10vw"
                              // sizes="(min-width: 808px) 20vw, 30vw"
                            />
                          </div>
                        </div>
                        {/* <div className="p-3">
                        <label
                          htmlFor=""
                          className="text-xs font-normal text-priceColor leading-4 bg-bgColor bg-opacity-10 px-2 py-0.5 rounded-full mt-2"
                        >
                          Conversion rate optimization
                        </label>
                        <div>
                          <Link
                            href={"/blog-details"}
                            className="text-xl text-textBlackColor leading-7 font-semibold truncate mt-3 mb-2 hover:text-textGreenColor"
                          >
                            Best selling bag online market place
                          </Link>
                        </div>
                        <ul>
                          <li className="text-[15px] font-medium leading-5 text-discountTextColor">
                            Anil Viradiya - MARCH 9, 2024
                          </li>
                        </ul>
                      </div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </AnimatedGroup>
      </div>
    </div>
  );
};

export default TopPerforming;
