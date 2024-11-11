import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NomadDataImage1 from "@assets/casePages/nomad/nomadDataImage1.png";
import NomadDataImage2 from "@assets/casePages/nomad/nomadDataImage2.png";

export const NomadData = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 12 },
        py: { xs: 2, sm: 4, md: 12 },
        backgroundColor: "#161616",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        position: "relative",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: isMobile ? "18px" : "20px",
            textAlign: "start",
          }}
        >
          Создали аккаунт в TikTok, набрали
        </Typography>
        <Typography
          sx={{
            marginTop: isMobile ? "" : "10px",

            color: "#fff",
            textTransform: "uppercase",
            fontSize: isMobile ? "30px" : "90px",
            textAlign: "start",
            lineHeight: " 76.95px",
          }}
        >
          16к с нуля
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: isMobile ? "" : "100px",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: isMobile ? "18px" : "20px",
            textAlign: "start",
          }}
        >
          Нашли подход к сфере и создали
        </Typography>
        <Typography
          sx={{
            marginTop: isMobile ? "" : "10px",

            color: "#fff",
            textTransform: "uppercase",
            fontSize: isMobile ? "30px" : "90px",
            textAlign: "start",
            lineHeight: " 76.95px",
          }}
        >
          вирусный контент
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: isMobile ? "18px" : "20px",
            textAlign: "start",
            marginTop: isMobile ? "" : "10px",
            marginBottom: isMobile ? "" : "100px",

          }}
        >
          про автозаправки
        </Typography>
      </Box>
      <Box
        component="img"
        src={NomadDataImage1}
        alt={"NomadDataImage1"}
        sx={{
          width: isMobile ? "80px" : "250px",
          height: "auto",
          draggable: "false",
          position: "absolute",
          top: isMobile ? "0px" : "80px",
          left: isMobile ? "" : "550px",
          right: isMobile ? "50px" : "",
        }}
      />

      <Box
        component="img"
        src={NomadDataImage2}
        alt={"NomadDataImage2"}
        sx={{
          position: "absolute",
          width: isMobile ? "80px" : "300px",
          height: isMobile ? "80px" : "250px",
          draggable: "false",
          top: isMobile ? "180px" : "380px",
          right: isMobile ? "50px" : "720px",

        }}
      />
    </Box>
  );
};
