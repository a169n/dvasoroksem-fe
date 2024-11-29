import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube } from "swiper/modules";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Box } from "@mui/material";

interface StoriesProps {
  stories: string[];
}

export const Stories = ({ stories }: StoriesProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#161616",
        position: "relative",
        paddingTop: "50px",
      }}
    >
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, EffectCube]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{ delay: 7000 }}
        loop={true}
        effect="cube"
        centeredSlides
        style={{
          width: isMobile ? "100%" : "350px",
          height: isMobile ? "300px" : "600px",
          objectFit: "cover",
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
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
    </Box>
  );
};
