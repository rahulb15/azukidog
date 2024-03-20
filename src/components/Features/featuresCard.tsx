"use client";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <>
     
      <section className="featured_card">
      <h1 className="py-5 text-center w-full" style={{width:"100%", paddingBottom:"50px"}}>Features</h1>

      <div className="container grid grid-cols-1 gap-12 px-4 mx-auto lg-16 md:grid-cols-2 xl:grid-cols-3 md:px-0" style={{gap:"38px"}}>
            
            {featuresData.map((feature) => (
              // <SingleFeature key={feature.id} feature={feature} />
              <motion.div className="home-hover"
                key={feature.id}
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.9 }}
                // transition={{ duration: 0.2 }}
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
