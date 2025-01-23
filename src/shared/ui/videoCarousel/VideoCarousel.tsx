import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  useMediaQuery,
} from "@mui/material";
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
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoading(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleWaiting = () => {
    setIsLoading(true);
  };

  const handleLoadedMetadata = () => {
    setIsLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        boxSizing: "border-box",
        position: "relative",
        marginBottom: "25px",
        minHeight: "546px",
      }}
    >
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        width="307px"
        height="546px"
        controls={false}
        poster=""
        style={{
          objectFit: "cover",
          cursor: "pointer",
          border: "2px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
        }}
        onClick={handlePlayPause}
        onPlay={handlePlay}
        onPause={handlePause}
        onCanPlay={handleCanPlay}
        onWaiting={handleWaiting}
        onLoadedMetadata={handleLoadedMetadata}
      />

      {isLoading && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "307px",
            height: "auto",
            bgcolor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "inherit",
          }}
        >
          <CircularProgress
            sx={{
              zIndex: 1,
            }}
          />
        </Box>
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

export const CustomDot = ({
  onClick,
  ...rest
}: {
  onClick?: () => void;
  active?: boolean;
}) => {
  const { active } = rest;
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: active ? "white" : "gray",
        borderRadius: "50%",
        width: "10px",
        height: "10px",
        minWidth: "10px",
        margin: "0 5px",
        padding: "0",
      }}
    />
  );
};

export const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

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
        swipeable
        draggable
        showDots={isSmallScreen}
        customDot={<CustomDot />}
        responsive={responsive}
        ssr
        infinite
        keyBoardControl
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
