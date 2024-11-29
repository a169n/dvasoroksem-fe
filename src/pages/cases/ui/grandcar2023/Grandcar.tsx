import { Box } from "@mui/material";
import { Header } from "@shared/ui/header/Header";
import Grandcar2023MainImage from "@assets/casePages/grandcar2023.svg";
import { Description } from "@shared/ui/description";
import { MovieStaff } from "@shared/ui/movie-staff";
import { Cases } from "@pages/home/ui/cases";
import { useEffect } from "react";

export const Grandcar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header mode="light" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={Grandcar2023MainImage}
          alt="grandcar 2023 main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="grandcar 2023"
        description="Этот рекламный ролик был снят в детективном стиле, чтобы привлечь внимание клиентов и увлечь их атмосферой. Таким образом, мы хотели убить двух зайцев одним выстрелом: рассказать о преимуществах компании и увеличить глубину просмотра за счет необычной подачи.  Партнер остался доволен, мы надеемся, что вы тоже!"
      />

      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/7lswm-7f6To?start=135"
        title="YouTube video"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      <MovieStaff link={"https://www.youtube.com/watch?v=7lswm-7f6To"} />
      <Cases mode="case-page" />
    </>
  );
};
