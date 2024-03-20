"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
//import json file
import features from "./features.json";

const testimonialData: any[] = [
  {
    id: 1,
    name: "Ms Chaudhary",
    designation: "Hyderabad, Finance Professional",
    content:
      "5 years of association and no complaints. I have always been explained all Ws of the investments done which made me feel secure as an investor.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Mr Krishna JA",
    designation: "Software Professional, Hyderabad",
    content:
      "Emphasis on optimal risk management , ability to incorporate it into investment strategies and effective communication sets this team apart. Have been a happy customer for the past couple of years.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
];

console.log(testimonialData[0].id);

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                }}
                className="rounded-lg"
              ></div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <div className="relative z-10 px-20 py-20">
                    <div className="mb-8 flex items-center justify-center">
                      <Image
                        src={testimonialData[0]?.image}
                        alt={testimonialData[0]?.name}
                        style={{ height: "80px", width: "80px" }}
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      {testimonialData[0]?.name}
                    </h3>
                    <p className="mb-4 text-base font-medium leading-relaxed text-white dark:text-white">
                      {testimonialData[0]?.designation}
                    </p>
                    <p className="text-base font-medium leading-relaxed text-white dark:text-white">
                      {testimonialData[0]?.content}
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative z-10 px-20 py-20">
                    <div className="mb-8 flex items-center justify-center">
                      <Image
                        src={testimonialData[1]?.image}
                        alt={testimonialData[1]?.name}
                        style={{ height: "80px", width: "80px" }}
                        height={100}
                        width={100}
                      />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      {testimonialData[1]?.name}
                    </h3>
                    <p className="mb-4 text-base font-medium leading-relaxed text-white dark:text-white">
                      {testimonialData[1]?.designation}
                    </p>
                    <p className="text-base font-medium leading-relaxed text-white dark:text-white">
                      {testimonialData[1]?.content}
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
              {/* Live map with current location */}
              <ComposableMap>
                <Geographies geography={features} fill="#D6D6DA">
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#EAEAEC"
                        stroke="#D6D6DA"
                      />
                    ))
                  }
                </Geographies>
              </ComposableMap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
