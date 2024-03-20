"use client";
import NewsLatterBox from "./NewsLatterBox";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
      style={{ background: "#f6f9fe" }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container"
      >
        {/* <div className="container"> */}
        {/* <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div> */}

        <div className="our-journey">
          <h4 className="my-3">Realize the Need of Financial Freedom</h4>

          <b> Ways to Attain </b>
          <ul
            style={{
              listStyle: "outside",
              marginLeft: "20px",
              padding: "20px 0",
            }}
          >
            <li>
              Do it yourself a.k.a DIY
              <ul
                style={{
                  listStyle: "circle",
                  marginLeft: "20px",
                  padding: "20px 0",
                }}
              >
                <li>
                  Time Availability – Outside regular job hours there is less
                  time available for individuals to put across for investment
                  and understanding the same inside-out.
                </li>
                <li>
                  Self Interest – Sometimes due to lack of interest folks are
                  not able to focus on &quot;Financial Aspect&quot;. In order to
                  DIY everyone needs to have the focus to read &amp; practice
                  various investment strategies for respective personality. This
                  comes through high degree of financial knowledge &amp; they
                  putting the knowledge to work.{" "}
                </li>
                <li>
                  Lack of Confidence to take the plunge – Even after going
                  through understanding of the financial markets, &gt;90% of the
                  folks are not able to gather courage to go ahead and invest.
                  Mostly people believe in going for professional advice which
                  is by design created to being average. Thus most of results in
                  average returns due to management fees, as fees &amp;
                  performance are not tied together.
                </li>
              </ul>
            </li>
            <li>Trusting people who have done it themselves</li>
            <li>Believe in people whom you have Trust</li>
          </ul>
        </div>

        <div
          className="w-full px-4"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <Link href="/signup">
            <button
              className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
              style={{ width: "300px" }}
            >
              Get Started
            </button>
          </Link>
        </div>
        {/* </div> */}
      </motion.div>
    </section>
  );
};

export default Contact;
