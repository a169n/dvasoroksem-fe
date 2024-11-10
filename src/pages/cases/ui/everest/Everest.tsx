import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import EverestMainImage from "@assets/casePages/everest.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@src/pages/home/ui/cases";

import everest2 from "@assets/casePages/everest/everest2.png";
import everest3 from "@assets/casePages/everest/everest3.png";
import everest4 from "@assets/casePages/everest/everest4.png";
import everest5 from "@assets/casePages/everest/everest5.png";
import everestUnder2 from "@assets/casePages/everest/everestUnder2.png";
import everestUnder3 from "@assets/casePages/everest/everestUnder3.png";
import everestUnder4 from "@assets/casePages/everest/everestUnder4.png";
import everestUnder5 from "@assets/casePages/everest/everestUnder5.png";
import DoubleCarousel from "@shared/ui/doubleCarousel/DoubleCarousel";

export const Everest = () => {
  return (
    <>
      <Header mode="dark" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={EverestMainImage}
          alt="everest main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="выше с нами"
        description="Ведем Instagram Everest’а — профессиональный волейбольный клуб в Астане. Наш подход к контенту нацелен на подростков: создаём посты с аниме, челленджами и тренерами, вовлекая молодёжь в спорт и волейбол. Помогаем клубу вдохновлять новое поколение спортсменов."
      />
      <Cases mode="case-page" />
      <DoubleCarousel
        imagesLine1={[
          everest3,
          everest4,
          everest5,
          everest3,
          everest4,
          everest5,
        ]}
        imagesLine2={[
          everestUnder3,
          everestUnder4,
          everestUnder5,
          everestUnder3,
          everestUnder4,
          everestUnder5,
        ]}
      />
    </>
  );
};
