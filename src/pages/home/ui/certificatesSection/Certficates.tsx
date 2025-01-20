import React from "react";
import { useRef, useState } from "react";
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

// Certificate images
import certificate1 from "@assets/certificate1.webp";
import certificate2 from "@assets/certificate2.webp";
import certificate3 from "@assets/certificate3.webp";
import certificate4 from "@assets/certificate4.webp";
import Carousel from "react-multi-carousel";
import { CustomContainer } from "@shared/ui/container";
import { TransitionProps } from "@mui/material/transitions";

interface Certificate {
  id: number;
  title: string;
  image: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Certificates = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: t("certificates.honoraryDiploma"),
      image: certificate1,
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
      title: t("certificates.coffeeBoom"),
      image: certificate2,
    },
  ];

  const carouselRef = useRef<Carousel>(null);

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
                }}
              >
                {[certificates[row], certificates[row + 1]].map(
                  (certificate) => (
                    <Box
                      key={certificate.id}
                      sx={{
                        border: "1px solid #D9D9D9",
                        borderRadius: "25px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "16px",
                        width: "calc(50% - 10px)",
                        cursor: "pointer",
                        "&:hover": {
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                      onClick={() => handleOpenModal(certificate)}
                      onMouseEnter={() => setHoveredCard(certificate.id)}
                      onMouseLeave={() => setHoveredCard(null)}
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
                        sx={{
                          width: "100%",
                          backgroundColor: "rgba(255, 255, 255, 0.8)",
                          opacity: hoveredCard === certificate.id ? 1 : 0,
                          maxHeight:
                            hoveredCard === certificate.id ? "200px" : 0,
                          transition: "opacity 0.3s ease, max-height 0.3s ease",
                          overflow: "hidden",
                          textAlign: "center",
                          py: hoveredCard === certificate.id ? 1 : 0,
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
            ref={carouselRef}
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
            {certificates.map((certificate) => (
              <Box
                key={certificate.id}
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
                  onMouseEnter={() =>
                    !isMobile && setHoveredCard(certificate.id)
                  }
                  onMouseLeave={() => !isMobile && setHoveredCard(null)}
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
                      // width: "50%",
                      margin: "0 auto",

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
