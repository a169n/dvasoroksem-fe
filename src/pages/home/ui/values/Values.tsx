import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import value1 from "@assets/values/value1.svg";
import value2 from "@assets/values/value2.svg";
import value3 from "@assets/values/value3.svg";
import value4 from "@assets/values/value4.svg";
import value5 from "@assets/values/value5.svg"; 

import { useTranslation } from "react-i18next";

interface Value {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const Values = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { t } = useTranslation();

  const values: Value[] = [
    {
      id: 1,
      title: t("values.value1.title")     ,
      image: value1,
      description: t("values.value1.description") 
    },
    {
      id: 2,
      title: t("values.value2.title")   ,
      image: value2,
      description: t("values.value2.description") 
    },
    {
      id: 3,
      title: t("values.value3.title"),
      image: value3,
      description: t("values.value3.description") 
    },
    {
      id: 4,
      title: t("values.value4.title"),
      image: value4,
      description: t("values.value4.description")  
    },
    { id: 5,
      title: t("values.value5.title"),
      image: value5,
      description: t("values.value5.description")  }
  ];

  const carouselRef = useRef<Carousel>(null);

  const handleLeftClick = () => {
    if (carouselRef.current) carouselRef.current.previous(1);
  };

  const handleRightClick = () => {
    if (carouselRef.current) carouselRef.current.next(1);
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
        {t("values.title")}
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
            items: isMobile ? 1 : 2,
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
        {values.map((value) => (
          <Box
            key={value.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              p: 4,
              m: isMobile ? 2 : 8,
              border: "1px solid #D9D9D9",
              borderRadius: "30px",
              transition: "transform 0.3s, box-shadow 0.3s",
              
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              },
              "&:hover .hover-title": {
                display: "block",
                opacity: 1,
              },
            }}
          >
            <Box
              component="img"
              src={value.image}
              alt={value.title}
              sx={{
                height: isMobile? "100%" : "250px",
                width: "100%",
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
                opacity: 1,
                transition: "opacity 0.3s",
              }}
            >
              {value.title}
            </Typography>
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
                display: "none",

              }}
            >
              {value.description}
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

      
    </Box>
  );
};