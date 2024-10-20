import { useState, useEffect, useCallback } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import CupIcon from "@assets/icons/choose/cup.svg";
import EightSpeacialistsIcon from "@assets/icons/choose/eightSpecialists.svg";
import FourYearsIcon from "@assets/icons/choose/fourYears.svg";
import SocialIcon from "@assets/icons/choose/social.svg";
import ThreeThousandIcon from "@assets/icons/choose/threeThousand.svg";
import { MyCard } from "@shared/ui/card";

const cards = [
  {
    image: FourYearsIcon,
    title: "4 года в SMM",
    text: "— это внушительный срок в стремительно меняющейся индустрии. Мы не просто экспертны в своем деле, мы постоянно адаптируемся, внедряя инновации, чтобы наши клиенты всегда были на шаг впереди",
    buttonText: "Смотреть showreel",
    link: "/test",
  },
  {
    image: EightSpeacialistsIcon,
    title: "8 специалистов одном пакете",
    text: "Над проектом будет работать 8+ специалистов: проектный менеджер, контент-менеджер, таргетолог, видеограф, графический дизайнер, монтажер, сторисмейкер, копирайтер",
    buttonText: "Смотреть кейсы",
    link: "/test",
  },
  {
    image: SocialIcon,
    title: "Социальная ответственность",
    text: "Посадили 50 деревьев, помогаем благотворительному фонду",
    buttonText: "Видеоотчеты тут",
    link: "/test",
  },
  {
    image: CupIcon,
    title: "Вырастили блоггера миллионника (3🍋)",
    text: "",
    buttonText: "nurekensky on TikTok",
    link: "/test",
  },
  {
    image: ThreeThousandIcon,
    title: "3000 рекламных кампаний",
    text: "Каждый день запускаем более четырех таргетов",
    buttonText: "Смотреть кейсы",
    link: "/test",
  },
];

export const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - cardsToShow ? 0 : prevIndex + 1
    );
  }, [cardsToShow]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - cardsToShow : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPaused) {
      interval = setInterval(() => {
        handleNext();
      }, 7000);
    }
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

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
          textAlign: "start",
        }}
      >
        Почему выбирают нас?
      </Typography>

      <Box
        mt={2}
        py={2}
        sx={{
          position: "relative",
          overflow: "hidden",
          maxWidth: {
            xs: "100%",
            sm: cardsToShow === 2 ? "750px" : "1125px",
          },
          margin: "0 auto",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.3s ease-in-out",
            transform: `translateX(-${activeIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: `${100 / cardsToShow}%`,
                px: { xs: 1, sm: 2 },
              }}
            >
              <MyCard
                image={card.image}
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
                onButtonClick={() => (window.location.href = card.link)}
                sx={{
                  maxWidth: "375px",
                  mx: "auto",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
          disableRipple
        >
          <ArrowBackIos color="action" />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
          disableRipple
        >
          <ArrowForwardIos color="action" />
        </IconButton>
      </Box>
    </Box>
  );
};
