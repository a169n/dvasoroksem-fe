import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Dialog,
  IconButton,
  CircularProgress,
  Slide,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import certificate1 from "@assets/certificate1.webp";
import certificate2 from "@assets/certificate2.webp";
import certificate3 from "@assets/certificate3.webp";
import certificate4 from "@assets/certificate4.webp";
import Carousel from "react-multi-carousel";
import { CustomContainer } from "@shared/ui/container";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Certificate {
  title: string;
  image: string;
}

export const Certificates = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const { t } = useTranslation();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [loading, setLoading] = useState(false);

  const certificates: Certificate[] = [
    { title: t("certificates.honoraryDiploma"), image: certificate1 },
    { title: t("certificates.gratitudeLetter"), image: certificate3 },
    { title: t("certificates.digitalManagement"), image: certificate4 },
    { title: t("certificates.coffeeBoom"), image: certificate2 },
  ];

  const handleOpenModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setOpenModal(true);
    setLoading(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      <Box
        sx={{
          py: { xs: 2, sm: 4, md: 8 },
          textAlign: "center",
          mb: { xs: 4, sm: 6, md: 10 },
        }}
      >
        <CustomContainer>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 450,
              color: "#000",
              textTransform: "uppercase",
              textAlign: "left",
              fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "75px" },
              mb: { xs: 2, sm: 3, md: 5 },
            }}
          >
            {t("certificates.title")}
          </Typography>
        </CustomContainer>

        {isLargeScreen ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              margin: "0 auto",
              px: { xl: "350px" },
              gap: "20px",
            }}
          >
            {[0, 2].map((row) => (
              <Box
                key={row}
                sx={{
                  display: "flex",
                  width: row === 0 ? "100%" : "70%",
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                {[certificates[row], certificates[row + 1]].map(
                  (certificate) => (
                    <Box
                      key={certificate.id}
                      onMouseEnter={() => setHoveredCard(certificate.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      sx={{
                        border: "1px solid #D9D9D9",
                        borderRadius: "24px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "25px 20px",
                        width: "calc(50% - 10px)",
                        backgroundColor: "#f7f7f7",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        transition:
                          "box-shadow 0.3s ease-in-out, height 0.3s ease-in-out",
                        cursor: "pointer",
                        height:
                          hoveredCard === certificate.id
                            ? "100%"
                            : "fit-content", // Only hovered card changes
                        "&:hover": {
                          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                          "& .content": {
                            maxHeight: "200px",
                            opacity: 1,
                          },
                        },
                      }}
                      onClick={() => handleOpenModal(certificate)}
                    >
                      <Box
                        component="img"
                        src={certificate.image}
                        alt={certificate.title}
                        draggable={false}
                        sx={{
                          width: "80%",
                          height: "auto",
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        className="content"
                        sx={{
                          width: "100%",
                          backgroundColor: "#f7f7f7",
                          opacity: hoveredCard === certificate.id ? 1 : 0,
                          maxHeight:
                            hoveredCard === certificate.id ? "200px" : 0,
                          transition: "opacity 0.3s ease, max-height 0.3s ease",
                          overflow: "hidden",
                          textAlign: "center",
                          py: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "35px",
                            fontWeight: 450,
                            transition: "opacity 0.1s ease",
                            lineHeight: "38px",
                          }}
                        >
                          {certificate.title}
                        </Typography>
                      </Box>
                    </Box>
                  )
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <Carousel
            infinite
            // ref={carouselRef}
            autoPlay={!isMobile}
            autoPlaySpeed={7000}
            keyBoardControl
            partialVisible={isMobile}
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
                items: 1,
              },
              smallDevices: {
                breakpoint: { max: 720, min: 0 },
                items: 1,
                partialVisibilityGutter: 90,
              },
            }}
          >
            {certificates.map((certificate, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "90%",
                  minHeight: isMobile ? "60vh" : "initial",
                  mx: "auto",
                }}
              >
                <Box
                  onClick={() => handleOpenModal(certificate)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  sx={{
                    width: "auto",
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
                      width: "auto",
                      height: "auto",
                      maxHeight: "480px",
                      margin: "0 auto",
                    }}
                  />
                  <Box
                    sx={{
                      margin: "0 auto",
                      height: hoveredIndex === index || isMobile ? "auto" : 0,
                      opacity: hoveredIndex === index || isMobile ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      textAlign: "center",
                      py:
                        hoveredIndex === index || isMobile
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
                        textAlign: "center",
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

      {/* Modal for displaying certificate */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="lg"
        fullWidth
        TransitionComponent={Transition}
        sx={{
          "& .MuiDialog-paper": {
            margin: 0,
            width: "auto",
            maxHeight: "90vh",
          },
        }}
      >
        <Box sx={{ position: "relative", p: 2 }}>
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "grey",
              backgroundColor: "transparent",
              border: "1px solid #D9D9D9",
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedCertificate && (
            <>
              {loading && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "40vh",
                    minWidth: "40vh",
                  }}
                >
                  <CircularProgress color="secondary" />
                </Box>
              )}
              <Box
                component="img"
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                draggable={false}
                onLoad={() => setLoading(false)}
                sx={{
                  display: loading ? "none" : "block",
                  height: { xs: "50%", lg: "80vh" },
                  minWidth: { xs: "100vw", md: "20vw" },
                  minHeight: { xs: "30vh", lg: "80vh" },
                  maxHeight: "80vh",
                  maxWidth: "80vw",
                  objectFit: "contain",
                  margin: "0 auto",
                }}
              />
            </>
          )}
        </Box>
      </Dialog>
    </>
  );
};
