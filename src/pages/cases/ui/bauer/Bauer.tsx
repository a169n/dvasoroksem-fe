import React, { useEffect } from "react";
import { Header } from "@shared/ui/header";
import { Box } from "@mui/material";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import BauerData from "./ui/bauerData";
import DoubleCarousel from "@shared/ui/doubleCarousel/DoubleCarousel";
import { Stories } from "@shared/ui/stories";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLayoutContext } from "@src/context/LayoutContext"; // Import context

// Import images
import BauerMainImage from "@assets/casePages/bauer.png";
import bauer1 from "@assets/casePages/bauer/bauer1.png";
import bauer2 from "@assets/casePages/bauer/bauer2.png";
import bauer3 from "@assets/casePages/bauer/bauer3.png";
import bauer4 from "@assets/casePages/bauer/bauer4.png";
import bauer5 from "@assets/casePages/bauer/bauer5.png";
import bauer6 from "@assets/casePages/bauer/bauer6.png";
import bauerUnder1 from "@assets/casePages/bauer/bauerUnder1.png";
import bauerUnder2 from "@assets/casePages/bauer/bauerUnder2.png";
import bauerUnder3 from "@assets/casePages/bauer/bauerUnder3.png";
import bauerUnder4 from "@assets/casePages/bauer/bauerUnder4.png";
import bauerUnder5 from "@assets/casePages/bauer/bauerUnder5.png";
import bauerUnder6 from "@assets/casePages/bauer/bauerUnder6.png";
import bauerStory1 from "@assets/casePages/bauer/bauerStory1.png";
import bauerStory2 from "@assets/casePages/bauer/bauerStory2.png";
import bauerStory3 from "@assets/casePages/bauer/bauerStory3.png";

import bauerReels1 from "@assets/videos/bauer/bauer_reels_1.mov";
import bauerReels2 from "@assets/videos/bauer/bauer_reels_2.mp4";
import bauerReels3 from "@assets/videos/bauer/bauer_reels_3.mov";
import bauerStories1 from "@assets/videos/bauer/bauer_stories_1.mov";
import bauerStories2 from "@assets/videos/bauer/bauer_stories_2.mov";
import VideoCarousel from "@shared/ui/videoCarousel/VideoCarousel";

export const Bauer: React.FC = () => {
  const { t } = useTranslation();
  const { setMode } = useLayoutContext();

  useEffect(() => {
    setMode("light");
    window.scrollTo(0, 0);
    return () => setMode("default");
  }, [setMode]);

  const videos = [
    bauerReels1,
    bauerReels2,
    bauerReels3,
    bauerStories1,
    bauerStories2,
  ];

  return (
    <Box sx={{ backgroundColor: "#161616" }}>
      <Header /> {/* No need to pass mode explicitly here */}
      <Box sx={{ minHeight: { xs: "200px", md: "800px" } }}>
        <LazyLoadImage
          src={BauerMainImage}
          alt="Bauer main image"
          width="100%"
          effect="blur"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title={t("ourCases.bauer.page.title")}
        description={t("ourCases.bauer.page.description")}
      />
      <VideoCarousel videos={videos} />
      <DoubleCarousel
        imagesLine1={[bauer1, bauer2, bauer3, bauer4, bauer5, bauer6]}
        imagesLine2={[
          bauerUnder1,
          bauerUnder2,
          bauerUnder3,
          bauerUnder4,
          bauerUnder5,
          bauerUnder6,
        ]}
      />
      <Stories stories={[bauerStory1, bauerStory2, bauerStory3]} />
      <BauerData />
      <Cases mode="case-page" />
    </Box>
  );
};
