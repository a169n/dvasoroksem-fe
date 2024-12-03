import { useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

// Certificate images
import certificate1 from "@assets/certificate1.svg";
import certificate2 from "@assets/certificate2.svg";
import certificate3 from "@assets/certificate3.svg";
import certificate4 from "@assets/certificate4.svg";
import Carousel from "react-multi-carousel";

interface Certificate {
  id: number;
  title: string;
  image: string;
}

export const Certificates = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: t("certificates.gratitudeLetter"),
      image: certificate1,
    },
    {
      id: 2,
      title: t("certificates.honoraryDiploma"),
      image: certificate2,
    },
    {
      id: 3,
      title: t("certificates.coffeeBoom"),
      image: certificate3,
    },
    {
      id: 4,
      title: t("certificates.digitalManagement"),
      image: certificate4,
    },
  ];

  const carouselRef = useRef<Carousel>(null);

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 2, sm: 4, md: 8 },
        textAlign: "center",
        mb: { xs: 4, sm: 6, md: 10 },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 500,
          color: "#000",
          textTransform: "uppercase",
          textAlign: "left",
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
        centerMode={true}
        showDots={false}
        arrows={false}
        responsive={{
          largeDesktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: isMobile ? 1 : 1,
          },
          mediumDesktop: {
            breakpoint: { max: 1280, min: 960 },
            items: isMobile ? 1 : 2,
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
            onMouseEnter={() => !isMobile && setHoveredCard(certificate.id)}
            onMouseLeave={() => !isMobile && setHoveredCard(null)}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              mx: "auto",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              padding: { xs: 0.5, sm: 1, md: 2 },
              border: "1px solid #D9D9D9",
              borderRadius: "10px",
              transition: "all 0.3s ease",
              position: "relative",
              "&:hover": {
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box
              component="img"
              src={certificate.image}
              alt={certificate.title}
              draggable={false}
              sx={{
                display: "block",
                width: "100%",
                maxHeight: "500px",
              }}
            />
            <Box
              sx={{
                width: "100%",
                maxWidth: "350px",
                height: isMobile || hoveredCard === certificate.id ? "auto" : 0,
                opacity: isMobile || hoveredCard === certificate.id ? 1 : 0,
                overflow: "hidden",
                transition: "all 0.3s ease",
                textAlign: "center",
                py:
                  isMobile || hoveredCard === certificate.id
                    ? { xs: 0.5, sm: 1, md: 1.5 }
                    : 0,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  transition: "opacity 0.3s ease",
                  opacity: isMobile || hoveredCard === certificate.id ? 1 : 0,
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
