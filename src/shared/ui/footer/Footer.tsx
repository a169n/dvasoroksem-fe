import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import footer1 from "@assets/footer1.svg";
import footer2 from "@assets/footer2.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ContactLinks } from "./ui";
export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "start",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 2, sm: 4, md: 8 },
        bgcolor: "#000",
        color: "#fff",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        sx={{ pr: { md: 4 }, mb: { xs: 4, md: 0 } }}
      >
        <Box mb={30}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "64px" },
              mb: 2,
              textAlign: "start",
            }}
          >
            КОНТАКТЫ
          </Typography>
          <Typography sx={{ mb: 4, textAlign: "left", color: "#8a8a8a" }}>
            CEO двасороксемь.
          </Typography>
        </Box>

        <ContactLinks/>
      </Box>
      <Box sx={{ display: "flex", gap: 2, maxWidth: "60%" }}>
        <Typography
          sx={{
            textAlign: "right",
            alignContent: "end",
            color: "#fff",
            maxWidth: "20%",
            textTransform: "uppercase",
            fontSize: "24px",
            width: "50vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            Жакимов Мерей
            <ArrowForwardIosIcon sx={{ width: "5%", height: "5%" }} />
          </Box>
        </Typography>
        <Box
          component="img"
          src={footer1}
          alt="First Image"
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          component="img"
          src={footer2}
          alt="Second Image"
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
        <Typography
          sx={{
            color: "#fff",
            writingMode: "vertical-rl",
            alignContent: "end",
            textTransform: "uppercase",
            fontSize: "18px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <ArrowForwardIosIcon
              sx={{ transform: "rotate(90deg)", width: "3%", height: "3%" }}
            />
            свяжитесь с нами
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
