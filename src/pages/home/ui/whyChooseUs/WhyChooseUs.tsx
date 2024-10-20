import { Box, Typography } from "@mui/material";

// const cards = [
//   {
//     image: FourYearsIcon,
//     title: "4 года в SMM",
//     text: "— это внушительный срок в стремительно меняющейся индустрии. Мы не просто экспертны в своем деле, мы постоянно адаптируемся, внедряя инновации, чтобы наши клиенты всегда были на шаг впереди",
//     buttonText: "Смотреть showreel",
//     link: "/test",
//   },
//   {
//     image: EightSpeacialistsIcon,
//     title: "8 специалистов одном пакете",
//     text: "Над проектом будет работать 8+ специалистов: проектный менеджер, контент-менеджер, таргетолог, видеограф, графический дизайнер, монтажер, сторисмейкер, копирайтер",
//     buttonText: "Смотреть кейсы",
//     link: "/test",
//   },
//   {
//     image: SocialIcon,
//     title: "Социальная ответственность",
//     text: "Посадили 50 деревьев, помогаем благотворительному фонду",
//     buttonText: "Видеоотчеты тут",
//     link: "/test",
//   },
//   {
//     image: CupIcon,
//     title: "Вырастили блоггера миллионника (3🍋)",
//     text: "",
//     buttonText: "nurekensky on TikTok",
//     link: "/test",
//   },
//   {
//     image: ThreeThousandIcon,
//     title: "3000 рекламных кампаний",
//     text: "Каждый день запускаем более четырех таргетов",
//     buttonText: "Смотреть кейсы",
//     link: "/test",
//   },
// ];

export const WhyChooseUs = () => {
  // const theme = useTheme();
  // const navigate = useNavigate();
  // const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = cards.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  // };

  // const handleBack = () => {
  //   setActiveStep(
  //     (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
  //   );
  // };

  // const handleStepChange = (step: number) => {
  //   setActiveStep(step);
  // };

  // const handleButtonClick = (link: string) => {
  //   navigate(link);
  // };

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
    </Box>
  );
};
