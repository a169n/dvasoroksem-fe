import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import NomadMainPage from "@assets/casePages/nomad.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import NomadData from "./ui/nomadData";
import { useEffect } from "react";

import nomadTiktok1 from "@assets/videos/nomad/nomad_tiktok_1.mp4";
import nomadTiktok2 from "@assets/videos/nomad/nomad_tiktok_2.mp4";
import nomadTiktok3 from "@assets/videos/nomad/nomad_tiktok_3.mp4";
import nomadTiktok4 from "@assets/videos/nomad/nomad_tiktok_4.mp4";
import nomadTiktok5 from "@assets/videos/nomad/nomad_tiktok_5.mp4";
import nomadTiktok6 from "@assets/videos/nomad/nomad_tiktok_6.mp4";
import VideoCarousel from "@shared/ui/videoCarousel/VideoCarousel";

export const Nomad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    nomadTiktok1,
    nomadTiktok2,
    nomadTiktok3,
    nomadTiktok4,
    nomadTiktok5,
    nomadTiktok6,
  ];

  return (
    <>
      <Header mode="light" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={NomadMainPage}
          alt="nomad main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="лучшее начало твоего пути"
        description="Запустили TikTok для компании Nomad, лидера на рынке автозаправочных станций в Казахстане, с нуля набрав 16 тысяч подписчиков. Мы нашли подход к этой специфической сфере, создавая вирусный контент для водителей, который активно обсуждался."
      />
      <VideoCarousel videos={videos} />
      <NomadData />
      <Cases mode="case-page" />
    </>
  );
};
