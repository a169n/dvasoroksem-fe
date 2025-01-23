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
      borderRadius: "24px",
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
  isLoading,
}) => {
  const handlePlayPause = () => onPlay(isPlaying ? null : index);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      onClick={handlePlayPause}
      sx={{
        width: "100%",
        height: "auto",
        maxHeight: isPlaying ? "auto" : isMobile ? "145vw" : "650px",
        padding: !isPlaying ? 2 : 0,
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
          height: isPlaying ? "100%" : "auto",
          position: "relative",
          overflow: "hidden",
          borderRadius: "24px",
        }}
      >
        <img
          alt="Video Preview"
          src={preview}
          style={{
            width: "100%",
            objectFit: "cover",
            filter: "brightness(70%)",
            position: "relative",
            zIndex: 1,
          }}
        />
        {isLoading && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 2,
            }}
          >
            <CircularProgress size={60} sx={{ color: "#ffffff" }} />
          </Box>
        )}
        {isPlaying && isLoaded && (
          <Suspense fallback={<VideoPlaceholder />}>
            <ReactPlayer
              url={url}
              width="100%"
              height="100%"
              playing={isPlaying}
              controls={false}
              muted={!isPlaying}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                    disablepictureinpicture: true,
                  },
                },
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 3,
                objectFit: "cover",
              }}
            />
          </Suspense>
        )}
      </Box>
      {!isPlaying && !isLoading && (
        <Typography
          my={2}
          sx={{
            fontFamily: "Futura PT, serif",
            fontSize: { xs: "24px", sm: "24px", md: "32px", xl: "35px" },
            fontWeight: 450,
            lineHeight: { xs: "28px", sm: "28px", md: "35px", xl: "38.5px" },
            letterSpacing: "-0.04em",
            textAlign: "center",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            textTransform: "uppercase",
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
  const [activeVideoDesktop, setActiveVideoDesktop] = useState(null);
  const [activeVideoMobile, setActiveVideoMobile] = useState(null);
  const [loadedVideos, setLoadedVideos] = useState<number[]>([]);
  const [loadingVideoIndex, setLoadingVideoIndex] = useState(null);
  const { t } = useTranslation();

  const videoData = [
    {
      url: QCSVideo,
      title: t("videos.qcsPartnerReview"),
      preview: QCSVideoPreview,
    },
    {
      url: BauerVideo,
      title: t("videos.bauerPartnerReview"),
      preview: BauerVideoPreview,
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

  const handleDesktopVideoPlay = (index) => {
    setActiveVideoDesktop((prevIndex) => (prevIndex !== index ? index : null));
    if (!loadedVideos.includes(index)) {
      setLoadedVideos((prev) => [...prev, index]);
    }
  };

  const handleMobileVideoPlay = (index) => {
    if (activeVideoMobile !== index) {
      setLoadingVideoIndex(index);
      setActiveVideoMobile(index);

      // Simulate loading delay
      setTimeout(() => {
        setLoadingVideoIndex(null);
        if (!loadedVideos.includes(index)) {
          setLoadedVideos((prev) => [...prev, index]);
        }
      }, 1000);
    } else {
      setActiveVideoMobile(null);
    }
  };

  return (
    <Box
      py={6}
      mb={5}
      sx={{
        position: "relative",
        px: { xs: 0, sm: 4, md: 8 },
        maxWidth: "1440px",
        mx: "auto",
      }}
    >
      {isDesktop ? (
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          {videoData.map((video, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <VideoCard
                url={video.url}
                title={video.title}
                preview={video.preview}
                isPlaying={activeVideoDesktop === index}
                onPlay={handleDesktopVideoPlay}
                index={index}
                isLoaded={loadedVideos.includes(index)}
                isLoading={false}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Carousel
          responsive={responsive}
          infinite={false}
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
                isPlaying={activeVideoMobile === index}
                onPlay={handleMobileVideoPlay}
                index={index}
                isLoaded={loadedVideos.includes(index)}
                isLoading={loadingVideoIndex === index}
              />
            </Box>
          ))}
        </Carousel>
      )}
    </Box>
  );
};
