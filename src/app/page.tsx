"use client";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Bone3D from "@/components/Home/Bone3D";
import BuySazuki from "@/components/Home/BuySazuki";
import FeaturesCard from "@/components/Features/featuresCard";
import FollowAzuki from "@/components/Home/follow_azuki";
import WhyChooseUs from "@/components/Home/WhyChoose";
import AzukiPlushies from "@/components/Home/AzukiPlushies";
import Tokenship from "@/components/Home/tokenship";
import BuyEcko from "@/components/Home/BuyEcko";
import { Element } from 'react-scroll';

// import Slider from "@/components/Home/sliderSec";
import FAQ from "@/components/Home/faq";


// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "This is Home Page",
// };

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Element name="home">
      <Hero />
      </Element>
      <Brands />
      <Element name="about">
      <Features />
      </Element>
      {/* <Slider /> */}

      <Bone3D />

      <BuySazuki />
      <BuyEcko />

      <AzukiPlushies />

      <FeaturesCard />
      <Element name="tokenomics">
      <Tokenship />
      </Element>

      <WhyChooseUs />
      

      <FollowAzuki />
      <Element name="faq">
      <FAQ />
      </Element>

      {/* <AboutSectionTwo />
      <Brands /> */}
    
    </>
  );
}
