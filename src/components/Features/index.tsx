"use client";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <>
      <motion.section
        id="features"
        className="py-16 md:py-20 lg:py-28 items-center flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <div className="flex items-center flex-wrap">
            <div className="basis-12/12 md:basis-1/2">
              <img src="/images/logo/azuki-brand.png" />
            </div>

            <div className="basis-12/12 md:basis-1/2 text-padding">
            <h1 className="pb-5 ">About <span className="third-color"> $AZUKI</span></h1>
            <p>
            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br/><br/>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ty
            </p>
            </div>
        </div>
        </div>
      </motion.section>
      {/* <div className="mb-40"></div> */}
      
      {/* <div className="container grid grid-cols-1 gap-8 px-4 mx-auto lg-16 md:grid-cols-2 xl:grid-cols-4 md:px-0" style={{gap:"15px"}}>
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
          </div> */}
    </>
  );
};

export default Features;
