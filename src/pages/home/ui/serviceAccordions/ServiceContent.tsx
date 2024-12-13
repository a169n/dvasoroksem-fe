import { Box, Typography } from "@mui/material";

export const ServiceContent = ({ title, items }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Typography
      component={"h3"}
      sx={{
        color: "#BFBFBF",
        fontSize: "46px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "30px",
        letterSpacing: "0.46px",
        textAlign: "left",
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
          fontSize: "22px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "150%",
        }}
      >
        {item}
      </Typography>
    ))}
  </Box>
);
