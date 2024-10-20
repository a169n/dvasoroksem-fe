import { useState } from "react";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const cardsToShow = isMobile ? 1 : isTablet ? 2 : 3;

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - cardsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <Box  sx={{ px: { xs: 2, sm: 4, md: 8 }, py: { xs: 2, sm: 4, md: 8 } }}>
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

      <Box mt={2} sx={{ position: "relative", overflow: "hidden" }}>
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
                padding: "0 8px",
              }}
            >
              <MyCard
                image={card.image}
                title={card.title}
                text={card.text}
                buttonText={card.buttonText}
                onButtonClick={() => (window.location.href = card.link)}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <IconButton onClick={handlePrev} color="primary">
          <ArrowBackIos color="primary" />
        </IconButton>
        <IconButton onClick={handleNext} color="primary">
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};
