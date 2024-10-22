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
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
      {/* Left Section */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ 
          pr: { md: 4 }, 
          mb: { xs: 2, md: 0 },
          width: { xs: "100%", md: "auto" }
        }}
      >
        <Box mb={{ xs: 4, md: 30 }}>
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
            КОНТАКТЫ
          </Typography>
          <Typography 
            sx={{ 
              mb: 4, 
              textAlign: "left", 
              color: "#8a8a8a",
              fontSize: { xs: "16px", sm: "18px", md: "inherit" }
            }}
          >
            CEO двасороксемь.
          </Typography>
        </Box>

        <ContactLinks />
      </Box>

      {/* Right Section */}
      <Box 
        sx={{ 
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 2 },
          maxWidth: { xs: "100%", md: "60%" },
          mt: { xs: 2, md: 0 },
        }}
      >
        {/* Name Section */}
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
            Жакимов Мерей
            <ArrowForwardIosIcon 
              sx={{ 
                width: { xs: "15px", md: "5%" }, 
                height: { xs: "15px", md: "5%" },
                ml: 1
              }} 
            />
          </Box>
        </Typography>

        {/* Images Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            component="img"
            src={footer1}
            alt="First Image"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: { xs: "200px", md: "none" },
              objectFit: "cover",
            }}
          />
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

        {/* Contact Us Text */}
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
                mr: { xs: 1, md: 0 }
              }}
            />
            свяжитесь с нами
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;