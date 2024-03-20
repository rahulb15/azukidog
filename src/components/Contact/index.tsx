"use client";
import NewsLatterBox from "./NewsLatterBox";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container"
      >
        {/* <div className="container"> */}

        <div className="-mx-4 flex flex-wrap">
          <div className="md:w-12/12 w-full px-4 xl:w-6/12">
            <div className="info-box mb-4 py-4">
              <span className="social-icon">
                <Image
                  src="/images/logo/location_icon.png"
                  alt="logo"
                  width={70}
                  height={20}
                />
              </span>
              <h3>Our Address</h3>
              <p>
                1300-273, 13th Floor, Burjuman Business Tower, Bur Dubai-UAE
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-6/12 xl:w-3/12">
            <div className="info-box mb-4 py-4">
              <span className="social-icon">
                <Image
                  src="/images/logo/email-icon2.png"
                  alt="logo"
                  width={70}
                  height={20}
                />
              </span>
              <h3>Email Us</h3>
              <p>customercare@theconfianceventures.com</p>
            </div>
          </div>
          <div className="w-full px-4 md:w-6/12 xl:w-3/12">
            <div className="info-box mb-4 py-4">
              <span className="social-icon">
                <Image
                  src="/images/logo/call-icon.png"
                  alt="logo"
                  width={80}
                  height={20}
                />
              </span>
              <h3>Call Us</h3>
              <p>+971 552512249</p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="md:w-12/12 mt-4 w-full px-4 xl:w-6/12">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="400"
                  id="gmap_canvas"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7216.993260015625!2d55.29359199044274!3d25.25387388209326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4364567289d9%3A0x7dc526f222a949a9!2sThe%20Burjuman%20Business%20Tower!5e0!3m2!1sen!2sin!4v1700649336451!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="md:w-12/12 mt-4 w-full px-4 xl:w-6/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-8 shadow-three dark:bg-gray-dark"
              data-wow-delay=".15s
              "
            >
              <form className="contact-form">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#fff] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-4">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#fff] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#fff] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-4">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#fff] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    className="w-full px-4"
                    style={{ justifyContent: "center", display: "flex" }}
                  >
                    <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
      </motion.div>
    </section>
  );
};

export default Contact;
