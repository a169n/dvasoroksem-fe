import { useState, useEffect, useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface DoubleCarouselProps {
  imagesLine1: string[];
  imagesLine2: string[];
}

const DoubleCarousel = ({ imagesLine1, imagesLine2 }: DoubleCarouselProps) => {
  const [line1Index, setLine1Index] = useState(0);
  const [line2Index, setLine2Index] = useState(0);

  const handleNext = useCallback(() => {
    setLine1Index((prevIndex) =>
      prevIndex === imagesLine1.length - 1 ? 0 : prevIndex + 1
    );
    setLine2Index((prevIndex) =>
      prevIndex === imagesLine2.length - 1 ? 0 : prevIndex + 1
    );
  }, [imagesLine1, imagesLine2]);

  const handlePrev = () => {
    setLine1Index((prevIndex) =>
      prevIndex === 0 ? imagesLine1.length - 1 : prevIndex - 1
    );
    setLine2Index((prevIndex) =>
      prevIndex === 0 ? imagesLine2.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [handleNext]);

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
          gap: "5px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 1s ease-in-out",
            transform: `translateX(-${line1Index * (175 + 5)}px)`,
            width: "100%",
          }}
        >
          {imagesLine1.map((image, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: "301.58px",
                maxHeight: "537.17px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
                mx: "5px",
              }}
            >
              <img
                src={image}
                alt={`Line 1 Image ${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
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
          gap: "5px",
          marginTop: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 1s ease-in-out",
            transform: `translateX(${line2Index * (150 + 5)}px)`,
            width: "100%",
          }}
        >
          {imagesLine2.map((image, index) => (
            <Box
              key={index}
              sx={{
                maxWidth: "301.58px",
                maxHeight: "376.98px",
                width: "100%",
                height: "auto",
                objectFit: "contain",
                mx: "5px",
              }}
            >
              <img
                src={image}
                alt={`Line 2 Image ${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
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
