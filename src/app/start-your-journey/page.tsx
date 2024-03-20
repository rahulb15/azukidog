// import Contact from "@/components/Contact";
import Journey from "@/components/Journey";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact page description",
};

const StartJourney = () => {
  return (
    <>
      <Journey />
    </>
  );
};

export default StartJourney;
