import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Import images directly
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 3,
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
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        minHeight: "600px",
        userSelect: "none",
      }}
    >
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

      <Box mt={2} sx={{ overflow: "auto" }}>
        <Carousel
          responsive={responsive}
          infinite
          draggable
          swipeable
          pauseOnHover
          keyBoardControl
          autoPlay
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
                overflow: "visible",
                transition: "height 0.2s ease-in-out",
                height: "auto",
                "&:hover": {
                  height: "auto",
                  "& .content": {
                    maxHeight: "300px",
                    opacity: 1,
                  },
                },
              }}
            >
              {/* Image - positioned to partially overflow the card */}
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  overflow: "visible", // Make sure overflow is set to visible here as well
                  top: "-100px", // Increased negative top to move image up more
                  marginBottom: "-70px", // Negative margin to compensate for overflow
                  zIndex: 1,
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    overflow: "visible",
                    width: "200px",
                    height: "auto",
                    zIndex: 1,
                  }}
                  draggable={false}
                />
              </Box>

              {/* Title */}
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

              {/* Content */}
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
