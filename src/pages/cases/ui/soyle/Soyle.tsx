import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import SoyleMainPage from "@assets/casePages/soyle.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { MyButton } from "@shared/ui/button";

export const Soyle = () => {
  return (
    <>
      <Header mode="dark" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={SoyleMainPage}
          alt="soyle main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="Казахский
язык для всех"
        description="Мы создали серию видеороликов для онлайн-школы казахского языка SOYLE. Нашей задачей было разработать качественный и интересный контент с продуманным сценарием и высоким уровнем продакшна. Видеоуроки на YouTube ориентированы на тех, кто хочет изучать
казахский язык, сочетая обучение и развлечение"
      />
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
            py: 1,
            mt: 3,
            height: "auto",
            width: { xs: "100%", md: "20%" },
            backgroundColor: "#161616",
            color: "#fff",
            border: "1px solid #fff",
            gap: "10px",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              color: "#000",
            },
          }}
        >
          Смотреть видеоролик на YouTube
          <YouTubeIcon />
        </MyButton>
      </Box>
      <Cases mode="case-page" />
    </>
  );
};
