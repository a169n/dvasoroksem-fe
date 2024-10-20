import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import certificate1 from "@assets/certificate1.svg";
import certificate2 from "@assets/certificate2.svg";
import certificate3 from "@assets/certificate3.svg";

const certificates = [
  {
    id: 1,
    title: "Honorary Diploma",
    image: certificate1,
  },
  {
    id: 2,
    title: "Coffee BOOM Certificate",
    image: certificate2,
  },
  {
    id: 3,
    title: "Gratitude Letter",
    image: certificate3,
  },
];

const SLIDE_INTERVAL = 3000; // Auto-slide interval in milliseconds

export const Certificates = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedCertificate, setSelectedCertificate] = useState<{
    id: number;
    title: string;
    image: string;
  } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNext, SLIDE_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [isPaused, handleNext]);

  const handleClickOpen = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleClose = () => {
    setSelectedCertificate(null);
  };

  return (
    <Box 
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        px: { xs: 2, sm: 4, md: 8 }, py: { xs: 2, sm: 4, md: 8 }
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
          textAlign: "start",
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
        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: "absolute",
            left: { xs: 0, md: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            boxShadow: 2,
            "&:hover": {
              bgcolor: "background.paper",
              transform: "translateY(-50%) scale(1.1)",
            },
            transition: "transform 0.3s ease",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: { xs: 0, md: 20 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            boxShadow: 2,
            "&:hover": {
              bgcolor: "background.paper",
              transform: "translateY(-50%) scale(1.1)",
            },
            transition: "transform 0.3s ease",
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        {/* Certificates Container */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            py: 4,
            mx: "auto",
            maxWidth: "100%",
          }}
        >
          {[-1, 0, 1].map((offset) => {
            const index =
              (currentIndex + offset + certificates.length) %
              certificates.length;
            const certificate = certificates[index];

            return (
              <Box
                key={certificate.id}
                onClick={() => offset === 0 && handleClickOpen(certificate)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                  transition: "all 0.3s ease",
                  cursor: offset === 0 ? "pointer" : "default",
                  transform: offset === 0 ? "scale(1)" : "scale(0.8)",
                  opacity: offset === 0 ? 1 : 0.6,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 2,
                  ...(offset === 0 && {
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }),
                }}
              >
                <Box
                  component="img"
                  src={certificate.image}
                  alt={certificate.title}
                  sx={{
                    width: { xs: 280, sm: 320, md: 400 },
                    height: { xs: 360, sm: 400, md: 500 },
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Full-width Dialog */}
      <Dialog
        open={!!selectedCertificate}
        onClose={handleClose}
        maxWidth={false}
        PaperProps={{
          sx: {
            width: "95vw",
            height: "95vh",
            maxWidth: "none",
            m: 0,
          },
        }}
      >
        <DialogContent sx={{ position: "relative", p: 0 }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              bgcolor: "background.paper",
              "&:hover": {
                bgcolor: "background.paper",
                transform: "scale(1.1)",
              },
              transition: "transform 0.2s ease",
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedCertificate && (
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Certificates;
