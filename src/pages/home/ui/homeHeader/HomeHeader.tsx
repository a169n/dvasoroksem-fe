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
import main_showreel from "@assets/videos/main_showreel.mp4";
import icon1 from "@assets/icons/icon1.svg";
import icon2 from "@assets/icons/icon2.svg";
import icon3 from "@assets/icons/icon3.svg";
import icon4 from "@assets/icons/icon4.svg";
import icon5 from "@assets/icons/icon5.svg";
import icon6 from "@assets/icons/icon6.svg";
import icon7 from "@assets/icons/icon7.svg";
import icon8 from "@assets/icons/icon8.svg";
import { useTranslation } from "react-i18next";

const ReactPlayer = React.lazy(() => import("react-player/lazy"));

export const HomeHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const { t } = useTranslation();

  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const videoRef = useRef();

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
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const getHeightBasedOnScreen = () => {
    if (isMobile) return "100vh";
    if (isTablet) return "120vh";
    return "146vh";
  };

  // Shared styles
  const sharedBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box
      mt={isMobile ? -5 : 8}
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
          height: getHeightBasedOnScreen(),
          width: "100%",
        }}
      >
        {/* Video Section with Background */}
        <Box
          ref={videoRef}
          sx={{
            position: "relative",
            width: "100%",
            height: getHeightBasedOnScreen(),
            overflow: "hidden",
          }}
        >
          {/* Conditionally render based on whether the device is mobile */}
          {!isMobile && (
            <>
              {/* Right Side Blurred Video */}
              <Suspense fallback={<Box sx={{ display: "none" }} />}>
                <ReactPlayer
                  url={main_showreel}
                  playing={isVisible}
                  muted={true}
                  loop
                  width="100%"
                  height={getHeightBasedOnScreen()}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-50%",
                    zIndex: 1,
                    objectFit: "cover",
                    filter: "blur(20px) brightness(70%)",
                    opacity: 0.8,
                  }}
                />
              </Suspense>
              {/* Right Side Blurred Video */}
              <Suspense fallback={<Box sx={{ display: "none" }} />}>
                <ReactPlayer
                  url={main_showreel}
                  playing={isVisible}
                  muted={true}
                  loop
                  width="100%"
                  height={getHeightBasedOnScreen()}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: "-50%",
                    zIndex: 1,
                    objectFit: "cover",
                    filter: "blur(20px) brightness(70%)",
                    opacity: 0.8,
                  }}
                />
              </Suspense>

              {/* Main Video Background Blurred */}
              <Box
                sx={{
                  position: "absolute",
                  top: "-10%",
                  left: "-10%",
                  width: "120%",
                  height: "120%",
                  backgroundImage: `url(${main_showreel})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  filter: "blur(80px) brightness(40%) saturate(150%)",
                  transform: "scale(1.2)",
                  zIndex: 0,
                  opacity: 0.6,
                }}
              />
            </>
          )}

          {/* Main Video Player */}
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
            <Box>
              <ReactPlayer
                url={main_showreel}
                playing={isVisible}
                muted={isMuted}
                loop
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2,
                  objectFit: "cover",
                }}
              />
            </Box>
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
            py: 2,
            width: "100%",
          }}
        >
          <Marquee
            velocity={20}
            direction="rtl"
            scatterRandomly={false}
            resetAfterTries={100}
            onInit={() => {}}
            onFinish={() => {}}
          >
            {[
              {
                src: icon1,
                alt: "Icon1",
                size: { height: "50px", width: "160px" },
              },
              {
                src: icon2,
                alt: "Icon2",
                size: { height: "50px", width: "160px" },
              },
              {
                src: icon3,
                alt: "Icon3",
                size: { height: "50px", width: "160px" },
              },
              {
                src: icon4,
                alt: "Icon4",
                size: { height: "50px", width: "160px" },
              },
              {
                src: icon5,
                alt: "Icon5",
                size: { height: "50px", width: "160px" },
              },
              {
                src: icon6,
                alt: "Icon6",
                size: { height: "50px", width: "160px" },
              },
              {
                src: icon7,
                alt: "Icon7",
                size: { height: "50px", width: "160px" },
              },
              {
                src: icon8,
                alt: "Icon8",
                size: { height: "50px", width: "160px" },
              },
            ].map((icon, index) => (
              <Box
                key={index}
                mx={4}
                sx={{
                  ...sharedBoxStyles,
                }}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  draggable="false"
                  style={{
                    height: icon.size.height,
                    width: icon.size.width,
                    filter: "brightness(0) invert(1)",
                    pointerEvents: "none",
                    userSelect: "none",
                    marginRight: "10px",
                  }}
                />
              </Box>
            ))}
          </Marquee>
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            color: "#000",
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "row" },
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
            mb: { xs: 4, md: 0 },
            mt: { xs: 4, md: 8 },
            py: { xs: 4, md: 8 },
            px: { xs: 2, sm: 4, md: 8 },
          }}
        >
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography
              variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
              component="h1"
              fontSize={isMobile ? "36px" : isTablet ? "48px" : "70px"}
              fontWeight={500}
              mb={2}
              sx={{ textTransform: "uppercase" }}
            >
              {t("hero.leadingMarketingAgency1")}
            </Typography>
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
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography textAlign={"left"} mb={2}>
              {t("hero.agencyDescription")}
            </Typography>
            <Typography textAlign={"left"} mb={2}>
              {t("hero.teamHelpBusinessGrow")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
