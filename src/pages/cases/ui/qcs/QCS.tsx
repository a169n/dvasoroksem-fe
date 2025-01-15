import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import QCSMainImage from "@assets/casePages/qcs.webp";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import DoubleCarousel from "@shared/ui/doubleCarousel/DoubleCarousel";
import { Stories } from "@shared/ui/stories";
import qcs1 from "@assets/casePages/qcs/qcs1.webp";
import qcs2 from "@assets/casePages/qcs/qcs2.webp";
import qcs3 from "@assets/casePages/qcs/qcs3.webp";
import qcs4 from "@assets/casePages/qcs/qcs4.webp";
import qcs5 from "@assets/casePages/qcs/qcs5.webp";
import qcs6 from "@assets/casePages/qcs/qcs6.webp";
import qcsUnder1 from "@assets/casePages/qcs/qcsUnder1.webp";
import qcsUnder2 from "@assets/casePages/qcs/qcsUnder2.webp";
import qcsUnder3 from "@assets/casePages/qcs/qcsUnder3.webp";
import qcsUnder4 from "@assets/casePages/qcs/qcsUnder4.webp";
import qcsUnder5 from "@assets/casePages/qcs/qcsUnder5.webp";
import qcsUnder6 from "@assets/casePages/qcs/qcsUnder6.webp";
import qcsStory1 from "@assets/casePages/qcs/qcsStory1.webp";
import qcsStory2 from "@assets/casePages/qcs/qcsStory2.webp";
import qcsStory3 from "@assets/casePages/qcs/qcsStory3.webp";
import qcsStory4 from "@assets/casePages/qcs/qcsStory4.webp";

import QcsData from "./ui/qcsData";
import { useEffect } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import QCSReel1 from "@assets/videos/qcs/qcs_reels_1.mp4";
import QCSReel2 from "@assets/videos/qcs/qcs_reels_2.mp4";
import QCSReel3 from "@assets/videos/qcs/qcs_reels_3.mp4";
import QCSStories1 from "@assets/videos/qcs/qcs_stories_1.mp4";
import QCSStories2 from "@assets/videos/qcs/qcs_stories_2.mp4";
import QCSStories3 from "@assets/videos/qcs/qcs_stories_3.mp4";
import QCSStories4 from "@assets/videos/qcs/qcs_stories_4.mp4";
import VideoCarousel from "@shared/ui/videoCarousel/VideoCarousel";
import { useLayoutContext } from "@src/context/LayoutContext";
import { useTranslation } from "react-i18next";

export const QCS = () => {
  const { t } = useTranslation();
  const { setMode } = useLayoutContext();
  useEffect(() => {
    setMode("light");
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    QCSReel1,
    QCSReel2,
    QCSReel3,
    QCSStories1,
    QCSStories2,
    QCSStories3,
    QCSStories4,
  ];

  return (
    <Box sx={{ backgroundColor: "#161616" }}>
      <Header />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <LazyLoadImage
          src={QCSMainImage}
          alt="qcs main image"
          width="100%"
          effect="blur"
        />
      </Box>
      <Description
        title={t("ourCases.qcs.pageSubtitle")}
        description={t("ourCases.qcs.pageDescription")}
      />
      <VideoCarousel videos={videos} />
      <DoubleCarousel
        imagesLine1={[qcs1, qcs2, qcs3, qcs4, qcs5, qcs6]}
        imagesLine2={[
          qcsUnder1,
          qcsUnder2,
          qcsUnder3,
          qcsUnder4,
          qcsUnder5,
          qcsUnder6,
        ]}
      />
      <Stories stories={[qcsStory1, qcsStory2, qcsStory3, qcsStory4]} />
      <QcsData />
      <Cases mode="case-page" />
    </Box>
  );
};
