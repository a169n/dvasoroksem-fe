import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ServiceCard } from "./ServiceCard";
import { CustomContainer } from "@shared/ui/container";
import { useTranslation } from "react-i18next";

export const Services = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t("services.smm.title"),
      imageKey: "SMM_service",
      items: [
        t("services.smm.socialMediaManagement"),
        t("services.smm.facebookAds"),
        t("services.smm.instagramAds"),
        t("services.smm.tiktokAds"),
        t("services.smm.contentDigitization"),
      ],
      imageSize: { width: "283px", height: "250px" },
      layout: "default",
      objectPosition: "left",
    },
    {
      title: t("services.marketing.title"),
      imageKey: "Marketing_service",
      items: [
        t("services.marketing.salesFunnelsAndCrm"),
        t("services.marketing.contextualAds"),
        t("services.marketing.googleYandex2gisMaps"),
        t("services.marketing.prCampaigns"),
        t("services.marketing.influenceCampaigns"),
        t("services.marketing.offlineMarketing"),
        t("services.marketing.aiSalesperson"),
      ],
      imageSize: { width: "100%", height: "224px" },
      layout: "vertical",
      objectPosition: "center",
    },
    {
      title: t("services.researchAndStrategies.title"),
      imageKey: "Strategies_service",
      items: [
        t("services.researchAndStrategies.marketingStrategies"),
        t("services.researchAndStrategies.smmStrategies"),
        t("services.researchAndStrategies.researchAndAudit"),
        t("services.researchAndStrategies.specialProjects"),
      ],
      imageSize: { width: "190px", height: "204px" },
      layout: "default",
      objectPosition: "center",
    },
    {
      title: t("services.it.title"),
      imageKey: "IT_service",
      items: [
        t("services.it.websiteDevelopment"),
        t("services.it.chatbots"),
        t("services.it.webServices"),
        t("services.it.webApplications"),
        t("services.it.seoOptimization"),
      ],
      imageSize: { width: "283px", height: "240px" },
      layout: "default",
      objectPosition: "left",
    },
    {
      title: t("services.production.title"),
      imageKey: "Production_service2",
      items: [
        t("services.production.shootingProduction"),
        t("services.production.commercials"),
        t("services.production.imageCommercials"),
        t("services.production.photoProduction"),
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
      {isSmallScreen && (
        <Typography
          sx={{
            fontFamily: "Futura PT",
            fontSize: "40px",
            fontWeight: 450,
            lineHeight: "40px",
            textAlign: "left",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
            textTransform: "uppercase",
            mb: 4,
          }}
        >
          {t("services.title")}
        </Typography>
      )}
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
