import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CupIcon from "@assets/icons/choose/cup.svg";
import EightSpecialistsIcon from "@assets/icons/choose/eightSpecialists.svg";
import FourYearsIcon from "@assets/icons/choose/fourYears.svg";
import SocialIcon from "@assets/icons/choose/social.svg";
import ThreeThousandIcon from "@assets/icons/choose/threeThousand.svg";

export const WhyChooseUs = () => {
  const { t } = useTranslation();

  const cardImages = [
    {
      image: FourYearsIcon,
      title: t("whyChooseUs.fourYears.title"),
      text: t("whyChooseUs.fourYears.text"),
      buttonText: t("whyChooseUs.fourYears.buttonText"),
      link: "/test",
      imageProps: { width: 200, height: "auto" },
    },
    {
      image: EightSpecialistsIcon,
      title: t("whyChooseUs.eightSpecialists.title"),
      text: t("whyChooseUs.eightSpecialists.text"),
      buttonText: t("whyChooseUs.eightSpecialists.buttonText"),
      link: "/test",
      imageProps: { width: 200, height: "auto" },
    },
    {
      image: SocialIcon,
      title: t("whyChooseUs.socialResponsibility.title"),
      text: t("whyChooseUs.socialResponsibility.text"),
      buttonText: t("whyChooseUs.socialResponsibility.buttonText"),
      link: "/test",
      imageProps: { width: 200, height: "auto" },
    },
    {
      image: CupIcon,
      title: t("whyChooseUs.millionaireBlogger.title"),
      text: t("whyChooseUs.millionaireBlogger.text"),
      buttonText: t("whyChooseUs.millionaireBlogger.buttonText"),
      link: "/test",
      imageProps: { width: 200, height: "auto" },
    },
    {
      image: ThreeThousandIcon,
      title: t("whyChooseUs.adCampaigns.title"),
      text: t("whyChooseUs.adCampaigns.text"),
      buttonText: t("whyChooseUs.adCampaigns.buttonText"),
      link: "/test",
      imageProps: { width: 200, height: "auto" },
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 900, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: { xs: 2, sm: 4, md: 8 } }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 400,
          color: "#000",
          textTransform: "uppercase",
          fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "64px" },
          mb: { xs: 2, sm: 3, md: 5 },
          textAlign: "left",
        }}
      >
        {t("whyChooseUs.title")}
      </Typography>

      <Box mt={2} py={2}>
        <Carousel
          responsive={responsive}
          infinite
          draggable
          swipeable
          keyBoardControl
          autoPlay={true}
          autoPlaySpeed={7000}
          showDots={false}
          containerClass="carousel-container"
          itemClass="carousel-item-padding"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          arrows={false}
        >
          {cardImages.map((card, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                backgroundColor: "#f7f7f7",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                mx: { xs: 1, sm: 2 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: "100px", // Padding to accommodate image space
                overflow: "visible",
                "&:hover .content": {
                  opacity: 1,
                  display: "block",
                },
              }}
            >
              {/* Separate Image Container */}
              <Box
                sx={{
                  position: "absolute",
                  top: "-150px", // Adjust to control image extension
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    width: card.imageProps.width,
                    pointerEvents: "none",
                    userSelect: "none",
                    top: "-150px",
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontFamily: "Georgia, serif",
                  fontSize: "28px",
                  color: "#000",
                  textAlign: "center",
                  px: 2,
                }}
              >
                {card.title}
              </Typography>

              {/* Content */}
              <Box
                className="content"
                sx={{
                  mt: 2,
                  px: 2,
                  pb: 2,
                  textAlign: "center",
                  display: "none",
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    color: "#333",
                    fontSize: "16px",
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
                    cursor: "pointer",
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
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};