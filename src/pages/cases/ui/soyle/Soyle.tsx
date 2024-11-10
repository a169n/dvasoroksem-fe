import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import SoyleMainPage from "@assets/casePages/soyle.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
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
      <Cases mode="case-page" />
    </>
  );
};
