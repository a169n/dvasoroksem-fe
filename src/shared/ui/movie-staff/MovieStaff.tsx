import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MyButton } from "../button";
import DirectorImage from "@assets/director.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import YouTubeIcon from "@mui/icons-material/YouTube";
export const MovieStaff = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 12 },
        py: { xs: 2, sm: 4, md: 12 },
        backgroundColor: "#161616",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <MyButton
          variant="contained"
          sx={{
            py: 1,
            mt: 3,
            height: "auto",
            width: isMobile ? "100%" : "20%",
            backgroundColor: "#161616",
            color: "#fff",
            border: "1px solid #fff",
            gap: "10px",
            "&:hover": {
              backgroundColor: "#f0f0f0",
              color: "#000",
            },
          }}
        >
          Смотреть видеоролик на YouTube
          <YouTubeIcon />
        </MyButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: isMobile ? "" : "flex",
            width: isMobile ? "100%" : "30%",
          }}
        >
          <Box
            component="img"
            src={DirectorImage}
            alt="Director's Image"
            sx={{
              width: isMobile ? "100%" : "70%",
              height: "auto",
              maxHeight: { xs: "300px", md: "none" },
              objectFit: "cover",
            }}
          />
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
                marginBottom: { xs: 2, md: 0 },
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
              директор production-отдела
            </Box>
          </Typography>
        </Box>
        <Box sx={{ width: isMobile ? "100%" : "30%" }}>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            Продюсер - Галымжан Актаев
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            Режиссер - Галымжан Актаев
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            Оператор-постановщик - Нурболат Кулумканов
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            Аренда оборудования и освещения - KinoRent
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "start" }}>
            Монтаж - Галымжан Актаев и Нурболат Кулумканов
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
