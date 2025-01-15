import { useState, lazy, Suspense } from "react";
import {
  Box,
  Typography,
  Skeleton,
  useTheme,
  useMediaQuery,
  Grid,
  CircularProgress,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const ReactPlayer = lazy(() => import("react-player"));

import BauerVideo from "@assets/videos/Bauer.MP4";
import BauerVideoPreview from "@assets/videos/BauerPreview.webp";
import QCSVideo from "@assets/videos/QCS.MP4";
import QCSVideoPreview from "@assets/videos/QCSPreview.webp";
import NovaTravelVideo from "@assets/videos/NovaTravel.MP4";
import NovaTravelPreview from "@assets/videos/NovaTravelPreview.webp";
import ASGPreview from "@assets/videos/ASGPreview.webp";
import ASGVideo from "@assets/videos/ASG.mp4";

import { useTranslation } from "react-i18next";
import { CustomContainer } from "@shared/ui/container";

const VideoPlaceholder = () => (
  <Box
    sx={{
      width: "100%",
      height: "720px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f7f7f7",
      borderRadius: "16px",
      boxShadow: 2,
    }}
  >
    <Skeleton variant="rectangular" width="100%" height="100%" />
  </Box>
);

const VideoCard = ({
  url,
  title,
  preview,
  isPlaying,
  onPlay,
  index,
  isLoaded,
}) => {
  const handlePlayPause = () => onPlay(isPlaying ? null : index);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box
      onClick={handlePlayPause}
      sx={{
        width: "100%",
        height: isMobile ? "550px" : isXL ? "auto" : "auto",
        maxHeight: "650px",
        padding: 2,
        borderRadius: "24px",
        backgroundColor: "#f7f7f7",
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        transition: "opacity 0.5s ease, box-shadow 0.3s ease",
        zIndex: isPlaying ? 10 : 1,
        cursor: "pointer",
        "&:hover": {
          boxShadow: 4,
        },
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px",
        }}
      >
        {!isPlaying ? (
          <img
            alt="Video Preview"
            src={preview}
            style={{
              width: "100%",
              objectFit: "cover",
              filter: "brightness(70%)",
            }}
          />
        ) : !isLoaded ? (
          <CircularProgress
            size={50}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ) : (
          <Suspense fallback={<VideoPlaceholder />}>
            <ReactPlayer
              url={url}
              width="100%"
              height="auto"
              playing={isPlaying}
              controls={false}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                    disablepictureinpicture: true,
                  },
                },
              }}
            />
          </Suspense>
        )}
      </Box>
      {(!isPlaying || isMobile) && (
        <Typography
          my={2}
          sx={{
            fontFamily: "Georgia, serif",
            fontSize: { xs: "18px", sm: "20px", md: "28px", xl: "32px" },
            fontStyle: "italic",
            textAlign: "center",
            userSelect: "none",
            lineHeight: "115%",
            fontWeight: "400",
          }}
        >
          {title}
        </Typography>
      )}
    </Box>
  );
};

export const Videos = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeVideo, setActiveVideo] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState<any[]>([]);
  const { t } = useTranslation();

  const videoData = [
    {
      url: BauerVideo,
      title: t("videos.bauerPartnerReview"),
      preview: BauerVideoPreview,
    },
    {
      url: QCSVideo,
      title: t("videos.qcsPartnerReview"),
      preview: QCSVideoPreview,
    },
    {
      url: NovaTravelVideo,
      title: t("videos.novaPartnerReview"),
      preview: NovaTravelPreview,
    },
    {
      url: ASGVideo,
      title: t("videos.asgPartnerReview"),
      preview: ASGPreview,
    },
  ];

  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      partialVisibilityGutter: 90,
    },
  };

  const handleVideoPlay = (index) => {
    setActiveVideo(index);
    if (!loadedVideos.includes(index)) {
      setLoadedVideos((prev) => [...prev, index]);
    }
  };

  return (
    <CustomContainer>
      <Box
        py={6}
        mb={5}
        sx={{
          position: "relative",
          px: { xs: 0, sm: 4, md: 8 },
        }}
      >
        {isDesktop ? (
          <Grid container spacing={4}>
            {videoData.map((video, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <VideoCard
                  url={video.url}
                  title={video.title}
                  preview={video.preview}
                  isPlaying={activeVideo === index}
                  onPlay={handleVideoPlay}
                  index={index}
                  isLoaded={loadedVideos.includes(index)}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            partialVisible={isMobile}
            autoPlaySpeed={7000}
            draggable={true}
            swipeable={true}
            keyBoardControl={true}
            showDots={isMobile ? true : false}
            arrows={false}
            containerClass="carousel-container"
            centerMode={!isMobile}
            itemClass="carousel-item-spacing"
            sliderClass="carousel-slider-spacing"
          >
            {videoData.map((video, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  mb: isMobile ? 3 : 0,
                }}
              >
                <VideoCard
                  url={video.url}
                  title={video.title}
                  preview={video.preview}
                  isPlaying={activeVideo === index}
                  onPlay={handleVideoPlay}
                  index={index}
                  isLoaded={loadedVideos.includes(index)}
                />
              </Box>
            ))}
          </Carousel>
        )}
      </Box>
    </CustomContainer>
  );
};
