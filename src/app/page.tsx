import AboutSectionTwo from "@/components/About/AboutSectionTwo";
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
// import Slider from "@/components/Home/sliderSec";
import FAQ from "@/components/Home/faq";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is Home Page",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Features />
      {/* <Slider /> */}

      <Bone3D />

      <BuySazuki />
      <AzukiPlushies />

      <FeaturesCard />
      <Tokenship />

      <WhyChooseUs />
      

      <FollowAzuki />
      <FAQ />

      {/* <AboutSectionTwo />
      <Brands /> */}
    
    </>
  );
}
