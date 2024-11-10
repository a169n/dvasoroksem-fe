import { Box, Typography } from "@mui/material";
import footer2 from "@assets/footer2.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ContactLinks } from "./ui";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "start" },
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
        bgcolor: "#000",
        color: "#fff",
        gap: { xs: 4, md: 0 },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          pr: { md: 4 },
          mb: { xs: 2, md: 0 },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <Box mb={{ xs: 4 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: { xs: "32px", sm: "36px", md: "42px", lg: "64px" },
              mb: 2,
              textAlign: "start",
            }}
          >
            {t("footer.contacts")}
          </Typography>
          <Typography
            sx={{
              mb: 4,
              textAlign: "left",
              color: "#8a8a8a",
              fontSize: { xs: "16px", sm: "18px", md: "inherit" },
            }}
          >
            {t("footer.ceoDvasoroksem")}
          </Typography>
        </Box>

        <ContactLinks />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 2 },
          maxWidth: { xs: "100%", md: "60%" },
          mt: { xs: 2, md: 0 },
          justifyContent: "flex-end",
        }}
      >
        <Typography
          sx={{
            textAlign: { xs: "left", md: "right" },
            alignContent: "end",
            color: "#fff",
            maxWidth: { xs: "100%", md: "20%" },
            textTransform: "uppercase",
            fontSize: { xs: "20px", sm: "22px", md: "24px" },
            width: { xs: "100%", md: "50vw" },
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            {t("footer.ceoName")}
            <ArrowForwardIosIcon
              sx={{
                width: { xs: "15px", md: "5%" },
                height: { xs: "15px", md: "5%" },
                ml: 1,
              }}
            />
          </Box>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            order: { xs: 1, md: 2 },
            justifyContent: { xs: "flex-start", md: "" },
          }}
        >
          <Box
            component="img"
            src={footer2}
            alt="Second Image"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { xs: "200px", md: "none" },
              objectFit: "cover",
            }}
          />
        </Box>

        <Typography
          sx={{
            color: "#fff",
            writingMode: { xs: "horizontal-tb", md: "vertical-rl" },
            alignContent: "end",
            textTransform: "uppercase",
            fontSize: { xs: "16px", sm: "18px" },
            order: { xs: 3, md: 3 },
            textAlign: { xs: "left", md: "right" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-start", md: "flex-start" },
            }}
          >
            <ArrowForwardIosIcon
              sx={{
                transform: { xs: "rotate(0deg)", md: "rotate(90deg)" },
                width: { xs: "15px", md: "3%" },
                height: { xs: "15px", md: "3%" },
                mr: { xs: 1, md: 0 },
              }}
            />
            {t("footer.contactsUs")}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
