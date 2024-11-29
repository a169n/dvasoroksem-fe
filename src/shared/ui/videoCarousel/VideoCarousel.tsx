import React, { useState, useRef } from "react";
import { Box, CircularProgress, IconButton } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface VideoCarouselProps {
  videos: string[];
}

const VideoCard = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleWaiting = () => {
    setIsLoading(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        width="307px"
        height="546px"
        controls={false}
        style={{
          borderRadius: "8px",
          objectFit: "cover",
          cursor: "pointer",
        }}
        onClick={handlePlayPause}
        onCanPlay={handleCanPlay}
        onWaiting={handleWaiting}
      />

      {isLoading && (
        <CircularProgress
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            zIndex: 1,
          }}
        />
      )}

      {!isPlaying && !isLoading && (
        <IconButton
          onClick={handlePlayPause}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
          }}
        >
          <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
        </IconButton>
      )}
    </div>
  );
};

export const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#161616",
        padding: "20px 0",
      }}
    >
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
        itemClass="carousel-item-padding-40-px"
        dotListClass="custom-dot-list-style"
      >
        {videos.map((video, index) => (
          <VideoCard key={index} src={video} />
        ))}
      </Carousel>
    </Box>
  );
};

export default VideoCarousel;
