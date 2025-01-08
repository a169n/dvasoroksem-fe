import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import HelpOtherMainImage from "@assets/casePages/help-others.webp";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import DoubleCarousel from "@shared/ui/doubleCarousel/DoubleCarousel";
import helpothers1 from "@assets/casePages/help-others/helpothers1.webp";
import helpothers2 from "@assets/casePages/help-others/helpothers2.webp";
import helpothers3 from "@assets/casePages/help-others/helpothers3.webp";
import helpothers5 from "@assets/casePages/help-others/helpothers5.webp";
import helpothers6 from "@assets/casePages/help-others/helpothers6.webp";
import helpothers7 from "@assets/casePages/help-others/helpothers7.webp";
import HelpOthersData from "./ui/helpOthersData";
import { MyButton } from "@shared/ui/button";
import { useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

import helpOptherVideo1 from "@assets/videos/helpOthers/pomogy_drugomu_video_1.mp4";
import helpOptherVideo2 from "@assets/videos/helpOthers/pomogy_drugomu_video_2.mp4";
import helpOptherVideo3 from "@assets/videos/helpOthers/pomogy_drugomu_video_3.mp4";
import VideoCarousel from "@shared/ui/videoCarousel/VideoCarousel";
import { useLayoutContext } from "@src/context/LayoutContext";
import { useTranslation } from "react-i18next";

export const HelpOthers = () => {
  const { setMode } = useLayoutContext();
  const { t } = useTranslation();
  useEffect(() => {
    setMode("dark");
    window.scrollTo(0, 0);
  }, []);

  const videos = [helpOptherVideo1, helpOptherVideo2, helpOptherVideo3];
  return (
    <>
      <Header />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={HelpOtherMainImage}
          alt="help others main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title={t("ourCases.helpOthers.page.title")}
        description={t("ourCases.helpOthers.page.description")}
      />
      <VideoCarousel videos={videos} />
      <Box
        sx={{
          backgroundColor: "#161616",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <MyButton
          variant="contained"
          sx={{
            height: "auto",
            width: "fit-content",
            backgroundColor: "#161616",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: 0,
            gap: "10px",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              color: "#000",
            },
          }}
          onClick={() =>
            window.open(
              "https://www.instagram.com/dvasoroksem?igsh=dXM5cHYycmhqZms=",
              "_blank"
            )
          }
          endIcon={<InstagramIcon />}
        >
          {t("ourCases.helpOthers.instagramButtonText")}
        </MyButton>
      </Box>

      <DoubleCarousel
        imagesLine1={[
          helpothers1,
          helpothers2,
          helpothers3,
          helpothers5,
          helpothers6,
          helpothers7,
        ]}
        imagesLine2={[]}
      />
      <HelpOthersData />
      <Cases mode="case-page" />
    </>
  );
};
