import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import SoyleMainPage from "@assets/casePages/soyle.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { MyButton } from "@shared/ui/button";
import { useEffect } from "react";

export const Soyle = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = () => {
    window.open("https://www.youtube.com/watch?v=YxXS6N_gdO8", "_blank");
  };

  return (
    <>
      <Header mode="dark" />
      <Box component="div" sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={SoyleMainPage}
          alt="soyle main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="Казахский язык для всех"
        description="Мы создали серию видеороликов для онлайн-школы казахского языка SOYLE. Нашей задачей было разработать качественный и интересный контент с продуманным сценарием и высоким уровнем продакшна. Видеоуроки на YouTube ориентированы на тех, кто хочет изучать казахский язык, сочетая обучение и развлечение"
      />
      <Box sx={{ pb: 3, backgroundColor: "#161616" }}>
        <iframe
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/YxXS6N_gdO8"
          title="YouTube video"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </Box>
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
          endIcon={<YouTubeIcon />}
          onClick={handleButtonClick}
        >
          Смотреть видеоролик на YouTube
        </MyButton>
      </Box>

      <Cases mode="case-page" />
    </>
  );
};
