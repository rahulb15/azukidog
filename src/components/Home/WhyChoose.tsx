"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
const Features = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <>
      <section
        id="features"
        className="flex	items-center bg-center whychoose"
        style={{
          backgroundImage: "url('/images/myro_img/whyus_bg.png')",
          minHeight: "1000px",
        }}
      >
        <div className="container mx-auto">
          <h1 className="py-5 text-center" style={{ padding: "50px 0" }}>
            Why Choose <span className="third-color"> $AZUKI</span>
          </h1>

          <div className="flex basis-full justify-center py-6">
            <p className="max-w-xs">
              AZUKI is a viral narrative based on
              <span className="third-color"> Kadena</span> Co-Founder Raj
              Gokal’s pet dog, becoming a staple in the Solana memecoin space.
            </p>
          </div>
          <div className="flex justify-between why-us-flex">
            <div className="flex basis-full items-center justify-center md:basis-1/3">
              <p className="flex max-w-xs	items-center	">
                AZUKI will be more than just a memecoin, featuring several
                unique use cases and utilities that are beneficial to the long
                term growth of the Solana Ecosystem.
              </p>
            </div>

            <div className="flex basis-full items-center justify-center md:basis-1/3">
              <div className="max-w-xs	flex	items-center	">
              <img src="/images/logo/azuki-brand.png" width={'300px'} />
              </div>
              {/* <motion.div
                style={{
                  width: 400,
                  height: 400,
                  display: "flex",
                  placeItems: "center",
                  placeContent: "center",
                  borderRadius: 30,
                  backgroundColor: "transparent",
                  perspective: 400
              }}
                onMouseMove={handleMouse}
              >
                <motion.img
                  src="/images/logo/azuki-brand.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    rotateX,
                    rotateY
                }}
                />

              </motion.div> */}
            </div>
            <div className="flex basis-full items-center justify-center md:basis-1/3">
              <p className="flex	max-w-xs	items-center	">
                The AZUKI movement is like no other on the Solana blockchain,
                bringing dog lovers from all around the crypto space and uniting
                them into one.
              </p>
            </div>
          </div>
          <div className="flex basis-full justify-center py-6">
            <p className="max-w-xs		">
              With the Solana blockchain and coin making a huge return over the
              last few months, it&apos;s time for AZUKI to come in and set the
              stardard for memecoins on Solana. There&apos;s a new dog in town.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
