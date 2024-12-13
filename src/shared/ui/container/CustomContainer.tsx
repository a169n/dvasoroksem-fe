import { Box } from "@mui/material";

export const CustomContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingX: {
          xs: "16px", // Default for extra-small screens
          sm: "24px", // Small screens
          md: "40px", // Medium screens
          lg: "60px", // Large screens
          xl: "350px", // Extra-large screens
        },
      }}
    >
      {children}
    </Box>
  );
};
