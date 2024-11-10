import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import everestDataImage1 from "@assets/casePages/everest/everestDataImage1.png";
import everestDataImage2 from "@assets/casePages/everest/everestDataImage2.png";
export const EverestData = () => {
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
        position: isMobile ? "relative" : "",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "35px" : "90px",
              textAlign: isMobile ? "start" : "",
              lineHeight: " 76.95px",
            }}
          >
            50 000+
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              marginTop: isMobile ? "" : "10px",
              textAlign: "start",
              marginBottom: { xs: "40px", sm: "" },
            }}
          >
            живых подписчиков в Instagram
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: isMobile ? "35px" : "90px",
              textAlign: isMobile ? "start" : "",
              lineHeight: " 76.95px",
            }}
          >
            стабильные
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              marginTop: isMobile ? "" : "10px",
              textAlign: "start",
              marginBottom: { xs: "40px", sm: "" },
            }}
          >
            продажи
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: isMobile ? "35px" : "90px",
              textAlign: isMobile ? "start" : "",
              lineHeight: " 76.95px",
            }}
          >
            144 000+
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              marginTop: isMobile ? "" : "10px",
              textAlign: "start",
              marginBottom: { xs: "40px", sm: "" },
            }}
          >
            подписчиков в TikTok
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-around",
          alignItems: isMobile ? "flex-start" : "center",
        }}
      >
        <Box
          component="img"
          src={everestDataImage1}
          alt={"everestDataImage1"}
          sx={{
            width: isMobile ? "150px" : "250px",
            height: "auto",
            draggable: "false",
            position: isMobile ? "absolute" : "",
            top: isMobile ? "150px" : "",
            right: isMobile ? "20px" : "",
          }}
        />
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              marginBottom: isMobile ? "" : "10px",
              textAlign: "start",
            }}
          >
            Постоянное попадание
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: isMobile ? "35px" : "90px",
              textAlign: isMobile ? "start" : "",
              lineHeight: " 76.95px",
            }}
          >
            в реки
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              marginTop: isMobile ? "" : "10px",
              textAlign: "start",
              marginBottom: { xs: "40px", sm: "" },
            }}
          >
            в Instagram и TikTok
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              fontSize: isMobile ? "35px" : "90px",
              textAlign: isMobile ? "start" : "",
              lineHeight: " 76.95px",
            }}
          >
            контент
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: isMobile ? "18px" : "20px",
              marginTop: isMobile ? "" : "10px",
              textAlign: "start",
              marginBottom: { xs: "40px", sm: "" },
            }}
          >
            Живой и востребованный
          </Typography>
        </Box>
        <Box
          component="img"
          src={everestDataImage2}
          alt={"everestDataImage2"}
          sx={{
            position: isMobile ? "absolute" : "",
            width: isMobile ? "150px" : "250px",
            height: isMobile ? "200px" : "300px",
            draggable: "false",
            bottom: isMobile ? "150px" : "",
            right: isMobile ? "20px" : "",
          }}
        />
      </Box>
    </Box>
  );
};
