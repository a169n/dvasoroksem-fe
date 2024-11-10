import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Box, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

interface StoriesProps {
  stories: string[];
}

export const Stories = ({ stories }: StoriesProps) => {
  // Refs for navigation elements
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <Box sx={{ backgroundColor: "#161616", position: "relative" }}>
      <Swiper
        modules={[Navigation, Pagination, EffectCube]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{ delay: 7000 }}
        loop={true}
        effect="cube"
        centeredSlides
        style={{ height: "900px", width: "500px" }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== 'boolean') {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }
        }}
      >
        {stories.map((story, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${story})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "50px",
            }}
          />
        ))}
      </Swiper>

      <Box
        sx={{
          display: "flex",
          marginTop: "50px",
          justifyContent: "center",
          width: "100%",
          transform: "translateY(-50%)",
          zIndex: 1,
          pointerEvents: "none", 
          gap: "10px"
        }}
      >
        <IconButton
          ref={prevRef}
          sx={{
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "0px",
            padding: "8px 12px",
            pointerEvents: "all" 
          }}
        >
          <ArrowLeftIcon sx={{ color: "#fff" }} />
        </IconButton>
        <IconButton
          ref={nextRef}
          sx={{
            color: "#fff",
            border: "1px solid #fff",
            borderRadius: "0px",
            padding: "8px 12px",
            pointerEvents: "all"  
          }}
        >
          <ArrowRightIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
};