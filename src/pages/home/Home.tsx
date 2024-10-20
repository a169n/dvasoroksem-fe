import { HomeHeader } from "./ui/homeHeader";
import { Services } from "./ui/serviceAccordions";
import { WhyChooseUs } from "./ui/whyChooseUs";
import { Cases } from "./ui/cases";
import { Certificates } from "./ui/Certificates";
import { Videos } from "./ui/videos";
export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Services />
      <div
        style={{ backgroundColor: "#232323", width: "100%", height: "5%" }}
      ></div>
      <WhyChooseUs />
      <Cases />
      <Videos />
      <Certificates />
    </div>
  );
};
