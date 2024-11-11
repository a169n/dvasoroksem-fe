
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton, Stack } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DoubleCarousel = ({ imagesLine1, imagesLine2 }) => {
  const firstCarouselRef = useRef<Carousel>(null);
  const secondCarouselRef = useRef<Carousel>(null);

  const handleLeftClick = () => {
    if (firstCarouselRef.current) firstCarouselRef.current.previous(1);
    if (secondCarouselRef.current) secondCarouselRef.current.next(1);
  };

  const handleRightClick = () => {
    if (firstCarouselRef.current) firstCarouselRef.current.next(1);
    if (secondCarouselRef.current) secondCarouselRef.current.previous(1);
  };

  const renderCarousel = (images, ref) => (
    <Carousel
      responsive={responsive}
      infinite
      ref={ref}
      autoPlay
      autoPlaySpeed={3000}
      keyBoardControl
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      draggable={false}
      centerMode
      renderDotsOutside={false}
      showDots={false}
      arrows={false}
    >
      {images.map((src, index) => (
        <Box key={index} sx={{ padding: "0 5px" }}>
          <img
            src={src}
            alt={`Image ${index}`}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
      ))}
    </Carousel>
  );

  return (
    <Box sx={{ backgroundColor: "#161616", padding: 2, position: 'relative' }}>
      {renderCarousel(imagesLine1, firstCarouselRef)}
      {renderCarousel(imagesLine2, secondCarouselRef)}
      
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
        <IconButton
          onClick={handleLeftClick}
          sx={{
            color: "#fff",
            border: "1px solid #fff",
            padding: "8px",
            borderRadius: '50%',
          }}
        >
          <ArrowLeftIcon />
        </IconButton>
        <IconButton
          onClick={handleRightClick}
          sx={{
            color: "#fff",
            border: "1px solid #fff",
            padding: "8px",
            borderRadius: '50%',
          }}
        >
          <ArrowRightIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default DoubleCarousel;