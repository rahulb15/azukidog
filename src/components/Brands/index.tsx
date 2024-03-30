"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandsData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-alabaster dark:border-y-strokedark dark:bg-brand border border-x-0 border-pink-400 py-11">
        <div className="container max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="inner-logo gap-7.5 lg:gap-12.5 xl:gap-29 grid grid-cols-3 items-center justify-center md:grid-cols-6 gap-x-2">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      <div className="mb-40 "></div>

      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
