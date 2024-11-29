import { Box } from "@mui/material";
import { Header } from "@shared/ui/header/Header";
import Grandcar2022MainImage from "@assets/casePages/grandcar2022.svg";
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
      <Header mode="dark" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={Grandcar2022MainImage}
          alt="grandcar 2022 main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="grandcar 2022"
        description="Презентационный ролик о компании, которая покупает автомобили на аукционах в США и доставляет их клиенту в любую точку мира. В этом видео мы постарались раскрыть их преимущества перед конкурентами и оставить приятное впечатление у клиентов."
      />
      <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/o5gU091WEKs?start=0"
        title="YouTube video"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <MovieStaff link={"https://www.youtube.com/watch?v=o5gU091WEKs"} />
      <Cases mode="case-page" />
    </>
  );
};
