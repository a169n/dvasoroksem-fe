import { useEffect } from "react";
import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import EverestMainImage from "@assets/casePages/everest.webp";
import { Description } from "@shared/ui/description";
import { Cases } from "@src/pages/home/ui/cases";
import DoubleCarousel from "@shared/ui/doubleCarousel/DoubleCarousel";
import { Stories } from "@shared/ui/stories";
import EverestData from "./ui/everestData";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import images
import everest1 from "@assets/casePages/everest/everest1.webp";
import everest2 from "@assets/casePages/everest/everest2.webp";
import everest3 from "@assets/casePages/everest/everest3.webp";
import everest4 from "@assets/casePages/everest/everest4.webp";
import everest5 from "@assets/casePages/everest/everest5.webp";
import everest6 from "@assets/casePages/everest/everest6.webp";
import everest7 from "@assets/casePages/everest/everest7.webp";
import everestUnder1 from "@assets/casePages/everest/everestUnder1.webp";
import everestUnder2 from "@assets/casePages/everest/everestUnder2.webp";
import everestUnder3 from "@assets/casePages/everest/everestUnder3.webp";
import everestUnder4 from "@assets/casePages/everest/everestUnder4.webp";
import everestUnder5 from "@assets/casePages/everest/everestUnder5.webp";
import everestUnder6 from "@assets/casePages/everest/everestUnder6.webp";
import everestUnder7 from "@assets/casePages/everest/everestUnder7.webp";
import everestStory1 from "@assets/casePages/everest/everestStory1.webp";
import everestStory2 from "@assets/casePages/everest/everestStory2.webp";
import everestStory3 from "@assets/casePages/everest/everestStory3.webp";

// Import videos
import everestReels1 from "@assets/videos/everest/everest_reels_1.mov";
import everestReels2 from "@assets/videos/everest/everest_reels_2.mov";
import everestReels3 from "@assets/videos/everest/everest_reels_3.mp4";
import everestStories1 from "@assets/videos/everest/everest_stories_1.mov";
import everestStories2 from "@assets/videos/everest/everest_stories_2.mov";
import everestStories3 from "@assets/videos/everest/everest_stories_3.mov";
import VideoCarousel from "@shared/ui/videoCarousel/VideoCarousel";
import { useLayoutContext } from "@src/context/LayoutContext";
import { useTranslation } from "react-i18next";

export const Everest = () => {
  const { setMode } = useLayoutContext();
  const { t } = useTranslation();
  useEffect(() => {
    setMode("dark");
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    everestReels1,
    everestReels2,
    everestReels3,
    everestStories1,
    everestStories2,
    everestStories3,
  ];

  return (
    <>
      <Header />
      <Box sx={{ minHeight: { xs: "200px", md: "600px" } }}>
        <LazyLoadImage
          src={EverestMainImage}
          alt="everest main image"
          width="100%"
          effect="blur"
        />
      </Box>
      <Description
        title={t("ourCases.everest.page.title")}
        description={t("ourCases.everest.page.description")}
      />
      <VideoCarousel videos={videos} />
      <DoubleCarousel
        imagesLine1={[
          everest1,
          everest2,
          everest3,
          everest4,
          everest5,
          everest6,
          everest7,
        ]}
        imagesLine2={[
          everestUnder1,
          everestUnder2,
          everestUnder3,
          everestUnder4,
          everestUnder5,
          everestUnder6,
          everestUnder7,
        ]}
      />
      <Stories stories={[everestStory1, everestStory2, everestStory3]} />
      <EverestData />
      <Cases mode="case-page" />
    </>
  );
};
