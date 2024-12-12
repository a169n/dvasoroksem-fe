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
import { CustomContainer } from "@shared/ui/container";

interface Certificate {
  id: number;
  title: string;
  image: string;
}

export const Certificates = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: t("certificates.coffeeBoom"),
      image: certificate2,
    },
    {
      id: 2,
      title: t("certificates.gratitudeLetter"),
      image: certificate3,
    },

    {
      id: 3,
      title: t("certificates.digitalManagement"),
      image: certificate4,
    },
    {
      id: 4,
      title: t("certificates.honoraryDiploma"),
      image: certificate1,
    },
  ];

  const carouselRef = useRef<Carousel>(null);

  return (
    <CustomContainer>
      <Box
        sx={{
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
          }}
        >
          {t("certificates.title")}
        </Typography>

        {isLargeScreen ? (
          <Box
            className="parent"
            sx={{
              width: "1000px",
              margin: " 0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              gap: "8px",
            }}
          >
            <Box
              className="div1"
              sx={{
                gridRow: "span 2 / span 2",
                border: "1px solid #D9D9D9",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Box
                component="img"
                src={certificates[0].image}
                alt={certificates[0].title}
                draggable={false}
                sx={{ width: "100%", height: "auto" }}
              />
              <Typography sx={{ mt: 1, textAlign: "center" }}>
                {certificates[0].title}
              </Typography>
            </Box>

            <Box
              className="div2"
              sx={{
                border: "1px solid #D9D9D9",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Box
                component="img"
                src={certificates[1].image}
                alt={certificates[1].title}
                draggable={false}
                sx={{ width: "100%", height: "auto" }}
              />
              <Typography sx={{ mt: 1, textAlign: "center" }}>
                {certificates[1].title}
              </Typography>
            </Box>

            <Box
              className="div3"
              sx={{
                gridRow: "span 2 / span 2",
                gridColumnStart: 2,
                border: "1px solid #D9D9D9",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Box
                component="img"
                src={certificates[2].image}
                alt={certificates[2].title}
                draggable={false}
                sx={{ width: "100%", height: "auto" }}
              />
              <Typography sx={{ mt: 1, textAlign: "center" }}>
                {certificates[2].title}
              </Typography>
            </Box>

            <Box
              className="div4"
              sx={{
                gridRowStart: 3,
                border: "1px solid #D9D9D9",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Box
                component="img"
                src={certificates[3].image}
                alt={certificates[3].title}
                draggable={false}
                sx={{ width: "100%", height: "auto" }}
              />
              <Typography sx={{ mt: 1, textAlign: "center" }}>
                {certificates[3].title}
              </Typography>
            </Box>
          </Box>
        ) : (
          <Carousel
            infinite
            ref={carouselRef}
            autoPlay={!isMobile}
            autoPlaySpeed={7000}
            keyBoardControl
            containerClass="carousel-container"
            draggable
            centerMode={!isMobile}
            showDots={false}
            arrows={false}
            responsive={{
              largeDesktop: {
                breakpoint: { max: 3000, min: 1280 },
                items: 1,
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
                  width: "90%",
                  minHeight: isMobile ? "60vh" : "initial",
                  mx: "auto",
                }}
              >
                <Box
                  onMouseEnter={() =>
                    !isMobile && setHoveredCard(certificate.id)
                  }
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
                  sx={{
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
                      height: "500px",
                    }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      height:
                        hoveredCard === certificate.id || isMobile ? "auto" : 0,
                      opacity:
                        hoveredCard === certificate.id || isMobile ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      textAlign: "center",
                      py:
                        hoveredCard === certificate.id || isMobile
                          ? { xs: 0.5, sm: 1, md: 2 }
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
                        textAlign: "center",
                        opacity:
                          hoveredCard === certificate.id || isMobile ? 1 : 0,
                      }}
                    >
                      {certificate.title}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Carousel>
        )}
      </Box>
    </CustomContainer>
  );
};
