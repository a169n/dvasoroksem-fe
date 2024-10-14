import { Box, Typography } from "@mui/material";

export const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 400,
          color: "#000",
          textTransform: "uppercase",
          fontSize: {
            xs: "24px",
            sm: "28px",
            md: "32px",
            lg: "64px"
          },
          mb: { xs: 2, sm: 3, md: 5 },
        }}
      >
        Почему выбирают нас?
      </Typography>
    </Box>
  );
};
