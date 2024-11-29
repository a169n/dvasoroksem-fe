import { useEffect } from "react";
import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CoffeeBoomMainImage from "@assets/casePages/coffee-boom.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import CoffeeBoomData from "./ui/coffee-boomData";
import { CoffeeBoomVideos } from "./ui/coffeeBoomVideos";
import "react-lazy-load-image-component/src/effects/blur.css";

export const CoffeeBoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#161616" }}>
      <Header mode="light" />
      <Box sx={{ minHeight: { xs: "200px", md: "600px" } }}>
        <LazyLoadImage
          src={CoffeeBoomMainImage}
          alt="coffee boom main image"
          width="100%"
          effect="blur"
        />
      </Box>
      <Description
        title="место, где становятся друзьями"
        description="Мы запустили TikTok для сети кофеен Coffee BOOM. Благодаря продуманной и актуальной
        контент-стратегии с нуля набрали 50 тысяч подписчиков."
      />
      <CoffeeBoomData />
      <CoffeeBoomVideos />
      <Cases mode="case-page" />
    </Box>
  );
};
