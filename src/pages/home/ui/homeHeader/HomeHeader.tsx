import React, { useState, useEffect, useRef, Suspense } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-marquee-slider";
import MuteIcon from "@mui/icons-material/VolumeOff";
import UnmuteIcon from "@mui/icons-material/VolumeUp";
import { useTranslation } from "react-i18next";

const ReactPlayer = React.lazy(() => import("react-player/lazy"));

let showreelSrc: string | null = null;

import icon1 from "@assets/icons/icon1.svg";
import icon2 from "@assets/icons/icon2.svg";
import icon3 from "@assets/icons/icon3.svg";
import icon4 from "@assets/icons/icon4.svg";
import icon5 from "@assets/icons/icon5.svg";
import icon6 from "@assets/icons/icon6.svg";
import icon7 from "@assets/icons/icon7.svg";
import icon8 from "@assets/icons/icon8.svg";
import { CustomContainer } from "@shared/ui/container";

const loadShowreel = async () => {
  if (!showreelSrc) {
    const videoModule = await import("@assets/videos/main_showreel.mp4");
    showreelSrc = videoModule.default;
  }
  return showreelSrc;
};

const ICONS = [
  { src: icon1, alt: "Icon1" },
  { src: icon2, alt: "Icon2" },
  { src: icon3, alt: "Icon3" },
  { src: icon4, alt: "Icon4" },
  { src: icon5, alt: "Icon5" },
  { src: icon6, alt: "Icon6" },
  { src: icon7, alt: "Icon7" },
  { src: icon8, alt: "Icon8" },
];

export const HomeHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const { t } = useTranslation();
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showreel, setShowreel] = useState<string | null>("");

  const videoRef = useRef(null);

  // Load video asset only once
  useEffect(() => {
    loadShowreel().then(setShowreel);
  }, []);

  // Monitor video visibility with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAspectRatio = () => {
    return isMobile ? "56.25%" : "calc((9/16) * 67%)";
  };

  const getIconDimensions = () => {
    if (isMobile) return { width: "70px", height: "20px" };
    if (isTablet) return { width: "120px", height: "35px" };
    return { width: "160px", height: "50px" };
  };

  // Shared styles
  const sharedBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconSize = getIconDimensions();

  return (
    <Box
      mt={isMobile ? 7 : 8}
      sx={{
        backgroundColor: "#fff",
        color: "white",
        textAlign: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          ...sharedBoxStyles,
          flexDirection: "column",
          width: "100%",
        }}
      >
        {/* Video Section */}
        <Box
          ref={videoRef}
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: getAspectRatio(),
            overflow: "hidden",
          }}
        >
          <Suspense
            fallback={
              <CircularProgress
                color="secondary"
                size={60}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              />
            }
          >
            {showreel && (
              <ReactPlayer
                url={showreel}
                playing={isVisible}
                muted={isMuted}
                loop
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  objectFit: "cover",
                }}
              />
            )}
          </Suspense>

          {/* Mute/Unmute Button */}
          <IconButton
            onClick={() => setIsMuted((prev) => !prev)}
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "white",
              zIndex: 3,
              ":hover": {
                backgroundColor: "rgba(0,0,0,0.8)",
              },
            }}
          >
            {isMuted ? <MuteIcon /> : <UnmuteIcon />}
          </IconButton>
        </Box>

        {/* Marquee Section */}
        <Box
          sx={{
            backgroundColor: "#d9d9d9",
            mx: { xs: 0, md: 4 },
            py: isMobile ? 0 : 2,
            width: "100%",
          }}
        >
          <Marquee
            velocity={isMobile ? 10 : 20}
            direction="rtl"
            resetAfterTries={100}
            scatterRandomly={false}
            onInit={() => {}}
            onFinish={() => {}}
          >
            {ICONS.map((icon, index) => (
              <Box
                key={index}
                mt={isMobile ? 1 : 0}
                mx={isMobile ? 2 : 8}
                sx={{ ...sharedBoxStyles }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  draggable="false"
                  style={{
                    ...iconSize,
                    filter: "brightness(0) invert(1)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                />
              </Box>
            ))}
          </Marquee>
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            width: 1,
            color: "#000",
            display: "flex",
            flexDirection: isXl ? "column" : "row",
            alignItems: "center",
            justifyContent: isXl ? "center" : "space-between",
            textAlign: isXl ? "center" : "left",
            margin: {
              xs: "20px 0 50px 0",
              sm: "30px 0 70px 0",
              md: "40px 0 100px 0",
              lg: "50px 0 120px 0",
              xl: "52px 0 118px 0",
            },
            px: {
              xs: "18px",
              sm: "30px",
              md: "120px",
              lg: "220px",
            },
          }}
        >
          {/* Agency Text */}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <Typography
              variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
              component="h1"
              fontSize={isMobile ? "36px" : isTablet ? "48px" : "70px"}
              fontWeight={500}
              mb={2}
              sx={{ textTransform: "uppercase" }}
            >
              {isXl
                ? t("hero.leadingMarketingAgency")
                : t("hero.leadingMarketingAgency1")}
            </Typography>
            {!isXl && (
              <Typography
                variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                component="h1"
                fontSize={isMobile ? "36px" : isTablet ? "48px" : "70px"}
                fontWeight={500}
                mb={2}
                sx={{ textTransform: "uppercase" }}
              >
                {t("hero.leadingMarketingAgency2")}
              </Typography>
            )}
          </Box>

          {/* Description Text */}
          <Box
            sx={{
              maxWidth: isXl ? "700px" : "500px",
              fontSize: "22px",
              fontWeight: 400,
            }}
          >
            <Typography textAlign={{ xs: "left", xl: "center" }} mb={2}>
              {t("hero.agencyDescription")}
            </Typography>
            <Typography
              maxWidth={"500px"}
              mx={"auto"}
              textAlign={{ xs: "left", xl: "center" }}
            >
              {t("hero.teamHelpBusinessGrow")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
