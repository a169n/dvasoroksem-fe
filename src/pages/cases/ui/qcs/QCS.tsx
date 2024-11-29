import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import QCSMainImage from "@assets/casePages/qcs.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import DoubleCarousel from "@shared/ui/doubleCarousel/DoubleCarousel";
import { Stories } from "@shared/ui/stories";
import qcs1 from "@assets/casePages/qcs/qcs1.png";
import qcs2 from "@assets/casePages/qcs/qcs2.png";
import qcs3 from "@assets/casePages/qcs/qcs3.png";
import qcs4 from "@assets/casePages/qcs/qcs4.png";
import qcs5 from "@assets/casePages/qcs/qcs5.png";
import qcs6 from "@assets/casePages/qcs/qcs6.png";
import qcsUnder1 from "@assets/casePages/qcs/qcsUnder1.png";
import qcsUnder2 from "@assets/casePages/qcs/qcsUnder2.png";
import qcsUnder3 from "@assets/casePages/qcs/qcsUnder3.png";
import qcsUnder4 from "@assets/casePages/qcs/qcsUnder4.png";
import qcsUnder5 from "@assets/casePages/qcs/qcsUnder5.png";
import qcsUnder6 from "@assets/casePages/qcs/qcsUnder6.png";
import qcsStory1 from "@assets/casePages/qcs/qcsStory1.png";
import qcsStory2 from "@assets/casePages/qcs/qcsStory2.png";
import qcsStory3 from "@assets/casePages/qcs/qcsStory3.png";
import QcsData from "./ui/qcsData";
import { useEffect } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";

import QCSReel1 from "@assets/videos/qcs/qcs_reels_1.mov";
import QCSReel2 from "@assets/videos/qcs/qcs_reels_2.mp4";
import QCSReel3 from "@assets/videos/qcs/qcs_reels_3.mp4";
import QCSStories1 from "@assets/videos/qcs/qcs_stories_1.mov";
import QCSStories2 from "@assets/videos/qcs/qcs_stories_2.mov";
import QCSStories3 from "@assets/videos/qcs/qcs_stories_3.mov";
import QCSStories4 from "@assets/videos/qcs/qcs_stories_4.mov";
import VideoCarousel from "@shared/ui/videoCarousel/VideoCarousel";

export const QCS = () => {
  useEffect(() => {
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
      <Header mode="light" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <LazyLoadImage
          src={QCSMainImage}
          alt="qcs main image"
          width="100%"
          effect="blur"
        />
      </Box>
      <Description
        title="лидер в области бортового питания"
        description="QCS обеспечивает высочайшее качество услуг в авиационной отрасли, ежегодно обслуживая более 2 миллионов пассажиров. Мы занялись SEO-оптимизацией и узнаваемостью бренда, ведём Instagram QCS, где благодаря нашему контенту люди хотят работать в компании."
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
      <Stories stories={[qcsStory1, qcsStory2, qcsStory3]} />
      <QcsData />
      <Cases mode="case-page" />
    </Box>
  );
};
