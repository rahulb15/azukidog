"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const [openDiv, setOpenDiv] = useState(1);

  const handleToggle = (index: number) => {
    setOpenDiv(index);
  };

  console.log(openDiv, "index");

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  // <section className="py-16 md:py-20 lg:py-28">
  // <div className="container">
  //   <div className="-mx-4 flex flex-wrap items-center">
  //     <div className="w-full px-4 lg:w-1/2">
  //       <div
  //         className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
  //         data-wow-delay=".15s"
  //         style={{ position: "relative" }}
  //       >
  //         <div
  //           style={{
  //             position: "absolute",
  //             top: 0,
  //             left: 0,
  //             width: "100%",
  //             height: "100%",
  //             backgroundColor: "rgba(0, 0, 0, 0.5)",
  //             zIndex: 1,
  //           }}
  //           className="rounded-lg"
  //         ></div>

  return (
    <section id="about" className="mt-16 pt-16 md:mt-20 md:pt-20 lg:mt-28" style={{minHeight:"520px"}}>

<motion.div initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
        className="container"
      >


      {/* <div className="container"> */}
        <div className="border-b border-body-color/[.15] dark:border-white/[.15] ">
          <div className="flex flex-col items-start lg:flex-row lg:items-start">
            <div className="w-full lg:w-1/3 mt-3">
              <div className="sticky top-0">
                <div className="mb-8">
                  <span className="mb-5 block flex items-center text-3xl font-bold dark:text-white">
                    Value Investing
                  </span>
                </div>
                <div className="flex flex-col">
                  <div
                    className={`mb-5 cursor-pointer ${openDiv === 1 ? "activeNav" : ""}`}
                    onClick={() => handleToggle(1)}
                  >
                    <h3 className="dark:text-primary-light text-lg font-bold text-primary">
                      Think like an Owner
                    </h3>
                  </div>
                  <div
                    className={`mb-5 cursor-pointer ${openDiv === 2 ? "activeNav" : ""}`}
                    onClick={() => handleToggle(2)}
                  >
                    <h3 className="dark:text-primary-light text-lg font-bold text-primary">
                      Margin of Safety
                    </h3>
                  </div>
                  <div
                    className={`mb-5 cursor-pointer ${openDiv === 3 ? "activeNav" : ""}`}
                    onClick={() => handleToggle(3)}
                  >
                    <h3 className="dark:text-primary-light text-lg font-bold text-primary">
                      Mr. Market
                    </h3>
                  </div>
                  <div
                    className={`mb-5 cursor-pointer ${openDiv === 4 ? "activeNav" : ""}`}
                    onClick={() => handleToggle(4)}
                  >
                    <h3 className="dark:text-primary-light text-lg font-bold text-primary">
                    &quot;Price&quot; and &quot;Value&quot;
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 mt-5">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${openDiv === 1 ? "active" : ""}`}
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabIndex={0}
                >
                  {/* <div className="mx-auto max-w-[500px] text-center lg:m-0"> */}
                  <div className="flex flex-col lg:flex-row">
                    <div
                      className="col-md-7 mx-auto mb-12"
                      style={{ flex: "1" }}
                    >
                      <h3 className="text-2xl font-bold dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl mb-3">
                        Think like an Owner
                      </h3>
                      <p className="mb-4 text-base font-medium leading-relaxed dark:text-white">
                      &quot;Owner&apos;s mindset&quot; was one of the key mindsets that the
                        father of <b>value investing,</b>
                        Benjamin Graham, proposed. When you purchase a stock,
                        you purchase an &quot;ownership interest&quot; in the underlying
                        business. That may seem self-evident, but many people
                        buy stocks thinking only of the ticker price and the
                        paper to be traded in the marketplace.They don&apos;t think
                        about the underlying business.
                      </p>
                      <p className="text-base font-medium leading-relaxed dark:text-white">
                        <b>Thinking like an owner</b> would simplify matters and
                        provide the much-needed mental discipline to apply
                        business principles to your investing.
                      </p>
                    </div>
                    <div className="col-md-5">
                      <img
                        className="mx-auto"
                        style={{ height: "300px", width: "300px" }}
                        src="https://equityintelligence.com/images/own-equty.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${openDiv === 2 ? "active" : ""}`}
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabIndex={0}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div
                      className="col-md-7 mx-auto mb-12"
                      style={{ flex: "1" }}
                    >
                      <h3 className="text-2xl font-bold dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl mb-3">
                        Margin of Safety
                      </h3>
                      <p className="mb-4 text-base font-medium leading-relaxed dark:text-white">
                        One of Graham&apos;s most famous ideas, &quot;Margin of Safety&quot;,
                        is{" "}
                        <b>
                          the gap between the price paid and the inherent value.
                        </b>{" "}
                        Investments can go wrong at times, leading to losses.
                        The concept of the &quot;Margin of Safety&quot; mitigates the
                        chances of incurring catastrophic losses. Investing,
                        inherently, is a form of betting on an uncertain and
                        unpredictable future. However smart an investor or
                        analyst may be, he or she is bound to make mistakes.
                        Miscalculations are a common feature of the research
                        exercise.
                        <b>
                          {" "}
                          The higher the margin of safety, the lower the chances
                          for losses.
                        </b>
                      </p>
                      {/* <p
                        className="text-base font-medium leading-relaxed dark:text-white"
                      >
                        <b>Thinking like an owner</b> would simplify matters and
                        provide the much-needed mental discipline to apply
                        business principles to your investing.
                      </p> */}
                    </div>
                    <div className="col-md-5">
                      <img
                        className="mx-auto"
                        style={{ height: "300px", width: "300px" }}
                        src="https://equityintelligence.com/images/margin-1.png"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${openDiv === 3 ? "active" : ""}`}
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabIndex={0}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div
                      className="col-md-7 mx-auto mb-12"
                      style={{ flex: "1" }}
                    >
                      <h3 className="text-2xl font-bold dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl mb-3">
                      &quot;Mr. Market&quot; and his vagaries
                      </h3>
                      <p className="mb-4 text-base font-medium leading-relaxed dark:text-white">
                        Another famous contribution of Benjamin Graham to the
                        literature of value investing is the idea of &quot;Mr.
                        Market&quot; - an emotional and irrational partner who offers
                        to either buy you out or sell you his share every day.
                      </p>
                      <p className="text-base font-medium leading-relaxed dark:text-white">
                      &quot;Mr. Market -- he&apos;s kind of a drunken psycho. Some days
                        he gets very enthused, some days he gets very depressed.
                        And{" "}
                        <b>
                          when he gets really enthused, you sell to him, and if
                          he gets depressed, you buy from him.
                        </b>{" "}
                        &quot;There&apos;s no moral taint attached to that&quot; - Warren
                        Buffet
                      </p>
                    </div>
                    <div className="col-md-5">
                      <img
                        className="mx-auto"
                        style={{ height: "300px", width: "300px" }}
                        src="https://equityintelligence.com/images/mr-market.png"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${openDiv === 4 ? "active" : ""}`}
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabIndex={0}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div
                      className="col-md-7 mx-auto mb-12"
                      style={{ flex: "1" }}
                    >
                      <h3 className="text-2xl font-bold dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl mb-3">
                      &quot;Price&quot; and &quot;Value&quot; are not the same
                      </h3>
                      <p className="mb-4 text-base font-medium leading-relaxed dark:text-white">
                      &quot;Mr. Market&apos;s job is to provide you with prices; your
                        job is to decide whether it is to your advantage to act
                        on them. You do not have to trade with him just because
                        he constantly begs you to&quot; - Benjamin Graham
                      </p>
                      <p className="text-base font-medium leading-relaxed dark:text-white">
                        <b>
                          The price that one encounters on the stock market is
                          not the same as the &quot;Value&quot; of the underlying
                          business.
                        </b>{" "}
                        Knowing this distinction is critical for sound
                        investing. Value is a <b>rational judgement</b> about
                        the real business that you, as the stock owner, get to
                        own on the purchase. All the future earnings make up the
                        &quot;Value&quot;. A value investor always compares the &quot;value&quot; of
                        various businesses versus the &quot;price&quot; traded in the
                        marketplace - assessing the discount or premium of each.
                      </p>
                    </div>
                    <div className="col-md-5">
                      <img
                        className="mx-auto"
                        style={{ height: "300px", width: "300px" }}
                        src="https://equityintelligence.com/images/service-two.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSectionOne;
