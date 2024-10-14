import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import SMM_service from "@assets/SMM_service.png";
import Marketing_service from "@assets/Marketing_service.png";
import Production_service from "@assets/Production_service.png";
import Strategies_service from "@assets/Strategies_service.png";
import IT_service from "@assets/IT_service.png";
import { MyAccordion } from "@shared/ui/accordion";

const servicesData = [
  {
    title: "SMM",
    image: SMM_service,
    items: [
      "Ведение социальных сетей",
      "Таргетированная реклама в Facebook",
      "Таргетированная реклама в Instagram",
      "Таргетированная реклама в TikTok",
      "Цифровизация контента",
    ],
  },
  {
    title: "Маркетинг",
    image: Marketing_service,
    items: [
      "Внедрение воронок продаж и CRM систем",
      "Контекстная реклама в Google, Yandex",
      "PR-кампании",
      "Influence-кампании",
      "Ведение карт Google/Yandex/2GIS",
      "Оффлайн маркетинг",
      "AI продажник",
    ],
  },
  {
    title: "Исследования и стратегии",
    image: Strategies_service,
    items: [
      "Маркетинговые стратегии",
      "SMM-стратегии",
      "Исследования и аудит",
      "Спецпроекты",
    ],
  },
  {
    title: "IT",
    image: IT_service,
    items: [
      "Разработка сайтов",
      "Чат-боты",
      "Веб-сервисы",
      "Веб-приложения",
      "СЕО-оптимизация",
    ],
  },
  {
    title: "Production",
    image: Production_service,
    items: [
      "Продюсирование съемок",
      "Рекламные ролики, TVC, TLC",
      "Имиджевые ролики",
      "Фотопродакшн",
    ],
  },
];

const ServiceImage = ({ src, alt, isMobile, isTablet }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <Box
      sx={{
        borderRadius: "24px",
        width: {
          xs: "100%",
          sm: "100%",
          md: "50%",
        },
        order: { xs: 1, md: 2 },
        overflow: "hidden",
        ...(!isMobile &&
          !isTablet && {
            "&:hover img": {
              transform: "scale(1.4)",
            },
          }),
      }}
    >
      <img
        src={src}
        alt={alt}
        onMouseMove={!isMobile && !isTablet ? handleMouseMove : undefined}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: isMobile ? "300px" : isTablet ? "400px" : "618.75px",
          maxHeight: isMobile ? "154px" : isTablet ? "206px" : "318.08px",
          display: "block",
          margin: "0 auto",
          transition: "transform 0.3s ease",
        }}
      />
    </Box>
  );
};

const ServiceContent = ({ items, isMobile }) => (
  <Box
    display="flex"
    flexDirection="column"
    gap={1}
    sx={{
      width: {
        xs: "100%",
        sm: "100%",
        md: "50%",
      },
      order: { xs: 2, md: 1 },
      mt: { xs: 2, md: 0 },
    }}
  >
    {items.map((item, index) => (
      <Typography
        key={index}
        align={isMobile ? "center" : "left"}
        sx={{
          fontSize: {
            xs: "14px",
            sm: "16px",
            md: "18.33px",
          },
          lineHeight: {
            xs: "16px",
            sm: "18px",
            md: "21.08px",
          },
        }}
      >
        {item}
      </Typography>
    ))}
  </Box>
);

export const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontWeight: 400,
          color: "#000",
          textTransform: "uppercase",
          fontSize: {
            xs: "24px",
            sm: "28px",
            md: "32px",
            lg: "64px",
          },
          mb: { xs: 2, sm: 3, md: 5 },
        }}
      >
        Наши услуги
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "12px", sm: "14px", md: "16px" },
        }}
      >
        {servicesData.map(({ title, image, items }) => (
          <MyAccordion key={title} title={title}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: { xs: 2, md: 4 },
              }}
            >
              <ServiceContent items={items} isMobile={isMobile} />
              <ServiceImage
                src={image}
                alt={`${title} Service image`}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            </Box>
          </MyAccordion>
        ))}
      </Box>
    </Box>
  );
};
