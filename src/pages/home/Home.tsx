import { HomeHeader } from "./ui/homeHeader";
import { Services } from "./ui/serviceAccordions";
import { WhyChooseUs } from "./ui/whyChooseUs";
import { Cases } from "./ui/cases";
import { Videos } from "./ui/videos";
import { Certificates } from "./ui/certificatesSection";
import { Header } from "@shared/ui/header";
export const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <HomeHeader />
        <Services />
        <div className="bg-[#232323] w-full h-[5%]"></div>
        <WhyChooseUs />
        <Cases />
        <Videos />
        <div>
          <Certificates />
        </div>
      </div>
    </div>
  );
};
