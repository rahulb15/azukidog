"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <>
      {/* <section
        id="home"
        className="relative bg-cover bg-center bg-no-repeat"
      >
        <div className="container flex items-center justify-center w-full h-screen">
          <Image
            src="/images/landing/con_ban1.png"
            alt="hero"
            width={1920}
            height={1080}

          />
        </div>
      </section> */}

      {/* <motion.div
        id="home"
        className="relative bg-cover bg-center bg-no-repeat h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
      >
        <div className="container h-full flex items-center justify-center">
          <Image
            src="/images/landing/con_ban.png"
            alt="hero"
            layout="fill"
          />
        
        </div>
      </motion.div> */}

      <AnimatePresence initial={true}>
        <motion.div
          id="home"
          className="relative py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key="hero"
        >
          <div className="container flex h-full items-center justify-center">
            <div className="flex w-full flex-row flex-wrap">
              <div className="basis-12/12 md:basis-1/2">
                <Image
                  src="/images/myro_img/dog_img.png"
                  alt="logo"
                  width={800}
                  height={100}
                  className="home-img"
                />
              </div>
              <div className="mid-sec-align basis-1/2 md:basis-1/4">
                <Image
                  src="/images/myro_img/azuki_logotext.svg"
                  alt="logo"
                  width={367}
                  height={100}
                  className="logo-text hidden dark:block"
                />

                <h1 className="my-10">
                  Meet <span className="seconday-color">Kadena</span> Favorite
                  Dog
                </h1>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="btn-div flex gap-x-5"
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src="/images/myro_img/paw_img.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="logo-text hidden dark:block"
                  />
                </motion.div>
              </div>
              <div className="mid-sec-align basis-1/2 md:basis-1/4">
                {/* <motion.div
                   style={{
                    width: 150,
                    height: 150,
                    borderRadius: 30,
                    backgroundColor: "#fff",
                    opacity: 0.7,
                }}
                drag
                whileHover={{ opacity: 1 }}
                whileTap={{
                    opacity: 1,
                    scale: 1.05,
                    boxShadow: "0px 5px 8px #222",
                }}
                whileDrag={{ scale: 1.1, boxShadow: "0px 10px 16px #222" }}
                transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/images/myro_img/bone_img.svg"
                    alt="logo"
                    width={200}
                    height={100}
                    className="logo-text hidden dark:block"
                  />
                </motion.div> */}
                <motion.img
                  src="/images/myro_img/bone_img.svg"
                  alt="logo"
                  width={200}
                  height={100}
                  // className="logo-text hidden dark:block"
                  whileHover={{ scale: 1.2 }}
                  // whileTap={{ scale: 0.9 }}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.5}
                  className="logo-text hidden dark:block"

                />

                <p className="my-10">
                  Azuki the dog: Named after{" "}
                  <span className="seconday-color">Kadena</span> <br />
                  Loremipsum dog Azuki
                  <br />
                </p>
                <div className="btn-div flex gap-x-5">
                  {/* <a href="#" className="primary-btn border-gradient">Buy on ecko<span className="third-color" style={{color:"#DA00C4"}}>DEX</span></a> */}
                  {/* <button className=" btn-buy">
                    Buy on ecko
                    <span className="third-color" style={{ color: "#DA00C4" }}>
                      DEX
                    </span>
                  </button> */}
                   <motion.div
                      className="flex items-center justify-center py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <button className="btn-nav gradi_border gradi_border-full">
                        <span
                          className="relative z-10"
                          // onClick={() => setIsModalOpen(true)}
                        >
                            Buy on ecko
                    <span className="third-color" style={{ color: "#DA00C4" }}>
                      DEX
                    </span>
                        </span>
                      </button>
                    </motion.div>
                  {/* <a href="#" className="secondary-color-bg primary-btn">
                    Learn More{" "}
                  </a> */}
                  <button className="btn-ln-mo">Learn More </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Hero;
