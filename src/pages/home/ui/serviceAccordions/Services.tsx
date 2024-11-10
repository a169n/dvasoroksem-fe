import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import SMM_service from "@assets/SMM_service.png";
import Marketing_service from "@assets/Marketing_service.png";
import Production_service from "@assets/Production_service.png";
import Strategies_service from "@assets/Strategies_service.png";
import IT_service from "@assets/IT_service.png";
import { MyAccordion } from "@shared/ui/accordion";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const servicesData = [
    {
      title: t("services.smm.title"),
      image: SMM_service,
      items: [
        t("services.smm.socialMediaManagement"),
        t("services.smm.facebookAds"),
        t("services.smm.instagramAds"),
        t("services.smm.tiktokAds"),
        t("services.smm.contentDigitization"),
      ],
    },
    {
      title: t("services.marketing.title"),
      image: Marketing_service,
      items: [
        t("services.marketing.salesFunnelsAndCrm"),
        t("services.marketing.contextualAds"),
        t("services.marketing.prCampaigns"),
        t("services.marketing.influenceCampaigns"),
        t("services.marketing.googleYandex2gisMaps"),
        t("services.marketing.offlineMarketing"),
        t("services.marketing.aiSalesperson"),
      ],
    },
    {
      title: t("services.researchAndStrategies.title"),
      image: Strategies_service,
      items: [
        t("services.researchAndStrategies.marketingStrategies"),
        t("services.researchAndStrategies.smmStrategies"),
        t("services.researchAndStrategies.researchAndAudit"),
        t("services.researchAndStrategies.specialProjects"),
      ],
    },
    {
      title: t("services.it.title"),
      image: IT_service,
      items: [
        t("services.it.websiteDevelopment"),
        t("services.it.chatbots"),
        t("services.it.webServices"),
        t("services.it.webApplications"),
        t("services.it.seoOptimization"),
      ],
    },
    {
      title: t("services.production.title"),
      image: Production_service,
      items: [
        t("services.production.shootingProduction"),
        t("services.production.commercials"),
        t("services.production.imageCommercials"),
        t("services.production.photoProduction"),
      ],
    },
  ];

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
        {t("services.title")}
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
