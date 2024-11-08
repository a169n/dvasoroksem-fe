import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

export const ContactLinks = () => {
  const containerStyle = {
    padding: "1em",

    fontFamily: "'Raleway', sans-serif",
    color: "rgba(255, 255, 255, 0.8)",
    textShadow: "0 1px 0 rgba(255, 255, 255, 0.92)",
  };

  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    borderBottom: "1px solid rgba(255, 255, 255, 0.85)",
    display: "inline-block",
    position: "relative",
    padding: "0 0.2em",
    transition: "all 250ms",
    zIndex: 1000,
    "&::before": {
      content: '""',
      zIndex: -1,
      width: "100%",
      height: "0%",
      backgroundColor: "rgba(255, 255, 255, 0.16)",
      bottom: 0,
      left: 0,
      position: "absolute",
      transition: "height 250ms",
    },
    "&:hover": {
      color: "#000",
      borderColor: "transparent",
      "&::before": {
        height: "100%",
        backgroundColor: "#FFFFFF",
      },
    },
  };

  const linkContainerStyle = {
    mb: 2,
    display: "flex",
    alignItems: "center",
    fontSize: "1.15em",
    fontWeight: 300,
    lineHeight: 1.5,
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={linkContainerStyle}>
        <PhoneIcon sx={{ mr: 1, color: "#FFFFFF" }} />
        <Typography component="a" href="tel:+77715357690" sx={linkStyle}>
          +7 771 535 76 90
        </Typography>
      </Box>

      <Box sx={linkContainerStyle}>
        <EmailIcon sx={{ mr: 1, color: "#FFFFFF" }} />
        <Typography
          component="a"
          href="mailto:dvasoroksem@gmail.com"
          sx={linkStyle}
        >
          dvasoroksem@gmail.com
        </Typography>
      </Box>

      <Box sx={linkContainerStyle}>
        <InstagramIcon sx={{ mr: 1, color: "#FFFFFF" }} />
        <Typography
          component="a"
          href="https://instagram.com/dvasoroksem"
          target="_blank"
          rel="noopener noreferrer"
          sx={linkStyle}
        >
          dvasoroksem
        </Typography>
      </Box>

      <Box sx={linkContainerStyle}>
        <LanguageIcon sx={{ mr: 1, color: "#FFFFFF" }} />
        <Typography
          component="a"
          href="https://dvasoroksem.kz"
          target="_blank"
          rel="noopener noreferrer"
          sx={linkStyle}
        >
          dvasoroksem.kz
        </Typography>
      </Box>
    </Box>
  );
};
