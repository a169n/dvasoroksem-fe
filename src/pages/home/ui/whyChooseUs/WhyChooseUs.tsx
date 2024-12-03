import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import images directly
import CupIcon from "@assets/icons/choose/main_3M_blogger.webp";
import EightSpecialistsIcon from "@assets/icons/choose/main_8_people.webp";
import FourYearsIcon from "@assets/icons/choose/main_4_years.webp";
import SocialIcon from "@assets/icons/choose/main_eco.webp";
import ThreeThousandIcon from "@assets/icons/choose/main_3000_ad.webp";
import { MyCard } from "@shared/ui/card";

export const WhyChooseUs = () => {
  const { t } = useTranslation();

  const cardImages = [
    {
      image: FourYearsIcon,
      title: t("whyChooseUs.fourYears.title"),
      text: t("whyChooseUs.fourYears.text"),
      buttonText: t("whyChooseUs.fourYears.buttonText"),
      maxWidth: "148px",
      maxHeight: "260px",
      top: -110,
      marginTop: -6.9,
      link: "/test",
    },
    {
      image: EightSpecialistsIcon,
      title: t("whyChooseUs.eightSpecialists.title"),
      text: t("whyChooseUs.eightSpecialists.text"),
      buttonText: t("whyChooseUs.eightSpecialists.buttonText"),
      maxWidth: "244px",
      maxHeight: "160px",
      top: -20,
      marginTop: 0.3,
      rotateClockwise: -11,
      link: "/test",
    },
    {
      image: SocialIcon,
      title: t("whyChooseUs.socialResponsibility.title"),
      text: t("whyChooseUs.socialResponsibility.text"),
      buttonText: t("whyChooseUs.socialResponsibility.buttonText"),
      maxWidth: "189px",
      maxHeight: "189px",
      top: -50,
      marginTop: -3.3,
      rotateClockwise: -5,
      link: "/test",
    },
    {
      image: CupIcon,
      title: t("whyChooseUs.millionaireBlogger.title"),
      text: t("whyChooseUs.millionaireBlogger.text"),
      buttonText: t("whyChooseUs.millionaireBlogger.buttonText"),
      maxWidth: "154px",
      maxHeight: "194px",
      top: -50,
      marginTop: -4,
      rotateClockwise: 11,
      link: "/test",
    },
    {
      image: ThreeThousandIcon,
      title: t("whyChooseUs.adCampaigns.title"),
      text: t("whyChooseUs.adCampaigns.text"),
      buttonText: t("whyChooseUs.adCampaigns.buttonText"),
      maxWidth: "204px",
      maxHeight: "149px",
      top: -50,
      marginTop: 1.6,
      rotateClockwise: -6,
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
          fontWeight: 500,
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
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 12,
              }}
            >
              <MyCard
                key={index}
                image={card.image}
                imageMaxWidth={card.maxWidth}
                imageMaxHeight={card.maxHeight}
                rotateClockwise={card.rotateClockwise}
                top={card.top}
                marginTop={card.marginTop}
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
                onButtonClick={() => (window.location.href = card.link)}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};
