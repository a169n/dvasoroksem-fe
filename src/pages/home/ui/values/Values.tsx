import { memo, useRef, useMemo } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "react-multi-carousel/lib/styles.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import disciplineIcon from "@assets/icons/values/discipline.svg";
import effectIcon from "@assets/icons/values/effect.svg";
import flexibilityIcon from "@assets/icons/values/flexibility.svg";
import innovativeIcon from "@assets/icons/values/innovative.svg";
import responsibilityIcon from "@assets/icons/values/responsibility.svg";
import { CustomContainer } from "@shared/ui/container";

interface ValueCardProps {
  image: string;
  title: string;
  text: string;
  width?: string;
  marginBottom?: string;
}

const ValueCard = memo(
  ({
    image,
    title,
    text,
    width = "374px",
    marginBottom = "0px",
  }: ValueCardProps) => {
    const cardStyles = useMemo(
      () => ({
        width,
        height: "fit-content",
        border: "1px solid #D9D9D9",
        borderRadius: "24.75px",
        overflow: "hidden",
        backgroundColor: "#f7f7f7",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          "& .content": {
            maxHeight: "400px",
            opacity: 1,
          },
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
        padding: "25px 20px",
        marginBottom,
      }),
      [width, marginBottom]
    );

    const titleStyles = useMemo(
      () => ({
        fontFamily: "Georgia, serif",
        fontStyle: "italic",
        fontSize: {
          xs: "18px",
          sm: "20px",
          md: "24px",
          xl: "32px",
        },
        fontWeight: 400,
        color: "#000",
        textAlign: "center",
        lineHeight: "115%",
      }),
      []
    );

    const textStyles = useMemo(
      () => ({
        px: 2,
        mb: 1,
        color: "#333",
        fontSize: { xs: "14px", sm: "16px", md: "18px" },
        fontFamily: "Futura PT, sans-serif",
        fontWeight: 400,
        textAlign: "center",
      }),
      []
    );

    return (
      <Box sx={cardStyles}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LazyLoadImage
            src={image}
            alt={title}
            effect="blur"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "166px",
              maxHeight: "203px",
              objectFit: "cover",
              borderRadius: "25px",
            }}
            draggable={false}
          />
          <Typography variant="h6" sx={titleStyles}>
            {title}
          </Typography>
          <Box
            className="content"
            sx={{
              maxHeight: { xs: "none", md: 0 },
              opacity: { xs: 1, md: 0 },
              overflow: "hidden",
              transition:
                "max-height 0.4s ease-in-out, opacity 0.7s ease-in-out",
            }}
          >
            <Typography variant="body2" sx={textStyles}>
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
);

type CardType = {
  image: string;
  title: string;
  text: string;
};

type CarouselCardProps = {
  card: CardType;
  isMobile: boolean;
};

const CarouselCard = memo(({ card, isMobile }: CarouselCardProps) => {
  const carouselCardStyles = useMemo(
    () => ({
      position: "relative",
      backgroundColor: "#f7f7f7",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      mx: 4,
      transition: "height 0.2s ease-in-out, box-shadow 0.3s ease-in-out",
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
    }),
    []
  );

  return (
    <Box my={2} sx={carouselCardStyles}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 3,
        }}
      >
        <LazyLoadImage
          src={card.image}
          alt={card.title}
          effect="blur"
          style={{
            width: "100%",
            height: isMobile ? "100%" : "250px",
            borderRadius: "24px",
          }}
          draggable={false}
        />
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: { xs: "18px", sm: "20px", md: "24px" },
            fontWeight: 400,
            color: "#000",
            textAlign: "center",
            mt: 1,
            mb: -2,
          }}
        >
          {card.title}
        </Typography>
      </Box>
      <Box
        className="content"
        sx={{
          maxHeight: { xs: "none", md: 0 },
          opacity: { xs: 1, md: 0 },
          overflow: "hidden",
          transition: "max-height 0.4s ease-in-out, opacity 0.7s ease-in-out",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            px: 2,
            mb: 1,
            color: "#333",
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontFamily: "Futura PT, sans-serif",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          {card.text}
        </Typography>
      </Box>
    </Box>
  );
});

const Values = memo(() => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const carouselRef = useRef<Carousel>(null);

  const valueCards = useMemo(
    () => [
      {
        image: disciplineIcon,
        title: t("values.discipline.title"),
        text: t("values.discipline.text"),
      },
      {
        image: flexibilityIcon,
        title: t("values.effect.title"),
        text: t("values.effect.text"),
      },
      {
        image: innovativeIcon,
        title: t("values.flexibility.title"),
        text: t("values.flexibility.text"),
      },
      {
        image: effectIcon,
        title: t("values.innovative.title"),
        text: t("values.innovative.text"),
      },
      {
        image: responsibilityIcon,
        title: t("values.responsibility.title"),
        text: t("values.responsibility.text"),
      },
    ],
    [t]
  );

  const responsive = useMemo(
    () => ({
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1200 },
        items: 2,
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
        partialVisibilityGutter: 90,
      },
    }),
    []
  );

  const handleLeftClick = () => {
    if (carouselRef.current) carouselRef.current.previous(1);
  };

  const handleRightClick = () => {
    if (carouselRef.current) carouselRef.current.next(1);
  };

  const titleStyles = useMemo(
    () => ({
      fontWeight: 500,
      color: "#000",
      textTransform: "uppercase",
      fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "70px" },
      mb: { xs: 2, sm: 3, md: 5 },
      textAlign: "left",
    }),
    []
  );

  return (
    <Box sx={{ minHeight: "200px", userSelect: "none" }}>
      <CustomContainer>
        <Typography variant="h2" component="h1" sx={titleStyles}>
          {t("values.title")}
        </Typography>
      </CustomContainer>
      {isLargeScreen ? (
        <Box
          sx={{
            width: "1204px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "41px",
            }}
          >
            {valueCards.slice(0, 3).map((card, index) => (
              <ValueCard key={index} {...card} />
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "41px",
            }}
          >
            {valueCards.slice(3).map((card, index) => (
              <ValueCard key={index} {...card} marginBottom="150px" />
            ))}
          </Box>
        </Box>
      ) : (
        <Box mt={5}>
          <Carousel
            responsive={responsive}
            infinite
            draggable
            swipeable
            pauseOnHover
            keyBoardControl
            autoPlay
            partialVisible={isMobile}
            autoPlaySpeed={7000}
            showDots={false}
            centerMode={!isMobile}
            containerClass="carousel-container"
            itemClass="carousel-item-padding"
            arrows={false}
            ref={carouselRef}
          >
            {valueCards.map((card, index) => (
              <CarouselCard key={index} card={card} isMobile={isMobile} />
            ))}
          </Carousel>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mt: 4, mb: 4 }}
          >
            <IconButton
              onClick={handleLeftClick}
              sx={{
                color: "#000",
                border: "1px solid #000",
                borderRadius: "0px",
                padding: "8px 12px",
              }}
            >
              <ArrowLeftIcon />
            </IconButton>
            <IconButton
              onClick={handleRightClick}
              sx={{
                color: "#000",
                border: "1px solid #000",
                borderRadius: "0px",
                padding: "8px 12px",
              }}
            >
              <ArrowRightIcon />
            </IconButton>
          </Stack>
        </Box>
      )}
    </Box>
  );
});

ValueCard.displayName = "ValueCard";
CarouselCard.displayName = "CarouselCard";
Values.displayName = "Values";

export { Values };
