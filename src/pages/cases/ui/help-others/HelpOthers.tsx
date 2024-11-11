import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import HelpOtherMainImage from "@assets/casePages/help-others.svg";
import { Description } from "@shared/ui/description";
import { Cases } from "@pages/home/ui/cases";
import DoubleCarousel from "@shared/ui/doubleCarousel/DoubleCarousel";
import helpothers1 from "@assets/casePages/help-others/helpothers1.png";
import helpothers2 from "@assets/casePages/help-others/helpothers2.png";
import helpothers3 from "@assets/casePages/help-others/helpothers3.png";
import helpothers4 from "@assets/casePages/help-others/helpothers4.png";
import helpothers5 from "@assets/casePages/help-others/helpothers5.png";
import helpothers6 from "@assets/casePages/help-others/helpothers6.png";
import helpothers7 from "@assets/casePages/help-others/helpothers7.png";
import HelpOthersData from "./ui/helpOthersData";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { MyButton } from "@shared/ui/button";
export const HelpOthers = () => {
  return (
    <>
      <Header mode="dark" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={HelpOtherMainImage}
          alt="help others main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="не упускайте случая
делать добро"
        description="Помоги Другому — благотворительная организация. Мы с радостью поддерживаем общественный фонд финансово, помогаем вести их страницу в Instagram, наша команда каждые выходные выезжает в приюты и дома престарелых."
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

      <DoubleCarousel
        imagesLine1={[
          helpothers1,
          helpothers2,
          helpothers3,
          helpothers4,
          helpothers5,
          helpothers6,
          helpothers7,
        ]}
        imagesLine2={[]}
      />
      <HelpOthersData />
      <Cases mode="case-page" />
    </>
  );
};
