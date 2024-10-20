import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { MyButton } from "@shared/ui/button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Case1 from "@assets/cases/case1.svg";
import Case2 from "@assets/cases/case2.svg";
import Case3 from "@assets/cases/case3.svg";
import Case4 from "@assets/cases/case4.svg";
import { Apply } from "./ui";

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

  const onButtonClick = () => {
    window.open("/cases", "_blank");
  };

  return (
    <>
      <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: { xs: 2, sm: 4, md: 8 } }}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 400,
              color: "#000",
              textTransform: "uppercase",
              fontSize: { xs: "24px", sm: "28px", md: "32px", lg: "64px" },
              mb: { xs: 2, sm: 3, md: 5 },
              textAlign: "start",
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
              fontSize: isMobile ? "14px" : "20px",
              fontWeight: 400,
            }}
          >
            Смотреть все
          </MyButton>
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          }}
          gap={4}
        >
          {servicesData.map((service, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <img
                src={service.imageURL}
                alt={service.title}
                style={{ width: "100%", height: "auto", marginBottom: "40px" }}
                draggable="false"
              />
              <Typography
                color="#000"
                variant="h4"
                sx={{ mt: 2, fontWeight: 500 }}
              >
                {service.title}
              </Typography>
              <Typography
                color="#000"
                fontSize={20}
                variant="body2"
                sx={{ mt: 1 }}
              >
                {service.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Apply />
    </>
  );
};
