import { Box } from "@mui/material";
import { Header } from "@shared/ui/header/Header";
import Grandcar2022MainImage from "@assets/casePages/grandcar2022.svg";
import { Description } from "@shared/ui/description";
import { MovieStaff } from "@shared/ui/movie-staff";
export const Grandcar = () => {
  return (
    <>
      <Header mode="dark" />
      <Box minHeight={1000}>
        <img
          src={Grandcar2022MainImage}
          alt="grandcar 2022 main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="grandcar
2022"
        description="Презентационный ролик о компании, которая покупает автомобили на аукционах в США и доставляет их клиенту в любую точку мира. В этом видео мы постарались раскрыть их преимущества перед конкурентами и оставить приятное впечатление у клиентов."
      />
      <MovieStaff />
    </>
  );
};
