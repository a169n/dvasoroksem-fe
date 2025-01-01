import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import QcsDataImage1 from "@assets/casePages/qcs/qcsDataImage1.png";
import QcsDataImage2 from "@assets/casePages/qcs/qcsDataImage2.png";
import { useTranslation } from "react-i18next";

export const QcsData = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
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
              textTransform: "uppercase",
              fontSize: isMobile ? "30px" : "90px",
              textAlign: "start",
              lineHeight: " 76.95px",
            }}
          >
            {t("ourCases.qcs.data.activateAccount")}
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              textAlign: "start",
              marginTop: isMobile ? "" : "10px",
            }}
          >
            {t("ourCases.qcs.data.account")}
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
            {t("ourCases.qcs.data.googleResults")}
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
            {t("ourCases.qcs.data.rankChange")}
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              textAlign: "start",
              marginTop: isMobile ? "" : "10px",
            }}
          >
            {t("ourCases.qcs.data.growingEngagement")}
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
            {t("ourCases.qcs.data.fillCards")}
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
            {t("ourCases.qcs.data.listServices")}
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              textAlign: "start",
              marginTop: isMobile ? "" : "10px",
            }}
          >
            {t("ourCases.qcs.data.reviewsAndPhotos")}
          </Typography>
        </Box>
      </Box>

      <Box
        component="img"
        src={QcsDataImage1}
        alt={"QcsDataImage1"}
        sx={{
          width: isMobile ? "100px" : "200px",
          height: "auto",
          draggable: "false",
          position: "absolute",
          top: isMobile ? "80px" : "140px",
          left: isMobile ? "" : "730px",
          right: isMobile ? "30px" : "",
        }}
      />

      <Box
        component="img"
        src={QcsDataImage2}
        alt={"QcsDataImage2"}
        sx={{
          position: "absolute",
          width: isMobile ? "180px" : "300px",
          height: isMobile ? "100px" : "120px",
          draggable: "false",
          bottom: isMobile ? "220px" : "220px",
          right: isMobile ? "30px" : "400px",
        }}
      />
    </Box>
  );
};
