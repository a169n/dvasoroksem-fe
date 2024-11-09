import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import CoffeeBoomMainImage from "@assets/casePages/coffee-boom.svg";
import { Description } from "@shared/ui/description";
export const CoffeeBoom = () => {
  return (
    <>
      <Header mode="light" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={CoffeeBoomMainImage}
          alt="coffee boom main image"
          style={{ width: "100%" }}
        />
      </Box>
      <Description
        title="место, где
становятся друзьями"
        description="Мы запустили TikTok для сети кофеен Coffee BOOM. Благодаря продуманной и актуальной контент-стратегии с нуля набрали 50 тысяч подписчиков."
      />
    </>
  );
};
