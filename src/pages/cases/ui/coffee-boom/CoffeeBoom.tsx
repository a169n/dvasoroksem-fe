import { useEffect } from "react";
import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CoffeeBoomMainImage from "@assets/casePages/coffee-boom.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import CoffeeBoomData from "./ui/coffee-boomData";
import "react-lazy-load-image-component/src/effects/blur.css";

import coffeboomTikTok1 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_1.mp4";
import coffeboomTikTok2 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_2.mp4";
import coffeboomTikTok3 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_3.mp4";
import coffeboomTikTok4 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_4.mp4";
import coffeboomTikTok5 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_5.mp4";
import coffeboomTikTok6 from "@assets/videos/coffeeBoom/coffeeboom_tiktok_6.mp4";
import VideoCarousel from "@shared/ui/videoCarousel/VideoCarousel";

export const CoffeeBoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    coffeboomTikTok1,
    coffeboomTikTok2,
    coffeboomTikTok3,
    coffeboomTikTok4,
    coffeboomTikTok5,
    coffeboomTikTok6,
  ];

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

      <VideoCarousel videos={videos} />

      <CoffeeBoomData />

      <Cases mode="case-page" />
    </Box>
  );
};
