import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MyButton } from "../button";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useTranslation } from "react-i18next";

export const MovieStaff = ({ link }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 12 },
        py: { xs: 2, sm: 4, md: 12 },
        backgroundColor: "#161616",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <MyButton
          variant="contained"
          sx={{
            height: "auto",
            width: "fit-content",
            backgroundColor: "#161616",
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: 0,
            gap: "10px",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              color: "#000",
            },
          }}
          onClick={() => window.open(link, "_blank")}
          endIcon={<YouTubeIcon />}
        >
          {t("ourCases.grandcar2022.youtubeButtonText")}
        </MyButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "",
          justifyContent: "flex-start",
        }}
      >
        <Box sx={{ width: isMobile ? "100%" : "30%" }}>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            {t("ourCases.grandcar2022.info.producer")}
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            {t("ourCases.grandcar2022.info.director")}
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            {t("ourCases.grandcar2022.info.dop")}
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            {t("ourCases.grandcar2022.info.solutions")}
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            {t("ourCases.grandcar2022.info.montage")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
