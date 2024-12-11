import { Container } from "@mui/material";
export const CustomContainer = ({ children }) => {
  return (
    <Container
      disableGutters
    //   sx={{
    //     paddingX: {
    //       xs: "16px", // Default for extra-small screens
    //       sm: "24px", // Small screens
    //       md: "40px", // Medium screens
    //       lg: "60px", // Large screens
    //       xl: "300px", // Extra-large screens
    //     },
    //   }}
    >
      {children}
    </Container>
  );
};
