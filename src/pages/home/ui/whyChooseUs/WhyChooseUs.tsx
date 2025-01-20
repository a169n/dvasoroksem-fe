import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CupIcon from "@assets/icons/choose/main_3M_blogger.webp";
import EightSpecialistsIcon from "@assets/icons/choose/main_8_people.webp";
import FourYearsIcon from "@assets/icons/choose/main_4_years.webp";
import SocialIcon from "@assets/icons/choose/main_eco.webp";
import ThreeThousandIcon from "@assets/icons/choose/main_3000_ad.webp";
import { MyCard } from "@shared/ui/card";
import { useNavigate } from "react-router-dom";
import { CustomContainer } from "@shared/ui/container";
import { useMemo } from "react";

export const WhyChooseUs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  const cardImages = useMemo(
    () => [
      {
        image: FourYearsIcon,
        title: t("whyChooseUs.fourYears.title"),
        text: t("whyChooseUs.fourYears.text"),
        buttonText: t("whyChooseUs.fourYears.buttonText"),
        maxWidth: isLargeScreen ? "190px" : "148px",
        maxHeight: isLargeScreen ? "360px" : "260px",
        top: -80,
        marginTop: -6.9,
        link: "/#",
        action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      },
      {
        image: EightSpecialistsIcon,
        title: t("whyChooseUs.eightSpecialists.title"),
        text: t("whyChooseUs.eightSpecialists.text"),
        buttonText: t("whyChooseUs.eightSpecialists.buttonText"),
        maxWidth: isLargeScreen ? "330px" : "244px",
        maxHeight: isLargeScreen ? "360px" : "160px",
        top: -20,
        marginTop: 0.3,
        rotateClockwise: -11,
        link: "/cases",
        action: () => navigate("/cases"),
      },
      {
        image: CupIcon,
        title: t("whyChooseUs.millionaireBlogger.title"),
        text: t("whyChooseUs.millionaireBlogger.text"),
        buttonText: t("whyChooseUs.millionaireBlogger.buttonText"),
        maxWidth: isLargeScreen ? "220px" : "150px",
        maxHeight: isLargeScreen ? "350px" : "194px",
        top: -50,
        marginTop: -4,
        rotateClockwise: 11,
        link: "https://www.tiktok.com/@nurekensky",
        action: () =>
          window.open("https://www.tiktok.com/@nurekensky", "_blank"),
      },
      {
        image: ThreeThousandIcon,
        title: t("whyChooseUs.adCampaigns.title"),
        text: t("whyChooseUs.adCampaigns.text"),
        buttonText: t("whyChooseUs.adCampaigns.buttonText"),
        maxWidth: isLargeScreen ? "300px" : "204px",
        maxHeight: isLargeScreen ? "250px" : "149px",
        top: -50,
        marginTop: 1.6,
        rotateClockwise: -6,
        link: "/qcs",
        action: () => navigate("/cases/qcs"),
      },
      {
        image: SocialIcon,
        title: t("whyChooseUs.socialResponsibility.title"),
        text: t("whyChooseUs.socialResponsibility.text"),
        buttonText: t("whyChooseUs.socialResponsibility.buttonText"),
        maxWidth: isLargeScreen ? "250px" : "189px",
        maxHeight: isLargeScreen ? "250px" : "189px",
        top: -50,
        marginTop: -3.3,
        rotateClockwise: -5,
        link: "/help-others",
        action: () => navigate("/cases/help-others"),
      },
    ],
    [t, isLargeScreen, navigate]
  );

  const responsive = useMemo(
    () => ({
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
        partialVisibilityGutter: 90,
      },
    }),
    []
  );

  const containerStyles = useMemo(
    () => ({
      minHeight: "600px",
      userSelect: "none",
    }),
    []
  );

  const headingStyles = useMemo(
    () => ({
      fontWeight: isLargeScreen ? 450 : 500,
      color: "#000",
      textTransform: "uppercase",
      fontSize: isLargeScreen
        ? { xs: "24px", sm: "28px", md: "75px", lg: "75px" }
        : { xs: "24px", sm: "28px", md: "32px", lg: "64px" },
      mb: { xs: 2, sm: 3, md: 5 },
      textAlign: "left",
    }),
    [isLargeScreen]
  );

  const rowStyles = useMemo(
    () => ({
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      width: "100%",
    }),
    []
  );

  const cardWrapperStyles = useMemo(
    () => ({
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    }),
    []
  );

  return (
    <CustomContainer>
      <Box sx={containerStyles}>
        <Typography variant="h2" component="h1" sx={headingStyles}>
          {t("whyChooseUs.title")}
        </Typography>

        {isLargeScreen ? (
          <Box
            sx={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "90px",
              mt: "115px",
            }}
          >
            <Box sx={rowStyles}>
              {cardImages.slice(0, 3).map((card, index) => (
                <Box key={index} sx={{ width: "500px", height: "auto" }}>
                  <MyCard
                    image={card.image}
                    imageMaxWidth={card.maxWidth}
                    imageMaxHeight={card.maxHeight}
                    rotateClockwise={card.rotateClockwise}
                    top={card.top}
                    marginTop={card.marginTop}
                    title={card.title}
                    text={card.text}
                    buttonText={card.buttonText}
                    onButtonClick={card.action}
                    isMobile={isMobile}
                  />
                </Box>
              ))}
            </Box>
            <Box sx={{ ...cardWrapperStyles, gap: "90px" }}>
              {cardImages.slice(3).map((card, index) => (
                <Box key={index} sx={{ width: "500px", height: "auto" }}>
                  <MyCard
                    image={card.image}
                    imageMaxWidth={card.maxWidth}
                    imageMaxHeight={card.maxHeight}
                    rotateClockwise={card.rotateClockwise}
                    top={card.top}
                    marginTop={card.marginTop}
                    title={card.title}
                    text={card.text}
                    buttonText={card.buttonText}
                    onButtonClick={card.action}
                    isMobile={isMobile}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box mt={2} sx={{ overflow: "auto" }}>
            <Carousel
              responsive={responsive}
              infinite
              draggable
              swipeable
              pauseOnHover
              partialVisible={isMobile}
              keyBoardControl
              additionalTransfrom={0}
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
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    my: 12,
                  }}
                >
                  <MyCard
                    image={card.image}
                    imageMaxWidth={card.maxWidth}
                    imageMaxHeight={card.maxHeight}
                    rotateClockwise={card.rotateClockwise}
                    top={card.top}
                    marginTop={card.marginTop}
                    title={card.title}
                    text={card.text}
                    buttonText={card.buttonText}
                    onButtonClick={card.action}
                    isMobile={isMobile}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
        )}
      </Box>
    </CustomContainer>
  );
};
