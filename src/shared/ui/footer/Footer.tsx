import { memo, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ContactLinks } from "./ui";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import footer2 from "@assets/footer2.webp";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = memo(({ children }: MainContainerProps) => {
  const containerStyles = useMemo(
    () => ({
      py: { xs: 2, sm: 6, md: 8 },
      bgcolor: "#000",
      color: "#fff",
    }),
    []
  );

  return <Box sx={containerStyles}>{children}</Box>;
});

interface ContactSectionProps {
  title: string;
}

const ContactSection = memo(({ title }: ContactSectionProps) => {
  const containerStyles = useMemo(
    () => ({
      pr: { md: 4 },
      mb: { xs: 2, md: 0 },
      width: { xs: "100%", md: "auto" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }),
    []
  );

  const titleStyles = useMemo(
    () => ({
      fontWeight: 450,
      textTransform: "uppercase",
      fontSize: { xs: "32px", sm: "36px", md: "42px", lg: "70px" },
      mb: 2,
      textAlign: "start",
    }),
    []
  );

  return (
    <Box sx={containerStyles}>
      <Box mb={{ xs: 4 }}>
        <Typography variant="h2" component="h1" sx={titleStyles}>
          {title}
        </Typography>
      </Box>
      <ContactLinks />
    </Box>
  );
});

const ImageSection = memo(() => {
  const imageStyles = useMemo(
    () => ({
      width: "275px",
      height: "auto",
      maxHeight: { xs: "200px", md: "none" },
      objectFit: "cover",
      display: { xs: "none", md: "block" },
    }),
    []
  );

  return (
    <Box
      component="img"
      src={footer2}
      alt="Second Image"
      draggable={false}
      sx={imageStyles}
    />
  );
});

const ContactUsText = memo(({ text }: { text: string }) => {
  const textContainerStyles = useMemo(
    () => ({
      color: "#fff",
      writingMode: { xs: "horizontal-tb", md: "vertical-rl" },
      alignContent: "end",
      textTransform: "uppercase",
      fontSize: { xs: "16px", sm: "18px" },
      order: { xs: 3, md: 3 },
      textAlign: { xs: "left", md: "right" },
    }),
    []
  );

  const arrowContainerStyles = useMemo(
    () => ({
      alignItems: "center",
      justifyContent: { xs: "flex-start", md: "flex-start" },
      display: { xs: "none", md: "flex" },
    }),
    []
  );

  const arrowStyles = useMemo(
    () => ({
      transform: { xs: "rotate(0deg)", md: "rotate(90deg)" },
      width: "15px",
      height: "15px",
      mr: { xs: 1, md: 0 },
      display: { xs: "none", md: "block" },
    }),
    []
  );

  return (
    <Typography sx={textContainerStyles}>
      <Box sx={arrowContainerStyles}>
        <ArrowForwardIosIcon sx={arrowStyles} />
        {text}
      </Box>
    </Typography>
  );
});

export const Footer = memo(() => {
  const { t } = useTranslation();
  const location = useLocation();

  const contentContainerStyles = useMemo(
    () => ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      gap: { xs: 4, md: 6 },
      px: {
        xs: "16px",
        sm: "24px",
        md: "40px",
        lg: "60px",
        xl: ["/", "/request", "/cases"].includes(location.pathname)
          ? "350px"
          : "60px",
      },
    }),
    [location.pathname]
  );

  const rightSectionStyles = useMemo(
    () => ({
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      width: "100%",
      height: "100%",
      justifyContent: "flex-end",
    }),
    []
  );

  const imageContainerStyles = useMemo(
    () => ({
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: 2,
      order: { xs: 1, md: 2 },
      justifyContent: { xs: "flex-start", md: "" },
    }),
    []
  );

  return (
    <MainContainer>
      <Box sx={contentContainerStyles}>
        <ContactSection title={t("footer.contacts")} />
        <Box sx={rightSectionStyles}>
          <Box sx={imageContainerStyles}>
            <ImageSection />
          </Box>
          <ContactUsText text={t("footer.contactsUs")} />
        </Box>
      </Box>
    </MainContainer>
  );
});

MainContainer.displayName = "MainContainer";
ContactSection.displayName = "ContactSection";
ImageSection.displayName = "ImageSection";
ContactUsText.displayName = "ContactUsText";
Footer.displayName = "Footer";

export default Footer;
