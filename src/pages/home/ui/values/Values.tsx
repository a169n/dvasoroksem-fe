import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-multi-carousel/lib/styles.css";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import values icons
import disciplineIcon from "@assets/icons/values/discipline.svg";
import effectIcon from "@assets/icons/values/effect.svg";
import flexibilityIcon from "@assets/icons/values/flexibility.svg";
import innovativeIcon from "@assets/icons/values/innovative.svg";
import responsibilityIcon from "@assets/icons/values/responsibility.svg";

export const Values = () => {
  const { t } = useTranslation();

  const valueCards = [
    {
      image: disciplineIcon,
      title: t("values.discipline.title"),
      text: t("values.discipline.text"),
    },
    {
      image: effectIcon,
      title: t("values.effect.title"),
      text: t("values.effect.text"),
    },
    {
      image: flexibilityIcon,
      title: t("values.flexibility.title"),
      text: t("values.flexibility.text"),
    },
    {
      image: innovativeIcon,
      title: t("values.innovative.title"),
      text: t("values.innovative.text"),
    },
    {
      image: responsibilityIcon,
      title: t("values.responsibility.title"),
      text: t("values.responsibility.text"),
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
    <Box sx={{ minHeight: "600px", userSelect: "none" }}>
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
        {t("values.title")}
      </Typography>

      <Box mt={5}>
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
          arrows={false}
        >
          {valueCards.map((card, index) => (
            <Box
              my={2}
              key={index}
              sx={{
                position: "relative",
                backgroundColor: "#f7f7f7",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                mx: "auto",
                transition:
                  "height 0.2s ease-in-out, box-shadow 0.3s ease-in-out",
                maxWidth: "375px",
                height: "auto",
                borderRadius: "24px",
                overflow: "hidden",
                "&:hover": {
                  "& .content": {
                    maxHeight: "400px",
                    opacity: 1,
                  },
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <LazyLoadImage
                  src={card.image}
                  alt={card.title}
                  effect="blur"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "24px",
                  }}
                  draggable={false}
                />
              </Box>

              <Box
                className="content"
                sx={{
                  p: 2,
                  maxHeight: 0,
                  opacity: 0,
                  overflow: "hidden",
                  transition:
                    "max-height 0.4s ease-in-out, opacity 0.7s ease-in-out",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "24px",
                    color: "#000",
                    textAlign: "left",
                    mb: 1,
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#333",
                    fontSize: "16px",
                    fontFamily: "Futura PT, sans-serif",
                    fontWeight: 300,
                    textAlign: "left",
                  }}
                >
                  {card.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};
