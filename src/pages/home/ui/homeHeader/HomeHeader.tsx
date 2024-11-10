import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-marquee-slider";
import landing_image from "@assets/landing_image.png";
import landing_image_grey from "@assets/landing_image_grey.jpg";
import icon1 from "@assets/icons/icon1.svg";
import icon2 from "@assets/icons/icon2.svg";
import icon3 from "@assets/icons/icon3.svg";
import icon4 from "@assets/icons/icon4.svg";
import icon5 from "@assets/icons/icon5.svg";
import icon6 from "@assets/icons/icon6.svg";
import icon7 from "@assets/icons/icon7.svg";
import icon8 from "@assets/icons/icon8.svg";
import { useTranslation } from "react-i18next";
export const HomeHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: "100vh",

        ...(isMobile && {
          backgroundImage: `url(${landing_image_grey})`,
          WebkitFilter: "grayscale(100%)",
          filter: "grayscale(100%)",
          alignItems: "space-between",
          minHeight: "100%",
        }),
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            px: { xs: 0, md: 0 },
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "left", md: "left" },
              mb: { xs: 4, md: 0 },
              mt: { xs: 4, md: 0 },
              paddingX: isMobile ? "20px" : "58px",
            }}
          >
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h1"
              fontWeight={500}
              mb={2}
            >
              {t("weAreDvaSorokSem")}
            </Typography>
            <Typography sx={{ color: "#fff" }} textAlign="left" mb={2}>
              Ведущее маркетинговое агентство в Астане, предлагающее комплексные
              маркетинговые решения для бизнеса. Специализируемся на
              стратегическом планировании, digital маркетинге, SEO, SMM и
              брендинге.
            </Typography>
            <Typography sx={{ color: "#fff" }} textAlign="left" mb={2}>
              Наша команда экспертов поможет вашему бизнесу расти и достигать
              новых высот!
            </Typography>
          </Box>

          {!isMobile && (
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
              }}
            >
              <img
                src={landing_image}
                alt="Landing"
                draggable="false"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              />
            </Box>
          )}
        </Box>

        <Box
          sx={{
            backgroundColor: "#d9d9d9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Marquee
            velocity={15}
            direction="rtl"
            scatterRandomly={false}
            resetAfterTries={5}
            onInit={() => {}}
            onFinish={() => {}}
          >
            {[icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8].map(
              (icon, index) => (
                <Box key={index} mx={4} py={isMobile ? 2 : 4}>
                  <img
                    src={icon}
                    alt={`Icon${index + 1}`}
                    draggable="false"
                    style={{
                      height: "40px",
                      filter: "brightness(0) invert(1)",
                      margin: "0 20px",
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  />
                </Box>
              )
            )}
          </Marquee>
        </Box>
      </Box>
    </Box>
  );
};
