import { Header } from "@shared/ui/header";
import BauerMainImage from "@assets/casePages/bauer.png";
import { Box } from "@mui/material";
import { Description } from "@shared/ui/description";

export const Bauer = () => {
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
        title="everything for the game"
        description="Для мирового бренда хоккейной экипировки Bauer в Казахстане мы ведём Instagram, создаём качественный контент, погружённый в хоккейный мир, разрабатываем печатную продукцию, баннеры и многое другое."
      />
    </>
  );
};
