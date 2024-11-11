import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import bauerDataImage1 from "@assets/casePages/bauer/bauerDataImage1.png";
import bauerDataImage2 from "@assets/casePages/bauer/bauerDataImage2.png";

export const BauerData = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 12 },
        py: { xs: 2, sm: 4, md: 12 },
        backgroundColor: "#161616",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          marginBottom: "100px",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              marginBottom: isMobile ? "" : "10px",
              textAlign: "start",
            }}
          >
            Непрерывный и качественный контент, погруженный в
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: isMobile ? "30px" : "90px",
              textAlign: "start",
              lineHeight: " 76.95px",
              marginTop: isMobile ? "" : "10px",
            }}
          >
            хоккейный мир
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              textAlign: "start",
            }}
          >
            Растущая вовлеченность
          </Typography>
          <Typography
            sx={{
              marginTop: isMobile ? "" : "10px",

              color: "#fff",
              textTransform: "uppercase",
              fontSize: isMobile ? "30px" : "90px",
              textAlign: "start",
              lineHeight: " 76.95px",
            }}
          >
            средний ER — 25%
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: isMobile ? "30px" : "90px",
              textAlign: "start",
              lineHeight: " 76.95px",
            }}
          >
            печатный дизайн
          </Typography>
          <Typography
            sx={{
              marginTop: isMobile ? "" : "10px",

              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              textAlign: "start",
            }}
          >
            Брендовые стикерпаки, раскраски, пакеты, вывески
          </Typography>
        </Box>
      </Box>

      <Box
        component="img"
        src={bauerDataImage1}
        alt={"bauerDataImage1"}
        sx={{
          width: isMobile ? "100px" : "200px",
          height: "auto",
          draggable: "false",
          position: "absolute",
          top: isMobile ? "80px" : "140px",
          right: isMobile ? "40px" : "800px",
        }}
      />

      <Box
        component="img"
        src={bauerDataImage2}
        alt={"bauerDataImage2"}
        sx={{
          position: "absolute",
          width: isMobile ? "100px" : "200px",
          height: isMobile ? "100px" : "200px",
          draggable: "false",
          bottom: isMobile ? "150px" : "90px",
          right: isMobile ? "20px" : "800px",
        }}
      />
    </Box>
  );
};
