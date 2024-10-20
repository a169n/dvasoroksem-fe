import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

export const ContactLinks = () => {
  return (
    <Box>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <PhoneIcon sx={{ mr: 1 }} />
        <Typography
          component="a"
          href="tel:+77715357690"
          sx={{
            position: "relative",
            color: "white",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            transition: "all 0.3s ease-in-out",
            padding: "2px 4px",
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "0%",
              backgroundColor: "white",
              transition: "height 0.3s ease-in-out",
              zIndex: -1,
            },
            "&:hover": {
              color: "black",
              "&::before": {
                height: "100%",
              },
            },
          }}
        >
          +7 771 535 76 90
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <EmailIcon sx={{ mr: 1 }} />
        <Typography
          component="a"
          href="mailto:dvasoroksem@gmail.com"
          sx={{
            position: "relative",
            color: "white",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            transition: "all 0.3s ease-in-out",
            padding: "2px 4px",
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "0%",
              backgroundColor: "white",
              transition: "height 0.3s ease-in-out",
              zIndex: -1,
            },
            "&:hover": {
              color: "black",
              "&::before": {
                height: "100%",
              },
            },
          }}
        >
          dvasoroksem@gmail.com
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <InstagramIcon sx={{ mr: 1 }} />
        <Typography
          component="a"
          href="https://instagram.com/dvasoroksem"
          target="_blank"
          sx={{
            position: "relative",
            color: "white",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            transition: "all 0.3s ease-in-out",
            padding: "2px 4px",
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "0%",
              backgroundColor: "white",
              transition: "height 0.3s ease-in-out",
              zIndex: -1,
            },
            "&:hover": {
              color: "black",
              "&::before": {
                height: "100%",
              },
            },
          }}
        >
          dvasoroksem
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <LanguageIcon sx={{ mr: 1 }} />
        <Typography
          component="a"
          href="https://dvasoroksem.kz"
          target="_blank"
          sx={{
            position: "relative",
            color: "white",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            transition: "all 0.3s ease-in-out",
            padding: "2px 4px",
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "0%",
              backgroundColor: "white",
              transition: "height 0.3s ease-in-out",
              zIndex: -1,
            },
            "&:hover": {
              color: "black",
              "&::before": {
                height: "100%",
              },
            },
          }}
        >
          dvasoroksem.kz
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactLinks;