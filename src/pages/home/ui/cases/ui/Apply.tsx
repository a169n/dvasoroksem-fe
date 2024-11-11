import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { MyButton } from "@shared/ui/button";
import "./apply.module.css";
import { useTranslation } from "react-i18next";
import AnimatedGraphics from "./AnimatedGraphics";

export const Apply = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#000",
      }}
    >
      <Box display={"flex"} justifyContent={"flex-start"} mt={10}>
        <AnimatedGraphics />
        <Typography
          color="#fff"
          fontSize={{ xs: "24px", sm: "28px", md: "32px", lg: "64px" }}
          textTransform="uppercase"
          sx={{
            textAlign: "start",
          }}
        >
          {t("apply.text1")}
          <Box mt={6} component="span" display="block">
            {t("apply.text2")}
          </Box>
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} mt={10}>
        <MyButton
          onClick={() => window.open("/request", "_blank")}
          sx={{
            borderRadius: 0,
            textTransform: "none",
            fontSize: isMobile ? "14px" : "20px",
            padding: "4px 24px",
            border: "1px solid #fff",
            backgroundColor: "#000",
            color: "#fff",
            transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
            "&:hover": {
              backgroundColor: "#333",
              borderColor: "#fff",
              color: "#fff",
            },
          }}
        >
          {t("apply.buttonText")}
        </MyButton>
      </Box>
    </Box>
  );
};
