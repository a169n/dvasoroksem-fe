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
  },
  {
    imageURL: Case2,
    title: "Soyle",
    description: "Казахский для всех",
  },
  {
    imageURL: Case3,
    title: "Помоги Другому",
    description: "Не упускайте случая делать добро",
  },
  {
    imageURL: Case4,
    title: "QCS",
    description: "Лидер в стране в области бортового питания и кейтеринга",
  },
];

export const Cases = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/cases");
  };

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
          onClick={onButtonClick}
          endIcon={<ArrowForwardIcon />}
          sx={{
            borderRadius: 0,
            textTransform: "none",
            fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
            fontWeight: 400,
            whiteSpace: "nowrap",
            py: isMobile ? 1 : 1.5,
            px: isMobile ? 2 : 3,
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
              component="img"
              src={service.imageURL}
              alt={service.title}
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "100%",
                  sm: "300px",
                },
                maxHeight: {
                  xs: "200px",
                  sm: "250px",
                  md: "300px",
                },
                height: "auto",
                mb: {
                  xs: 2,
                  sm: 3,
                  md: 4,
                },
                objectFit: "cover",
              }}
              draggable="false"
            />
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
      <Apply />
    </Box>
  );
};
