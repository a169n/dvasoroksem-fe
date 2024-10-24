import { HomeHeader } from "./ui/homeHeader";
import { Services } from "./ui/serviceAccordions";
import { Cases } from "./ui/Cases";

export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Services />
      <Cases/>
    </div>
  );
};
