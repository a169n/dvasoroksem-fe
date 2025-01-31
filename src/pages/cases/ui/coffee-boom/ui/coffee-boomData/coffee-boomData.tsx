import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import coffeeBoomDataImage1 from "@assets/casePages/coffee-boom/coffeboomDataImage1.png";
import { useTranslation } from "react-i18next";

export const CoffeeBoomData = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 12 },
        pt: { xs: 2, sm: 4, md: 12 },
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
          {t("ourCases.coffeeBoom.data.description1")}
        </Typography>
        <Typography
          sx={{
            marginTop: isMobile ? "" : "10px",

            color: "#fff",
            textTransform: "uppercase",
            fontSize: isMobile ? "30px" : "90px",
            textAlign: isMobile ? "center" : "start",
            lineHeight: " 76.95px",
            marginBottom: isMobile ? "20px" : "50px",
          }}
        >
          {t("ourCases.coffeeBoom.data.title1")}
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
