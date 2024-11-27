import { Box, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ServiceCard } from "./ServiceCard";

export const Services = () => {
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
        t("services.marketing.prCampaigns"),
        t("services.marketing.influenceCampaigns"),
        t("services.marketing.googleYandex2gisMaps"),
        t("services.marketing.offlineMarketing"),
        t("services.marketing.aiSalesperson"),
      ],
      imageSize: { width: "100%", height: "auto" },
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
      objectPosition: "right",
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
        }}
      >
        {t("services.title")}
      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md={6.5} container direction="column" spacing={2}>
          {servicesData
            .filter((service) =>
              ["SMM_service", "IT_service", "Production_service2"].includes(
                service.imageKey
              )
            )
            .map((service) => (
              <Grid item key={service.title}>
                <ServiceCard
                  title={service.title}
                  imageKey={service.imageKey}
                  items={service.items}
                  imageSize={service.imageSize}
                  layout={service.layout}
                  objectPosition={service.objectPosition}
                />
              </Grid>
            ))}
        </Grid>
        <Grid item xs={12} md={5.5} container direction="column" spacing={2}>
          {servicesData
            .filter((service) =>
              ["Marketing_service", "Strategies_service"].includes(
                service.imageKey
              )
            )
            .map((service) => (
              <Grid item key={service.title}>
                <ServiceCard
                  title={service.title}
                  imageKey={service.imageKey}
                  items={service.items}
                  imageSize={service.imageSize}
                  layout={service.layout}
                  objectPosition={service.objectPosition}
                />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};
