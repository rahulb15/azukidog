"use client";
import React from "react";
import { motion } from "framer-motion";

const BuySazuki = () => {
  return (
    <>
      <section className="buysazuki-sec py-16 relative" style={{background:"#000"}}>
        <div className="container mx-auto">
          <div className="flex items-top justify-between flex-wrap">
          <div className="basis-full md:basis-5/12" style={{marginTop:"13%"}}>
              <h1 className="pb-5 ">How  to  buy  <span className="third-color"> $AZUKI</span></h1>
              <p style={{textAlign:"left"}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur.</p>
              <motion.div
                      whileHover={{ scale: 1.04, x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
              <a href="#" className="btn-how-buy gradi_border gradi_border-full" style={{padding:"8px", width:"140px", display:"flex", justifyContent:"center"}}  >
                                           {/* <span className="z-10 relative" style={{fontSize:"16px"}}>  Buy Azuki </span></a> */}
                               
                      <span className="z-10 relative" style={{fontSize:"16px"}}>  Buy Azuki </span>
                    
                    </a>
                    </motion.div>

            </div>
            <div className="basis-full md:basis-7/12 flex justify-end">
              <img src="/images/myro_img/howtobuyazuki.svg" className="buy_sazukiimg" />
            </div>           
          </div>
        </div>
      </section>
    </>
  );
};

export default BuySazuki;
