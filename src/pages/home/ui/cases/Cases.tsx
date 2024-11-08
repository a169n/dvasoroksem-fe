import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { MyButton } from "@shared/ui/button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Case1 from "@assets/cases/case1.svg";
import Case2 from "@assets/cases/case2.svg";
import Case3 from "@assets/cases/case3.svg";
import Case4 from "@assets/cases/case4.svg";
import { Apply } from "./ui";
import { useNavigate } from "react-router-dom";

const servicesData = [
  {
    imageURL: Case1,
    title: "Coffee BOOM",
    description: "Место, где становятся друзьями",
    path: "/cases/coffee-boom",
  },
  {
    imageURL: Case2,
    title: "Soyle",
    description: "Казахский для всех",
    path: "/cases/soyle",
  },
  {
    imageURL: Case3,
    title: "Помоги Другому",
    description: "Не упускайте случая делать добро",
    path: "/cases/help-others",
  },
  {
    imageURL: Case4,
    title: "QCS",
    description: "Лидер в стране в области бортового питания и кейтеринга",
    path: "/cases/qcs",
  },
];

export const Cases = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: isMobile ? 2 : isTablet ? 4 : 8,
        py: isMobile ? 4 : isTablet ? 6 : 8,
      }}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems={isMobile ? "flex-start" : "center"}
        justifyContent="space-between"
        mb={isMobile ? 3 : isTablet ? 5 : 7}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 400,
            color: "#000",
            textTransform: "uppercase",
            fontSize: isMobile
              ? "28px"
              : isTablet
                ? "36px"
                : isDesktop
                  ? "48px"
                  : "64px",
            mb: isMobile ? 2 : 0,
          }}
        >
          НАШИ КЕЙСЫ
        </Typography>
        <MyButton
          onClick={() => {
            navigate("/cases");
          }}
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: 0,
            textTransform: "none",
            fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
            fontWeight: 400,
            whiteSpace: "nowrap",
            py: isMobile ? 1 : 0.5,
            px: isMobile ? 2 : 2,
          }}
        >
          Смотреть все
        </MyButton>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={
          isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)"
        }
        gap={isMobile ? 3 : isTablet ? 4 : 5}
      >
        {servicesData.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Box
              onClick={() => navigate(service.path)}
              sx={{
                position: "relative",
                width: "100%",
                cursor: "pointer",
                "&:hover .hover-overlay": {
                  opacity: 1,
                },
              }}
            >
              <img
                src={service.imageURL}
                alt={service.title}
                draggable="false"
                width="100%"
                height="100%"
              />
              <Box
                className="hover-overlay"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bgcolor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0s",
                }}
              >
                <ArrowForwardIcon sx={{ color: "#fff", fontSize: "90px" }} />
              </Box>
            </Box>
            <Typography
              color="#000"
              variant="h4"
              sx={{
                mt: 1,
                fontWeight: 500,
                fontSize: isMobile ? "20px" : isTablet ? "22px" : "24px",
              }}
            >
              {service.title}
            </Typography>
            <Typography
              color="#000"
              textAlign="left"
              sx={{
                mt: 1,
                fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
                lineHeight: 1.4,
              }}
            >
              {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box mt={5}>
        <Apply />
      </Box>
    </Box>
  );
};
