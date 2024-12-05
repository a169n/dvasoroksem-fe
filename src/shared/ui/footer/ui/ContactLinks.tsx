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
    width: "200px",
  };

  const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    display: "inline-block",
    position: "relative",
    fontSize: "16px",
    transition: "color 250ms ease-in-out",
    zIndex: 1,
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "2px",
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      zIndex: -1,
      transition:
        "height 250ms ease-in-out, background-color 250ms ease-in-out",
    },
    "&:hover": {
      color: "#000",
      "&::before": {
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    },
  };

  const linkContainerStyle = {
    mb: 2,
    display: "flex",
    alignItems: "center",
  };

  const iconStyle = {
    mr: 1,
    color: "#FFFFFF",
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={linkContainerStyle}>
        <PhoneIcon sx={iconStyle} />
        <Typography component="a" href="tel:+77776660247" sx={linkStyle}>
          +7 777 666 02 47
        </Typography>
      </Box>

      <Box sx={linkContainerStyle}>
        <EmailIcon sx={iconStyle} />
        <Typography
          component="a"
          href="mailto:dvasoroksem@gmail.com"
          sx={linkStyle}
        >
          dvasoroksem@gmail.com
        </Typography>
      </Box>

      <Box sx={linkContainerStyle}>
        <InstagramIcon sx={iconStyle} />
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
        <LanguageIcon sx={iconStyle} />
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
