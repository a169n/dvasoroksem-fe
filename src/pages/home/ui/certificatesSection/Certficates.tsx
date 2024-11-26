import { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Dialog,
  DialogContent,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import certificate1 from "@assets/certificate1.svg";
import certificate2 from "@assets/certificate2.svg";
import certificate3 from "@assets/certificate3.svg";
import certificate4 from "@assets/certificate4.svg";
import { useTranslation } from "react-i18next";

interface Certificate {
  id: number;
  title: string;
  image: string;
}

export const Certificates = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const { t } = useTranslation();

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

  const handleLeftClick = () => {
    if (carouselRef.current) carouselRef.current.previous(1);
  };

  const handleRightClick = () => {
    if (carouselRef.current) carouselRef.current.next(1);
  };

  const handleClickOpen = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleClose = () => {
    setSelectedCertificate(null);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
        py: { xs: 2, sm: 4, md: 8 },
        textAlign: "center",
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
        }}
      >
        {t("certificates.title")}
      </Typography>

      <Carousel
        infinite
        ref={carouselRef}
        autoPlay={!isMobile}
        autoPlaySpeed={3000}
        keyBoardControl
        containerClass="carousel-container"
        draggable
        centerMode={true}
        renderDotsOutside={false}
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
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              p: 1,
              m: isMobile ? 2 : 8,
              border: "1px solid #D9D9D9",
              borderRadius: "10px",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
              "&:hover .hover-title": {
                opacity: 1,
              },
            }}
            onClick={() => handleClickOpen(certificate)}
          >
            <Box
              component="img"
              src={certificate.image}
              alt={certificate.title}
              sx={{
                width: "100%",
                height: isMobile ? "100%" : "600px",
                borderRadius: 1,
              }}
            />
            <Typography
              className="hover-title"
              sx={{
                mt: 2,
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                opacity: 0,
                transition: "opacity 0.3s",
              }}
            >
              {certificate.title}
            </Typography>
          </Box>
        ))}
      </Carousel>

      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
        <IconButton
          onClick={handleLeftClick}
          sx={{
            color: "#000",
            border: "1px solid #000",
            borderRadius: "0px",
            padding: "8px 12px",
          }}
        >
          <ArrowLeftIcon />
        </IconButton>
        <IconButton
          onClick={handleRightClick}
          sx={{
            color: "#000",
            border: "1px solid #000",
            borderRadius: "0px",
            padding: "8px 12px",
          }}
        >
          <ArrowRightIcon />
        </IconButton>
      </Stack>

      <Dialog
        open={Boolean(selectedCertificate)}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "background.default",
            width: "100%",
            height: "80vh",
            maxHeight: "90vh",
            overflow: "hidden",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 100,
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedCertificate && (
            <Box
              component="img"
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              sx={{
                maxWidth: "100vw",
                minHeight: "80vh",
                objectFit: "contain",
                transition: "all 0.5s ease",
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};