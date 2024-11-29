
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import images directly
import CupIcon from "@assets/icons/choose/cup.svg";
import EightSpecialistsIcon from "@assets/icons/choose/eightSpecialists.svg";
import FourYearsIcon from "@assets/icons/choose/fourYears.svg";
import SocialIcon from "@assets/icons/choose/social.svg";
import ThreeThousandIcon from "@assets/icons/choose/threeThousand.svg";
import { Navigation } from "swiper/modules";

export const WhyChooseUs = () => {
  const { t } = useTranslation();

  const cardImages = [
    {
      image: FourYearsIcon,
      title: t("whyChooseUs.fourYears.title"),
      text: t("whyChooseUs.fourYears.text"),
      buttonText: t("whyChooseUs.fourYears.buttonText"),
      link: "/test",
    },
    {
      image: EightSpecialistsIcon,
      title: t("whyChooseUs.eightSpecialists.title"),
      text: t("whyChooseUs.eightSpecialists.text"),
      buttonText: t("whyChooseUs.eightSpecialists.buttonText"),
      link: "/test",
    },
    {
      image: SocialIcon,
      title: t("whyChooseUs.socialResponsibility.title"),
      text: t("whyChooseUs.socialResponsibility.text"),
      buttonText: t("whyChooseUs.socialResponsibility.buttonText"),
      link: "/test",
    },
    {
      image: CupIcon,
      title: t("whyChooseUs.millionaireBlogger.title"),
      text: t("whyChooseUs.millionaireBlogger.text"),
      buttonText: t("whyChooseUs.millionaireBlogger.buttonText"),
      link: "/test",
    },
    {
      image: ThreeThousandIcon,
      title: t("whyChooseUs.adCampaigns.title"),
      text: t("whyChooseUs.adCampaigns.text"),
      buttonText: t("whyChooseUs.adCampaigns.buttonText"),
      link: "/test",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "600px",
        userSelect: "none",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 500,
          color: "#000",
          textTransform: "uppercase",
          fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "70px" },
          mb: { xs: 2, sm: 3, md: 5 },
          textAlign: "left",
          px: { xs: 2, sm: 4, md: 8 },
        }}
      >
        {t("whyChooseUs.title")}
      </Typography>

      <Box mt={5}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
          }}
          navigation={false} // Disable navigation arrows
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          style={{ overflow: "visible" }} // Ensures images are not clipped

        >
          {cardImages.map((card, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",
                  backgroundColor: "#f7f7f7",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  mx: "auto",
                  transition: "height 0.2s ease-in-out",
                  maxWidth: "500px",
                  height: "auto",
                  overflow: "visible", 
                  "&:hover": {
                    height: "auto",
                    "& .content": {
                      maxHeight: "400px",
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    overflow: "visible", 
                    top: "-50px", 
                    mb: "-50px", 
                    zIndex: 1,
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      overflow: "visible",
                      width: "200px",
                      height: "200px",
                      zIndex: 1,
                    }}
                    draggable={false}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontFamily: "Georgia, serif",
                    fontSize: "32px",
                    color: "#000",
                    textAlign: "left",
                    px: 2,
                  }}
                >
                  {card.title}
                </Typography>
                <Box
                  className="content"
                  sx={{
                    mt: 2,
                    px: 2,
                    pb: 2,
                    maxHeight: 0,
                    opacity: 0,
                    overflow: "hidden",
                    transition:
                      "max-height 0.4s ease-in-out, opacity 0.7s ease-in-out",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 2,
                      color: "#333",
                      fontSize: "18px",
                      fontFamily: "Futura PT, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {card.text}
                  </Typography>
                  <Button
                    sx={{
                      mt: 1,
                      py: 1,
                      px: 2,
                      border: "1px solid black",
                      color: "black",
                      textTransform: "uppercase",
                      fontSize: "12px",
                      width: "fit-content",
                      backgroundColor: "transparent",
                      borderRadius: 0,
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        backgroundColor: "black",
                        color: "white",
                        transition: "background-color 0.3s ease",
                      },
                    }}
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => (window.location.href = card.link)}
                  >
                    {card.buttonText}
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};