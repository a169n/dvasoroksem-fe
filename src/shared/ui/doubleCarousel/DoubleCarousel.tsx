import { useState, useEffect, useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
interface DoubleCarouselProps {
  imagesLine1: string[];
  imagesLine2: string[];
}

const VISIBLE_IMAGES = 5;

const DoubleCarousel = ({ imagesLine1, imagesLine2 }: DoubleCarouselProps) => {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % imagesLine1.length);
  }, [imagesLine1.length]);

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + imagesLine1.length) % imagesLine1.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const getVisibleImages = (images: string[], currentIndex: number) => {
    const extendedImages = [...images, ...images];
    return extendedImages.slice(currentIndex, currentIndex + VISIBLE_IMAGES);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#161616",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          position: "relative",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 1s ease-in-out",
            width: "100%",
          }}
        >
          {getVisibleImages(imagesLine1, index).map((image, subIndex) => (
            <Box
              key={subIndex}
              sx={{
                maxWidth: "500px",
                maxHeight: "635px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
                mx: "5px",
              }}
            >
              <img
                src={image}
                alt={`Line 1 Image ${subIndex}`}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: isMobile ? "120px" : "",
                  objectFit: "cover",
                  transition: "transform 1s ease-in-out",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          position: "relative",
          width: "100%",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 1s ease-in-out",
            width: "100%",
          }}
        >
          {getVisibleImages(imagesLine2, index).map((image, subIndex) => (
            <Box
              key={subIndex}
              sx={{
                maxWidth: "500px",
                maxHeight: "445px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
                mx: "5px",
              }}
            >
              <img
                src={image}
                alt={`Line 2 Image ${subIndex}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  transition: "transform 1s ease-in-out",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "10px", mt: 2 }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "0px",
            padding: "8px 12px",
          }}
        >
          <ArrowLeftIcon sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "0px",
            padding: "8px 12px",
          }}
        >
          <ArrowRightIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default DoubleCarousel;
