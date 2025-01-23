import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { MyButton } from "@shared/ui/button";
import "./apply.module.css";
import { useTranslation } from "react-i18next";
import { EllipseCirclingText } from "./EllipseCirclingText";
import { CustomArrowSVG } from "./CustomArrowSVG";
import { useNavigate } from "react-router-dom";
import { CustomContainer } from "@shared/ui/container";

export const Apply = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const { t } = useTranslation();

  const text1Parts = t("apply.text1").split(" ");
  const lastWord = text1Parts.pop();
  const remainingText = text1Parts.join(" ");

  return (
    <Box
      sx={{
        py: { xs: 2, sm: 4, md: 12 },
        backgroundColor: "#232323",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!isMobile && <CustomArrowSVG />}
      <CustomContainer>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"flex-start"}
          position={"relative"}
        >
          <Typography
            color="#fff"
            fontSize={{ xs: "24px", sm: "36px", md: "48px", lg: "64px" }}
            fontWeight={450}
            fontFamily="Futura PT"
            textTransform="uppercase"
            sx={{
              textAlign: "left",
              wordSpacing: "0.3em",
              marginBottom: isMobile ? 3 : 6,
            }}
          >
            {remainingText + " "}
            <EllipseCirclingText text={lastWord} isMobile={isMobile} />
          </Typography>
          <Typography
            color="#fff"
            fontSize={{ xs: "24px", sm: "36px", md: "48px", lg: "64px" }}
            fontWeight={450}
            fontFamily="Futura PT"
            textTransform="uppercase"
            sx={{
              textAlign: "left",
              wordSpacing: "0.3em",
            }}
          >
            {t("apply.text2")}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          position={"relative"}
          zIndex={20}
          mt={isMobile ? 4 : 8}
        >
          <MyButton
            id="apply-button"
            onClick={() => navigate("/request")}
            sx={{
              borderRadius: 0,
              textTransform: "none",
              fontSize: isMobile ? "16px" : "24px",
              padding: isMobile ? "2px 12px" : "4px 24px",
              border: "1px solid #fff",
              backgroundColor: "#232323",
              color: "#fff",
              transition:
                "background-color 0.3s, border-color 0.3s, color 0.3s",
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
      </CustomContainer>
    </Box>
  );
};

export default Apply;
