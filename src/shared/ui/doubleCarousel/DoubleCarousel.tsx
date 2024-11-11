import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton, Stack, useMediaQuery } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useTheme } from "@mui/material/styles";

const DoubleCarousel = ({ imagesLine1, imagesLine2 }) => {
  const firstCarouselRef = useRef<Carousel>(null);
  const secondCarouselRef = useRef<Carousel>(null);
  const centerMode1 = true;
  const centerMode2 = false;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLeftClick = () => {
    if (firstCarouselRef.current) firstCarouselRef.current.previous(1);
    if (secondCarouselRef.current) secondCarouselRef.current.next(1);
  };

  const handleRightClick = () => {
    if (firstCarouselRef.current) firstCarouselRef.current.next(1);
    if (secondCarouselRef.current) secondCarouselRef.current.previous(1);
  };

  const renderCarousel = (images, ref, centerMode) => (
    <Carousel
      infinite
      ref={ref}
      autoPlay={!isMobile}
      autoPlaySpeed={3000}
      keyBoardControl
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      draggable={!isMobile}
      centerMode={isMobile ? true : centerMode}
      renderDotsOutside={false}
      showDots={false}
      arrows={false}
      responsive={{
        largeDesktop: {
          breakpoint: { max: 3000, min: 1280 },
          items: isMobile ? 1 : 5,
        },
        mediumDesktop: {
          breakpoint: { max: 1280, min: 960 },
          items: isMobile ? 1 : 4,
        },
        smallDesktop: {
          breakpoint: { max: 960, min: 720 },
          items: isMobile ? 1 : 3,
        },
        smallDevices: {
          breakpoint: { max: 720, min: 0 },
          items: 1,
        },
      }}
    >
      {images.map((src, index) => (
        <Box key={index} sx={{ padding: "0 5px" }}>
          <img
            src={src}
            alt={`Image`}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
              display: isMobile ? "block" : "inline",
              marginBottom: "30px",
            }}
          />
        </Box>
      ))}
    </Carousel>
  );

  return (
    <Box sx={{ backgroundColor: "#161616", padding: 2, position: "relative" }}>
      {renderCarousel(imagesLine1, firstCarouselRef, centerMode1)}

      {/* Added gap between carousel lines */}
      <Box sx={{ height: isMobile ? "10px" : "20px" }} />

      {renderCarousel(imagesLine2, secondCarouselRef, centerMode2)}

      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
        <IconButton
          onClick={handleLeftClick}
          sx={{
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "0px",
            padding: "8px 12px",
            pointerEvents: "all",
          }}
        >
          <ArrowLeftIcon />
        </IconButton>
        <IconButton
          onClick={handleRightClick}
          sx={{
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "0px",
            padding: "8px 12px",
            pointerEvents: "all",
          }}
        >
          <ArrowRightIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default DoubleCarousel;
