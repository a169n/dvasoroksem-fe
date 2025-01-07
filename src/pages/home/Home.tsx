import { Header } from "@shared/ui/header";
import { Services } from "./ui/serviceAccordions";
import { WhyChooseUs } from "./ui/whyChooseUs";
import { Cases } from "./ui/cases";
import { Apply } from "./ui/cases/ui";
import { Videos } from "./ui/videos";
import { Certificates } from "./ui/certificatesSection";
import { Values } from "./ui/values";
import { useLayoutContext } from "../../context/LayoutContext";
import { useEffect } from "react";
import HomeHeader from "./ui/homeHeader/HomeHeader";

export const Home = () => {
  const { refs } = useLayoutContext();
  useEffect(() => {
    const state = window.history.state;
    if (
      state &&
      state.scrollToSection &&
      refs[state.scrollToSection]?.current
    ) {
      setTimeout(() => {
        const sectionRef = refs[state.scrollToSection];
        if (sectionRef?.current) {
          window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: "smooth",
          });
        }
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [refs]);

  return (
    <div>
      <Header />
      <div>
        <HomeHeader />
        <Services />

        <div ref={refs.about} className="bg-[#232323] w-full h-[5%]">
          <WhyChooseUs />
        </div>

        <div ref={refs.cases}>
          <Cases />
        </div>

        <Apply />
        <Videos />

        <div ref={refs.reviews}>
          <Certificates />
        </div>

        <Values />
      </div>
    </div>
  );
};
