import { Help } from "@mui/icons-material";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import coffeeBoomDataImage1 from "@assets/casePages/coffee-boom/coffeboomDataImage1.png";
export const CoffeeBoomData = () => {
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
        alignItems: "center",
        gap: "50px",
        position: "relative",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: isMobile ? "18px" : "20px",
            textAlign: "center",
          }}
        >
          Создали аккаунт в TikTok, набрали
        </Typography>
        <Typography
          sx={{
            marginTop: isMobile ? "" : "10px",

            color: "#fff",
            textTransform: "uppercase",
            fontSize: isMobile ? "30px" : "90px",
            textAlign: isMobile ? "center" : "start",
            lineHeight: " 76.95px",
            marginBottom: isMobile ? "50px" : "200px",
          }}
        >
          50к с нуля
        </Typography>
      </Box>

      <Box
        component="img"
        src={coffeeBoomDataImage1}
        alt={"NomadDataImage1"}
        sx={{
          width: isMobile ? "80px" : "200px",
          height: "auto",
          draggable: "false",
          position: "absolute",
          top: isMobile ? "50px" : "120px",
          right: isMobile ? "80px" : "550px",
        }}
      />
    </Box>
  );
};
