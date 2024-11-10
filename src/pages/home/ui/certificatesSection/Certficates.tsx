import { useState, useEffect, useCallback } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import certificate1 from "@assets/certificate1.svg";
import certificate2 from "@assets/certificate2.svg";
import certificate3 from "@assets/certificate3.svg";
import { ArrowLeftIcon, ArrowRightIcon } from "@mui/x-date-pickers";

interface Certificate {
  id: number;
  title: string;
  image: string;
  description: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Honorary Diploma",
    image: certificate1,
    description: "Сотрудничество в организации конкурса",
  },
  {
    id: 2,
    title: "Coffee BOOM Certificate",
    image: certificate2,
    description: "Благодарственное письмо о плодотворном сотрудничестве",
  },
  {
    id: 3,
    title: "Gratitude Letter",
    image: certificate3,
    description: "Помощь при съемке фильма 'Портрет Софи'",
  },
];

const SLIDE_INTERVAL = 5000; // Adjust interval for smoother transitions

export const Certificates = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  const handleNext = useCallback(() => {
    setSlideDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handlePrevious = () => {
    setSlideDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNext, SLIDE_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [isPaused, handleNext]);

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
        maxWidth: "100vw",
        margin: "0 auto",
        overflow: "hidden",
        px: { xs: 2, sm: 4, md: 8 },
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
        СЕРТИФИКАТЫ
      </Typography>
  
      <Box
        sx={{
          position: "relative",
          px: { xs: 2, md: 6 },
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            py: 4,
            mx: "auto",
            transition: "transform 0.5s ease",
            flexDirection: isMobile ? "column" : "row", // For mobile stacking
          }}
        >
          {[-1, 0, 1].map((offset) => {
            // Display only the current item for mobile
            if (isMobile && offset !== 0) return null;
            
            const index =
              (currentIndex + offset + certificates.length) % certificates.length;
            const certificate = certificates[index];
  
            return (
              <Box
                key={certificate.id}
                onClick={() => offset === 0 && handleClickOpen(certificate)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: offset === 0 ? "pointer" : "default",
                  transform: `scale(${offset === 0 ? 1 : 0.8}) 
                   translateX(${
                     (offset === 0 ? 0 : offset === -1 ? -100 : 100) +
                     (slideDirection === "right" ? offset * -20 : offset * -20)
                   }%)`,
                  opacity: offset === 0 ? 1 : 0.6,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 2,
                  position: "relative",
                  width: { xs: "100%", md: offset === 0 ? "70%" : "40%" }, // Full width on mobile
                  zIndex: offset === 0 ? 2 : 1,
                  willChange: "transform, opacity, box-shadow",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 2,
                    transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    background: "rgba(0, 0, 0, 0.1)",
                    opacity: 0,
                  },
                  ...(offset === 0 && {
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                      "&::before": {
                        opacity: 1,
                      },
                    },
                    "&:active": {
                      transform: "scale(0.98)",
                      transition: "transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
                    },
                  }),
                }}
              >
                <Box
                  component="img"
                  src={certificate.image}
                  alt={certificate.title}
                  sx={{
                    width: "100%",
                    height: isMobile ? "auto" : "700px", // Adjust height for mobile
                    borderRadius: 1,
                  }}
                />
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    opacity: offset === 0 ? 1 : 0.7,
                  }}
                >
                  {certificate.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: isMobile ? "20px" : "50px", 
            justifyContent: "center",
            width: "100%",
            transform: "translateY(-50%)",
            zIndex: 1,
            pointerEvents: "none",
            gap: "10px",
          }}
        >
          <IconButton
            onClick={handlePrevious}
            sx={{
              color: "#000",
              border: "1px solid #000",
              borderRadius: "0px",
              padding: "8px 12px",
              pointerEvents: "all",
            }}
          >
            <ArrowLeftIcon sx={{ color: "#000" }} />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              color: "#000",
              border: "1px solid #000",
              borderRadius: "0px",
              padding: "8px 12px",
              pointerEvents: "all",
            }}
          >
            <ArrowRightIcon sx={{ color: "#000" }} />
          </IconButton>
        </Box>
      </Box>
  
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
