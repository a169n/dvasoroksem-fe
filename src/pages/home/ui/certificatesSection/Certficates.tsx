import { useState, useEffect, useCallback } from "react";
import {
  Box,
  IconButton,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CloseIcon from "@mui/icons-material/Close";
import certificate1 from "@assets/certificate1.svg";
import certificate2 from "@assets/certificate2.svg";
import certificate3 from "@assets/certificate3.svg";

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

const SLIDE_INTERVAL = 3000;

export const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

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

  const handleButtonClick = (direction: string) => {
    const button =
      direction === "left"
        ? document.getElementById("prev-button")
        : document.getElementById("next-button");
    if (button) {
      button.style.transform = "scale(1.1)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 300); // Reset scale after 300ms
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 2, sm: 4, md: 8 },
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
          overflow: "visible",
          px: { xs: 2, md: 6 },
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <IconButton
          id="prev-button"
          onClick={() => {
            handlePrevious();
            handleButtonClick("left");
          }}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            boxShadow: 2,
            "&:hover": {
              bgcolor: "background.paper",
              transform: "translateY(-50%) scale(1.1)",
            },
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          id="next-button"
          onClick={() => {
            handleNext();
            handleButtonClick("right");
          }}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            bgcolor: "background.paper",
            boxShadow: 2,
            "&:hover": {
              bgcolor: "background.paper",
              transform: "translateY(-50%) scale(1.1)",
            },
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 4 },
            py: 4,
            mx: "auto",
            maxWidth: "100%",
            overflowX: "hidden",
            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
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
                sx={{
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: offset === 0 ? "pointer" : "default",
                  transform: `scale(${offset === 0 ? 1 : 0.7}) 
                    translateX(${slideDirection === "right" ? -offset * 10 : offset * 10}%)`,
                  opacity: offset === 0 ? 1 : 0.6,
                  bgcolor: "background.paper",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 2,
                  position: "relative",
                  zIndex: offset === 0 ? 2 : 1,
                  ...(offset === 0 && {
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }),
                  width: offset === 0 ? "50%" : "40%",
                  textAlign: "center",
                }}
              >
                <Box
                  component="img"
                  src={certificate.image}
                  alt={certificate.title}
                  sx={{
                    width: { xs: 280, sm: 320, md: 400 },
                    height: { xs: 360, sm: 400, md: 500 },
                    objectFit: "contain",
                    borderRadius: 1,
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: { xs: "20px", sm: "22px", md: "24px" },
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
            height: "80vh",
            maxHeight: "90vh",
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
                maxWidth: "100%",
                maxHeight: "100%",
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
