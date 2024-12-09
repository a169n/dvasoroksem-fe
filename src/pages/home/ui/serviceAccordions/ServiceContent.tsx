import { Box, Typography } from "@mui/material";

export const ServiceContent = ({ title, items, titleColor }) => (
  <Box sx={{ backgroundColor: "#f7f7f7", ml: 2 }}>
    <Typography
      variant="h5"
      component="h2"
      gutterBottom
      sx={{
        fontFamily: "Futura PT, sans-serif",
        fontWeight: 500,
        fontSize: "46px",
        color: titleColor,
        marginBottom: 2,
        textAlign: "left",
        textTransform: "uppercase",
      }}
    >
      {title}
    </Typography>
    {items.map((item, index) => (
      <Typography
        alignItems={"center"}
        key={index}
        sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          lineHeight: { xs: "16px", sm: "18px", md: "18px" },
          marginBottom: { xs: 0.5, sm: 0.5, md: 2 },
          textAlign: "left",
          fontWeight:  { xs: 500, sm: 500, md: 400 },
        }}
      >
        {item}
      </Typography>
    ))}
  </Box>
);
