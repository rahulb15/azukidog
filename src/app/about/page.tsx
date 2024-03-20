import AboutSectionOne from "@/components/About/AboutSectionOne";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About page description",
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
