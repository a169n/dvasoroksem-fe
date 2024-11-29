import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";

import certificate1 from "@assets/certificate1.svg";
import certificate2 from "@assets/certificate2.svg";
import certificate3 from "@assets/certificate3.svg";
import certificate4 from "@assets/certificate4.svg";

interface Certificate {
  id: number;
  title: string;
  image: string;
  dimensions: {
    maxWidth: string;
    maxHeight: string;
  };
}

export const Certificates = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const carouselRef = useRef<Carousel>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: t("certificates.gratitudeLetter"),
      image: certificate1,
      dimensions: {
        maxWidth: "435px",
        maxHeight: "303px",
      },
    },
    {
      id: 2,
      title: t("certificates.honoraryDiploma"),
      image: certificate2,
      dimensions: {
        maxWidth: "307px",
        maxHeight: "435px",
      },
    },
    {
      id: 3,
      title: t("certificates.coffeeBoom"),
      image: certificate3,
      dimensions: {
        maxWidth: "432px",
        maxHeight: "306px",
      },
    },
    {
      id: 4,
      title: t("certificates.digitalManagement"),
      image: certificate4,
      dimensions: {
        maxWidth: "307px",
        maxHeight: "435px",
      },
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
        py: { xs: 2, sm: 4, md: 8 },
        textAlign: "left",
        userSelect: "none",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 400,
          color: "#000",
          textTransform: "uppercase",
          fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "64px" },
          mb: { xs: 2, sm: 3, md: 5 },
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        {t("certificates.title")}
      </Typography>

      <Carousel
        infinite
        ref={carouselRef}
        autoPlay={!isMobile}
        autoPlaySpeed={7000}
        keyBoardControl
        containerClass="carousel-container"
        draggable
        centerMode={false} // Disable center mode for even gaps
        renderDotsOutside={false}
        showDots={false}
        arrows={false}
        responsive={{
          largeDesktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 2,
          },
          mediumDesktop: {
            breakpoint: { max: 1280, min: 960 },
            items: 2,
          },
          smallDevices: {
            breakpoint: { max: 720, min: 0 },
            items: 1,
          },
        }}
      >
        {certificates.map((certificate) => (
          <Box
            key={certificate.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: isMobile ? 1 : 2,
              margin: isMobile ? 1 : 1.5, 
              backgroundColor: "#f7f7f7",
              width: isMobile ? "90%" : certificate.dimensions.maxWidth, 
              height: isMobile ? "auto" : certificate.dimensions.maxHeight,
              borderRadius: "12px",
              cursor: "pointer",
              border: "1px solid #D9D9D9",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
              "&:hover .hover-title": !isMobile
                ? { opacity: 1 }
                : undefined,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                width: "100%",
                height: "100%",
              }}
            >
              <LazyLoadImage
                alt={certificate.title}
                effect="blur"
                src={certificate.image}
                style={{
                  maxWidth: isMobile ? "90%" : certificate.dimensions.maxWidth, // Smaller images for mobile
                  maxHeight: certificate.dimensions.maxHeight,
                  objectFit: "contain", // Adjust image to fit properly
                  borderRadius: "8px",
                  pointerEvents: "none",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
                mt: 2,
              }}
            >
              <Typography
                className="hover-title"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  opacity: isMobile ? 1 : 0,
                  transition: "opacity 0.3s",
                  textAlign: "center",
                }}
              >
                {certificate.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
