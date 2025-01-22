import { Box, Typography } from "@mui/material";

export const ServiceContent = ({ title, items }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      pb: 2,
    }}
  >
    <Typography
      component={"h3"}
      textTransform={"uppercase"}
      sx={{
        color: "#BFBFBF",
        fontFamily: "Futura PT",
        fontSize: { xs: "30px", sm: "32px", md: "40px", lg: "45px" },
        fontWeight: 450,
        letterSpacing: "0.46px",
        textAlign: "left",
        textUnderlinePosition: "from-font",
        textDecorationSkipInk: "none",
        marginBottom: "20px",
        alignSelf: "stretch",
      }}
    >
      {title}
    </Typography>
    {items.map((item, index) => (
      <Typography
        key={index}
        sx={{
          textAlign: "left",
          fontFamily: "Futura PT",
          fontSize: { xs: "18px", sm: "16px", md: "18px", lg: "20px" },
          fontWeight: 400,
          lineHeight: { md: "24px", lg: "32px" },
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        {item}
      </Typography>
    ))}
  </Box>
);
