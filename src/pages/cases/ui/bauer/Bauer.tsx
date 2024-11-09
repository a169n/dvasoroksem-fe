import { Header } from "@shared/ui/header";
import BauerMainImage from "@assets/casePages/bauer.png";
import { Box } from "@mui/material";

export const Bauer = () => {
  return (
    <>
      <Header mode="light" />
      <Box minHeight={1000}>
        <img
          src={BauerMainImage}
          alt="Bauer main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </>
  );
};
