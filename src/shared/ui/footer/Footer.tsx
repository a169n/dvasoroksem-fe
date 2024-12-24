import { Box, Typography } from "@mui/material";
import footer2 from "@assets/footer2.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ContactLinks } from "./ui";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <Box
      sx={{
        py: { xs: 2, sm: 6, md: 8 },
        bgcolor: "#000",
        color: "#fff",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          width: "100%",
          gap: { xs: 4, md: 6 },
        }}
        px={{
          xs: "16px",
          sm: "24px",
          md: "40px",
          lg: "60px",
          xl: ["/", "/request", "/cases"].includes(location.pathname)
            ? "350px"
            : "60px",
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
            
          </Box>

          <ContactLinks />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
         

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
              draggable={false}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: { xs: "200px", md: "none" },
                objectFit: "cover",
                display: { xs: "none", md: "block" },
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
                alignItems: "center",
                justifyContent: { xs: "flex-start", md: "flex-start" },
                display: { xs: "none", md: "flex" },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  transform: { xs: "rotate(0deg)", md: "rotate(90deg)" },
                  width: "15px",
                  height: "15px",
                  mr: { xs: 1, md: 0 },
                  display: { xs: "none", md: "block" },
                }}
              />
              {t("footer.contactsUs")}
            </Box>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
