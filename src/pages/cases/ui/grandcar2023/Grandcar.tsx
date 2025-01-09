import { Box } from "@mui/material";
import { Header } from "@shared/ui/header/Header";
import Grandcar2023MainImage from "@assets/casePages/grandcar2023.webp";
import { Description } from "@shared/ui/description";
import { MovieStaff } from "@shared/ui/movie-staff";
import { Cases } from "@pages/home/ui/cases";
import { useEffect } from "react";
import { useLayoutContext } from "@src/context/LayoutContext";
import { useTranslation } from "react-i18next";

export const Grandcar = () => {
  const { setMode } = useLayoutContext();
  const { t } = useTranslation();

  useEffect(() => {
    setMode("light");
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={Grandcar2023MainImage}
          alt={t("ourCases.grandcar2023.page.title")}
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title={t("ourCases.grandcar2023.page.title")}
        description={t("ourCases.grandcar2023.page.description")}
      />
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/7lswm-7f6To?start=135"
        title="YouTube video"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <MovieStaff link="https://www.youtube.com/watch?v=7lswm-7f6To" />
      <Cases mode="case-page" />
    </>
  );
};
