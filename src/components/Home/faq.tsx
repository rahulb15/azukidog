"use client";
import React, { useState } from "react";
import Image from "next/image";

function Question() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <>
      <section
        className="bg-blue-500 max-width-screen-md mx-auto p-5 mt-20 rounded-xl"
        style={{ marginBottom: "250px" }}
      >
        <div className="container">
        <h2 className="3xl:text-7xl mb-5 mt-5 text-center text-2xl font-bold text-white md:mb-0 md:mt-0 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          FAQ's
        </h2>
        <div className="mb-20"></div>
        <div
          className="faq-border mb-4 rounded-xl bg-transparent p-3 gradi_border middium-gradi_border"
          onClick={() => setIsOpen1(!isOpen1)}
        >
          <div className="flex items-center justify-between w-full px-4">
            <h3 className="faqh3">
              How do I Buy and Sell{" "}
              <span style={{ color: "#09e239" }}>$Azuki</span>?
            </h3>
            {/* <button
              className="text-xl font-bold text-white"
              onClick={() => setIsOpen1(!isOpen1)}
            > */}
              <button
              className={`text-xl font-bold text-white ${
                isOpen1 ? "image-rotate" : ""
              }`}
              onClick={() => setIsOpen1(!isOpen1)}
            >

              <Image
                src="/images/faq/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
          {isOpen1 && (
            <p className="text-white px-4">
              Azuki is a decentralized meme token that is fully community driven
              and fair launched. Azuki is a decentralized meme token that is
              fully community driven and fair launched. Azuki is a decentralized
              meme token that is fully community driven and fair launched. Azuki
              is a decentralized meme token that is fully community driven and
              fair launched.
            </p>
          )}
        </div>
        <div
          className="faq-border mb-4 rounded-xl bg-transparent p-3 gradi_border middium-gradi_border"
          onClick={() => setIsOpen2(!isOpen2)}
        >
          <div className="flex items-center justify-between w-full px-4">
            <h3 className="faqh3">
              Will <span style={{ color: "#09e239" }}>$Azuki</span> list on more
              CEX's?
            </h3>
            {/* <button
              className="text-xl font-bold text-white"
              onClick={() => setIsOpen2(!isOpen2)}
            > */}
               <button
              className={`text-xl font-bold text-white ${
                isOpen2 ? "image-rotate" : ""
              }`}
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <Image
                src="/images/faq/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
          {isOpen2 && (
            <p className="text-white px-4">
              Azuki is a decentralized meme token that is fully community driven
              and fair launched. Azuki is a decentralized meme token that is
              fully community driven and fair launched. Azuki is a decentralized
              meme token that is fully community driven and fair launched. Azuki
              is a decentralized meme token that is fully community driven and
              fair launched.
            </p>
          )}
        </div>
        <div
          className="faq-border mb-4 rounded-xl bg-transparent p-3 gradi_border middium-gradi_border"
          onClick={() => setIsOpen3(!isOpen3)}
        >
          <div className="flex items-center justify-between w-full px-4">
            <h3 className="faqh3">
              Is there a <span style={{ color: "#09e239" }}>$Azuki</span>{" "}
              whitepaper / roadmap?
            </h3>
            {/* <button
              className="text-xl font-bold text-white"
              onClick={() => setIsOpen3(!isOpen3)}
            > */}
               <button
              className={`text-xl font-bold text-white ${
                isOpen3 ? "image-rotate" : ""
              }`}
              onClick={() => setIsOpen3(!isOpen3)}
            >

           
              <Image
                src="/images/faq/arrow.svg"
                alt="arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
          {isOpen3 && (
            <p className="text-white px-4">
              Azuki is a decentralized meme token that is fully community driven
              and fair launched. Azuki is a decentralized meme token that is
              fully community driven and fair launched. Azuki is a decentralized
              meme token that is fully community driven and fair launched. Azuki
              is a decentralized meme token that is fully community driven and
              fair launched.
            </p>
          )}
        </div>
        </div>
      </section>
    </>
  );
}

export default Question;
