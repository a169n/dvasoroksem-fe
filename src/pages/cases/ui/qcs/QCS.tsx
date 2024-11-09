import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import QCSMainImage from "@assets/casePages/qcs.svg";
import { Description } from "@shared/ui/description";
export const QCS = () => {
  return (
    <>
      <Header mode="light" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={QCSMainImage}
          alt="qcs main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="лидер в области
бортового питания"
        description="QCS обеспечивает высочайшее качество услуг
в авиационной отрасли, ежегодно обслуживая более
2 миллионов пассажиров. Мы занялись SEO-оптимизацией и узнаваемостью бренда, ведём Instagram QCS, где благодаря нашему контенту
люди хотят работать в компании."
      />
    </>
  );
};
