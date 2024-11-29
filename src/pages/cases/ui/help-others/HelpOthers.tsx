import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import HelpOtherMainImage from "@assets/casePages/help-others.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import DoubleCarousel from "@shared/ui/doubleCarousel/DoubleCarousel";
import helpothers1 from "@assets/casePages/help-others/helpothers1.png";
import helpothers2 from "@assets/casePages/help-others/helpothers2.png";
import helpothers3 from "@assets/casePages/help-others/helpothers3.png";
import helpothers5 from "@assets/casePages/help-others/helpothers5.png";
import helpothers6 from "@assets/casePages/help-others/helpothers6.png";
import helpothers7 from "@assets/casePages/help-others/helpothers7.png";
import HelpOthersData from "./ui/helpOthersData";
import { MyButton } from "@shared/ui/button";
import { useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

import helpOptherVideo1 from "@assets/videos/helpOthers/pomogy_drugomu_video_1.mp4";
import helpOptherVideo2 from "@assets/videos/helpOthers/pomogy_drugomu_video_2.mp4";
import helpOptherVideo3 from "@assets/videos/helpOthers/pomogy_drugomu_video_3.mp4";
import VideoCarousel from "@shared/ui/videoCarousel/VideoCarousel";

export const HelpOthers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [helpOptherVideo1, helpOptherVideo2, helpOptherVideo3];
  return (
    <>
      <Header mode="dark" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={HelpOtherMainImage}
          alt="help others main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="не упускайте случая делать добро"
        description="Помоги Другому — благотворительная организация. Мы с радостью поддерживаем общественный фонд финансово, помогаем вести их страницу в Instagram, наша команда каждые выходные выезжает в приюты и дома престарелых."
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
          Смотреть в Instagram
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
