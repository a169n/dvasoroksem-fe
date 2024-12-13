import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ServiceCard } from "./ServiceCard";
import { CustomContainer } from "@shared/ui/container";

export const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const servicesData = [
    {
      title: "SMM",
      imageKey: "SMM_service",
      items: [
        "Ведение социальных сетей",
        "Таргетированная реклама в Facebook",
        "Таргетированная реклама в Instagram",
        "Таргетированная реклама в TikTok",
        "Цифровизация контента",
      ],
      imageSize: { width: "283px", height: "250px" },
      layout: "default",
      objectPosition: "left",
    },
    {
      title: "Маркетинг",
      imageKey: "Marketing_service",
      items: [
        "Внедрение воронок продаж и CRM систем",
        "Контекстная реклама в Google, Yandex",
        "Ведение карт Google, Yandex, 2GIS",
        "PR-кампании",
        "Influence-кампании",
        "Офлайн маркетинг",
        "AI продажник",
      ],
      imageSize: { width: "100%", height: "224px" },
      layout: "vertical",
      objectPosition: "center",
    },
    {
      title: "Стратегии",
      imageKey: "Strategies_service",
      items: [
        "Маркетинговые стратегии",
        "SMM-стратегии",
        "Исследования и аудит",
        "Специальные проекты",
      ],
      imageSize: { width: "190px", height: "204px" },
      layout: "default",
      objectPosition: "right",
    },
    {
      title: "IT",
      imageKey: "IT_service",
      items: [
        "Разработка сайтов",
        "Чат-боты",
        "Веб-сервисы",
        "Веб-приложения",
        "SEO-оптимизация",
      ],
      imageSize: { width: "283px", height: "240px" },
      layout: "default",
      objectPosition: "left",
    },
    {
      title: "Производство",
      imageKey: "Production_service2",
      items: [
        "Съемочная продукция",
        "Рекламные ролики, TVC, TLC",
        "Имиджевые ролики",
        "Фотопродакшн",
      ],
      imageSize: { width: "283px", height: "204px" },
      layout: "default",
      objectPosition: "center",
    },
  ];

  const firstColumnServices = servicesData.filter((service) =>
    ["SMM_service", "IT_service", "Production_service2"].includes(
      service.imageKey
    )
  );

  const secondColumnServices = servicesData.filter((service) =>
    ["Marketing_service", "Strategies_service"].includes(service.imageKey)
  );

  return (
    <CustomContainer>
      <Box
        mx={"auto"}
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          gap: "16px",
          marginBottom: "147px",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "696px",
            height: isSmallScreen ? "auto" : "818px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {firstColumnServices.map((service) => (
            <ServiceCard
              key={service.imageKey}
              title={service.title}
              imageKey={service.imageKey}
              items={service.items}
              objectPosition={service.objectPosition}
              imageSize={service.imageSize}
              isVertical={false}
            />
          ))}
        </Box>
        <Box
          sx={{
            width: isSmallScreen ? "100%" : "576px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {secondColumnServices.map((service, index) => (
            <ServiceCard
              key={service.imageKey}
              title={service.title}
              imageKey={service.imageKey}
              items={service.items}
              objectPosition={service.objectPosition}
              imageSize={service.imageSize}
              isVertical={index === 0}
            />
          ))}
        </Box>
      </Box>
    </CustomContainer>
  );
};
