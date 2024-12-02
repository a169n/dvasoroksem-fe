import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import images directly
import CupIcon from "@assets/icons/choose/cup.svg";
import EightSpecialistsIcon from "@assets/icons/choose/eightSpecialists.svg";
import FourYearsIcon from "@assets/icons/choose/fourYears.svg";
import SocialIcon from "@assets/icons/choose/social.svg";
import ThreeThousandIcon from "@assets/icons/choose/threeThousand.svg";
import { MyCard } from "@shared/ui/card";

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
                my: { xs: 4, sm: 6, md: 8 },
              }}
            >
              <MyCard
                key={index}
                image={card.image}
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
