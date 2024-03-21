"use client";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <>

{/* <motion.div
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
                          onClick={() => setIsModalOpen(true)}
                        >
                          Connect Wallet
                        </span>
                      </button>
                    </motion.div> */}
     
      <section className="featured_card">
      <h1 className="py-5 text-center w-full" style={{width:"100%", paddingBottom:"50px"}}>Features</h1>

      <div className="container grid grid-cols-1 gap-12 px-4 mx-auto lg-16 md:grid-cols-2 xl:grid-cols-3 md:px-0" style={{gap:"38px"}}>
            
            {featuresData.map((feature) => (
              // <SingleFeature key={feature.id} feature={feature} />
              <motion.div className="home-hover gradi_border"
                key={feature.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <SingleFeature feature={feature} />
              </motion.div>
            ))}
          </div>
          </section>
    </>
  );
};

export default Features;
