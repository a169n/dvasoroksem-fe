import { HomeHeader } from "./ui/homeHeader";
import { Services } from "./ui/serviceAccordions";
import { WhyChooseUs } from "./ui/whyChooseUs";

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Services />
      <div
        style={{ backgroundColor: "#232323", width: "100%", height: "5%" }}
      ></div>
      <WhyChooseUs />
    </div>
  );
};
