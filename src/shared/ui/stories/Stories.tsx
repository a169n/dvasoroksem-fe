import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Box } from "@mui/material";
interface StoriesProps {
  stories: string[];
}

export const Stories = ({ stories }: StoriesProps) => {
  return (
    <Box sx={{backgroundColor: "#161616"}}>
      <Swiper
        modules={[Navigation, Pagination, EffectCube]}
        navigation
        pagination={{ clickable: true }}
        effect="cube"
        centeredSlides
        style={{ width: 300, height: 300 }}
      >
        {stories.map((story, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${story})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ))}
      </Swiper>
    </Box>
  );
};
