import { useEffect } from "react";
import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CoffeeBoomMainImage from "@assets/casePages/coffee-boom.webp";
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
import { useLayoutContext } from "@src/context/LayoutContext";
import { Header } from "@shared/ui/header";
import { useTranslation } from "react-i18next";

export const CoffeeBoom = () => {
  const { setMode } = useLayoutContext();
  const { t } = useTranslation();
  useEffect(() => {
    setMode("light");
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
      <Header />
      <Box sx={{ minHeight: { xs: "200px", md: "600px" } }}>
        <LazyLoadImage
          src={CoffeeBoomMainImage}
          alt="coffee boom main image"
          width="100%"
          effect="blur"
        />
      </Box>
      <Description
        title={t("ourCases.coffeeBoom.page.title")}
        description={t("ourCases.coffeeBoom.page.description")}
      />

      <VideoCarousel videos={videos} />

      <CoffeeBoomData />

      <Cases mode="case-page" />
    </Box>
  );
};
