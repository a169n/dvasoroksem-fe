import { Header } from "@shared/ui/header";
import BauerMainImage from "@assets/casePages/bauer.png";
import { Box } from "@mui/material";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import BauerData from "./ui/bauerData";
import DoubleCarousel from "@shared/ui/doubleCarousel/DoubleCarousel";
import bauer1 from "@assets/casePages/bauer/bauer1.png";
import bauer2 from "@assets/casePages/bauer/bauer2.png";
import bauer3 from "@assets/casePages/bauer/bauer3.png";
import bauer4 from "@assets/casePages/bauer/bauer4.png";
import bauer5 from "@assets/casePages/bauer/bauer5.png";
import bauer6 from "@assets/casePages/bauer/bauer6.png";
import bauerUnder1 from "@assets/casePages/bauer/bauerUnder1.png";
import bauerUnder2 from "@assets/casePages/bauer/bauerUnder2.png";
import bauerUnder3 from "@assets/casePages/bauer/bauerUnder3.png";
import bauerUnder4 from "@assets/casePages/bauer/bauerUnder4.png";
import bauerUnder5 from "@assets/casePages/bauer/bauerUnder5.png";
import bauerUnder6 from "@assets/casePages/bauer/bauerUnder6.png";
import bauerStory1 from "@assets/casePages/bauer/bauerStory1.png";
import bauerStory2 from "@assets/casePages/bauer/bauerStory2.png";
import bauerStory3 from "@assets/casePages/bauer/bauerStory3.png";
import { Stories } from "@shared/ui/stories";
import { useTranslation } from "react-i18next";

export const Bauer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header mode="light" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={BauerMainImage}
          alt="Bauer main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title={t("ourCases.bauer.page.title")}
        description={t("ourCases.bauer.page.description")}
      />
      <DoubleCarousel
        imagesLine1={[bauer1, bauer2, bauer3, bauer4, bauer5, bauer6]}
        imagesLine2={[
          bauerUnder1,
          bauerUnder2,
          bauerUnder3,
          bauerUnder4,
          bauerUnder5,
          bauerUnder6,
        ]}
      />
      <Stories stories={[bauerStory1, bauerStory2, bauerStory3]} />

      <BauerData />

      <Cases mode="case-page" />
    </>
  );
};
