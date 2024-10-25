"use client";

import { testi } from "@/constants/image";
import { Carousel, ConfigProvider, Rate } from "antd";
import { CarouselRef } from "antd/es/carousel";
import Image from "next/image";
import { useRef } from "react";

const data = [
  {
    id: 1,
    img: testi,
    subTitle: "Conversion rate optimization",
    title: "Best selling bag online market place",
    date: "Anil Viradiya - MARCH 9, 2024",
  },
  {
    id: 2,
    img: testi,
    subTitle: "Conversion rate optimization",
    title: "Best selling bag online market place",
    date: "Anil Viradiya - MARCH 9, 2024",
  },
  {
    id: 4,
    img: testi,
    subTitle: "Conversion rate optimization",
    title: "Best selling bag online market place",
    date: "Anil Viradiya - MARCH 9, 2024",
  },
  {
    id: 3,
    img: testi,
    subTitle: "Conversion rate optimization",
    title: "Best selling bag online market place",
    date: "Anil Viradiya - MARCH 9, 2024",
  },
];

const Testimonials = () => {
  const carouselRef = useRef<CarouselRef | null>(null);
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  //   const handleNext = () => {
  //     if (carouselRef.current) {
  //       carouselRef.current.next();
  //     }
  //   };

  //   const handlePrev = () => {
  //     if (carouselRef.current) {
  //       carouselRef.current.prev();
  //     }
  //   };
  return (
    <div className="mt-64 mx-[100px]">
      <h3 className="text-4xl font-sans font-bold text-blue text-center">
        Inspiring Influence: Voices of Impact & Success
      </h3>

      <div className="mt-14">
        <div>
          <ConfigProvider
            theme={{
              components: {
                Carousel: {
                  arrowSize: 20,
                  colorText: "#red",
                },
              },
            }}
          >
            <Carousel
              ref={carouselRef}
              afterChange={onChange}
              arrows
              autoplay
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
                  settings: { slidesToShow: 1 },
                },
              ]}
            >
              {data &&
                data.map((itme, i) => {
                  return (
                    <div key={i} className="px-2">
                      <div className="flex justify-center border rounded-md">
                        <div className="flex items-center">
                          <div className="mb-1 mx-auto">
                            <div className="w-[360px] md:w-[390px] xl:w-[410px] 2xl:w-[440px]">
                              <Image
                                // fill
                                src={itme.img}
                                alt="Blog Image"
                                priority
                                width={450}
                                height={200}
                                id="testimonial-style"
                                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 10vw"
                                // sizes="(min-width: 808px) 20vw, 30vw"
                              />
                            </div>
                          </div>
                          <div className="p-3 w-[512px]">
                            <label
                              htmlFor=""
                              className="text-xl font-normal text-black leading-4 px-2 py-0.5 rounded-full mt-2"
                            >
                              I can confidently say that the Influencer Impact
                              Course has been a game-changer for my career. It
                              provided me with invaluable knowledge, practical
                              strategies, and the confidence to elevate my
                              influence to new heights.
                            </label>
                            <ul>
                              <li className="text-3xl font-bold mt-8 text-yellow">
                                Monica Deb
                              </li>

                              <li className="mt-3.5">
                                <ConfigProvider
                                  theme={{
                                    token: {
                                      fontSize: 18,
                                      lineWidth: 15,
                                      marginXS: 10,
                                      /* here is your global tokens */
                                    },
                                  }}
                                >
                                  <Rate
                                    allowHalf
                                    defaultValue={5}
                                    style={{
                                      fontSize: "24px",
                                      color: "#E3955B",
                                    }}
                                  />
                                </ConfigProvider>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Carousel>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
