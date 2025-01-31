/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { MyButton } from "@shared/ui/button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Case1 from "@assets/cases/case1.webp";
import Case2 from "@assets/cases/case2.webp";
import Case3 from "@assets/cases/case3.webp";
import Case4 from "@assets/cases/case4.webp";
import Case5 from "@assets/cases/case5.webp";
import Case7 from "@assets/cases/case7.webp";
import Case8 from "@assets/cases/case8.webp";
import { useRef } from "react";

export const Cases = ({ mode = "default" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isCasePage = mode === "case-page";
  const navigate = useNavigate();
  const { t } = useTranslation("OurCases");

  const servicesData: any[] = [
    {
      imageURL: Case1,
      title: t("ourCases.coffeeBoom.title"),
      description: t("ourCases.coffeeBoom.description"),
      path: "/cases/coffee-boom",
    },
    {
      imageURL: Case2,
      title: t("ourCases.soyle.title"),
      description: t("ourCases.soyle.description"),
      path: "/cases/soyle",
    },
    {
      imageURL: Case3,
      title: t("ourCases.helpOthers.title"),
      description: t("ourCases.helpOthers.description"),
      path: "/cases/help-others",
    },
    {
      imageURL: Case4,
      title: t("ourCases.qcs.title"),
      description: t("ourCases.qcs.description"),
      path: "/cases/qcs",
    },
  ];

  const servicesDataCarousel1: any[] = [
    {
      imageURL: Case5,
      title: t("ourCases.bauer.title"),
      description: t("ourCases.bauer.description"),
      path: "/cases/bauer",
    },
    {
      imageURL: Case1,
      title: t("ourCases.coffeeBoom.title"),
      description: t("ourCases.coffeeBoom.description"),
      path: "/cases/coffee-boom",
    },
    {
      imageURL: Case7,
      title: t("ourCases.everest.title"),
      description: t("ourCases.everest.description"),
      path: "/cases/everest",
    },
  ];

  const servicesDataCarousel2: any[] = [
    {
      imageURL: Case8,
      title: t("ourCases.nomad.title"),
      description: t("ourCases.nomad.description"),
      path: "/cases/nomad",
    },
    {
      imageURL: Case2,
      title: t("ourCases.soyle.title"),
      description: t("ourCases.soyle.description"),
      path: "/cases/soyle",
    },
    {
      imageURL: Case3,
      title: t("ourCases.helpOthers.title"),
      description: t("ourCases.helpOthers.description"),
      path: "/cases/help-others",
    },
    {
      imageURL: Case4,
      title: t("ourCases.qcs.title"),
      description: t("ourCases.qcs.description"),
      path: "/cases/qcs",
    },
  ];

  const carouselRef = useRef<Carousel>(null);

  const responsive1 = {
    mobile: { breakpoint: { max: 600, min: 0 }, items: 2 },
  };

  const responsive2 = {
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1 },
  };

  return (
    <Box
      sx={{
        py: isMobile ? 4 : isTablet ? 6 : 8,
        backgroundColor: isCasePage ? "#161616" : "#fff",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={isMobile ? 3 : isTablet ? 5 : 7}
        px={{
          xs: "16px",
          sm: "24px",
          md: "40px",
          lg: "60px",
          xl: ["/", "/request", "/cases"].includes(window.location.pathname)
            ? "350px"
            : "60px",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            width: "100%",
            fontWeight: 450,
            color: isCasePage ? "#fff" : "#000",
            fontStyle: "normal",
            textTransform: "uppercase",
            fontSize: {
              xs: "40px",
              sm: "42px",
              md: "48px",
              lg: "60px",
              xl: "75px",
            },
            fontFamily: "Futura PT",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          {t(isCasePage ? "ourCases.title2" : "ourCases.title1")}
        </Typography>
        <MyButton
          onClick={() => navigate("/cases")}
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: 0,
            border: "1px solid black",
            textTransform: "none",
            fontSize: isMobile ? "16px" : isTablet ? "18px" : "24px",
            fontWeight: 400,
            whiteSpace: "nowrap",
            py: 1,
            px: 4,
            backgroundColor: isCasePage ? "#161616" : "#fff",
            color: isCasePage ? "#fff" : "#000",
            fontFamily: "Futura PT, sans-serif",
            lineHeight: "28.8px",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            ":hover": {
              backgroundColor: isCasePage ? "#fff" : "#161616",
              color: isCasePage ? "#000" : "#fff",
            },
          }}
        >
          {t("ourCases.buttonText")}
        </MyButton>
      </Box>

      {isMobile ? (
        <>
          <Box my={isMobile ? 6 : 0}>
            <Carousel
              responsive={responsive1}
              infinite
              draggable={false}
              swipeable
              pauseOnHover
              keyBoardControl
              autoPlay
              autoPlaySpeed={7000}
              showDots={false}
              centerMode={false}
              containerClass="carousel-container"
              itemClass="carousel-item-padding"
              arrows={false}
              ref={carouselRef}
            >
              {servicesDataCarousel1.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    margin: 0.6,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    onClick={() => navigate(service.path)}
                    sx={{
                      position: "relative",
                      width: "100%",
                      cursor: "pointer",
                      "&:hover .hover-overlay": { opacity: 1 },
                    }}
                  >
                    <img
                      src={service.imageURL}
                      alt={service.title}
                      draggable="false"
                      width="100%"
                      height="100%"
                    />
                    <Box
                      className="hover-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0s",
                      }}
                    >
                      <ArrowForwardIcon
                        sx={{ color: "#fff", fontSize: "90px" }}
                      />
                    </Box>
                  </Box>
                  <Typography
                    color={isCasePage ? "#fff" : "#000"}
                    variant="h4"
                    sx={{
                      fontWeight: 450,
                      fontSize: { xs: "24px", sm: "28px", md: "30px" },
                      lineHeight: "25px",
                      fontFamily: "Futura PT",
                      textAlign: "left",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                      textTransform: "uppercase",
                      my: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
              ))}
            </Carousel>
          </Box>
          <Box>
            <Carousel
              responsive={responsive2}
              infinite
              draggable={false}
              swipeable
              pauseOnHover
              keyBoardControl
              autoPlay
              autoPlaySpeed={7000}
              showDots={false}
              centerMode={true}
              containerClass="carousel-container"
              itemClass="carousel-item-padding"
              arrows={false}
              ref={carouselRef}
            >
              {servicesDataCarousel2.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    margin: 1,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    onClick={() => navigate(service.path)}
                    sx={{
                      position: "relative",
                      width: "100%",
                      cursor: "pointer",
                      "&:hover .hover-overlay": { opacity: 1 },
                    }}
                  >
                    <img
                      src={service.imageURL}
                      alt={service.title}
                      draggable="false"
                      width="100%"
                      height="100%"
                    />
                    <Box
                      className="hover-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "opacity 0s",
                      }}
                    >
                      <ArrowForwardIcon
                        sx={{ color: "#fff", fontSize: "90px" }}
                      />
                    </Box>
                  </Box>
                  <Typography
                    color={isCasePage ? "#fff" : "#000"}
                    variant="h4"
                    sx={{
                      fontWeight: 450,
                      fontSize: { xs: "24px", sm: "28px", md: "30px" },
                      lineHeight: "25px",
                      fontFamily: "Futura PT",
                      textAlign: "left",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                      textTransform: "uppercase",
                      mt: 2,
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
              ))}
            </Carousel>
          </Box>
        </>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns={
            isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)"
          }
          gap={isMobile ? 3 : isTablet ? 4 : 5}
          px={{
            xs: "16px",
            sm: "24px",
            md: "40px",
            lg: "60px",
            xl: ["/", "/request", "/cases"].includes(window.location.pathname)
              ? "350px"
              : "60px",
          }}
        >
          {servicesData.map((service, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                onClick={() => navigate(service.path)}
                sx={{
                  position: "relative",
                  width: "100%",
                  cursor: "pointer",
                  "&:hover .hover-overlay": { opacity: 1 },
                }}
              >
                <img
                  src={service.imageURL}
                  alt={service.title}
                  draggable="false"
                  width="100%"
                  height="100%"
                />
                <Box
                  className="hover-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0s",
                  }}
                >
                  <ArrowForwardIcon sx={{ color: "#fff", fontSize: "90px" }} />
                </Box>
              </Box>
              <Typography
                color={isCasePage ? "#fff" : "#000"}
                variant="h4"
                sx={{
                  fontWeight: 450,
                  fontSize: { xs: "24px", sm: "28px", md: "30px" },
                  lineHeight: "16.2px",
                  fontFamily: "Futura PT",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  textTransform: "uppercase",
                  my: 2,
                }}
              >
                {service.title}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Cases;
