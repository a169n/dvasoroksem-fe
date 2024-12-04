import { useRef } from "react";
import { Header } from "@shared/ui/header";
import { HomeHeader } from "./ui/homeHeader";
import { Services } from "./ui/serviceAccordions";
import { WhyChooseUs } from "./ui/whyChooseUs";
import { Cases } from "./ui/cases";
import { Apply } from "./ui/cases/ui";
import { Videos } from "./ui/videos";
import { Certificates } from "./ui/certificatesSection";
import { Values } from "./ui/values";

export const Home = () => {
  const aboutRef = useRef(null);
  const casesRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactsRef = useRef(null);
  return (
    <div>
      <Header
        refs={{
          about: aboutRef,
          cases: casesRef,
          reviews: reviewsRef,
          contacts: contactsRef,
        }}
      />
      <div>
        <HomeHeader />
        <Services />

        <div ref={aboutRef} className="bg-[#232323] w-full h-[5%]">
          <WhyChooseUs />
        </div>

        <div ref={casesRef}>
          <Cases />
        </div>

        <Apply />

        <Videos />
        <div ref={reviewsRef}>
          <Certificates />
        </div>

        <Values />
      </div>
    </div>
  );
};
