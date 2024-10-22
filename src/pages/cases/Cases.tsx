import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MyButton } from "@shared/ui/button";
import case1 from "@assets/cases/case1.svg";
import case2 from "@assets/cases/case2.svg";
import case3 from "@assets/cases/case3.svg";
import case4 from "@assets/cases/case4.svg";
import case5 from "@assets/cases/case5.svg";
import case6 from "@assets/cases/case6.svg";
import case7 from "@assets/cases/case7.svg";
import case8 from "@assets/cases/case8.svg";
import case9 from "@assets/cases/case9.svg";
import { Footer } from "@shared/ui/footer";

export const Cases = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const [selectedCategory, setSelectedCategory] = useState("ВСЕ КЕЙСЫ");

  const categories = ["ВСЕ КЕЙСЫ", "SMM", "PRODUCTION", "TIKTOK"];

  const casesData = [
    {
      title: "Bauer",
      category: "smm",
      path: "/cases/1",
      description: "Everything for the game",
      imageUrl: case5,
    },
    {
      title: "QCS",
      category: "production",
      path: "/cases/2",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      imageUrl: case4,
    },
    {
      title: "Grandcar, 2022",
      category: "tiktok",
      path: "/cases/3",
      description: "Имиджевый ролик",
      imageUrl: case6,
    },
    {
      title: "Grandcar, 2023",
      category: "production",
      path: "/cases/4",
      description: "Рекламный ролик в детективном стиле",
      imageUrl: case9,
    },
    {
      title: "Everest",
      category: "smm",
      path: "/cases/5",
      description: "Выше с нами",
      imageUrl: case7,
    },
    {
      title: "Помоги Другому",
      category: "tiktok",
      path: "/cases/6",
      description: "Не упускайте случая делать добро",
      imageUrl: case3,
    },
    {
      title: "Nomad",
      category: "production",
      path: "/cases/7",
      description: "Лучшее начало твоего пути",
      imageUrl: case8,
    },
    {
      title: "Soyle",
      category: "production",
      path: "/cases/8",
      description: "Казахский для всех",
      imageUrl: case2,
    },
    {
      title: "Coffee BOOM",
      category: "production",
      path: "/cases/9",
      description: "Место, где становятся друзьями",
      imageUrl: case1,
    },
  ];

  const filteredCases =
    selectedCategory === "ВСЕ КЕЙСЫ"
      ? casesData
      : casesData.filter(
          (caseItem) =>
            caseItem.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <Box>
      <Box
        sx={{
          px: isMobile ? 2 : isTablet ? 4 : 8,
          py: isMobile ? 4 : isTablet ? 6 : 8,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            width: "100%",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 3 : 0,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 400,
              color: "#000",
              textTransform: "uppercase",
              fontSize: isMobile ? "32px" : isTablet ? "36px" : "92px",
              mb: isMobile ? 2 : 0,
            }}
          >
            НАШИ КЕЙСЫ
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: isMobile ? "10px" : isTablet ? "20px" : "60px",
              justifyContent: "flex-start",
              flexWrap: isMobile ? "wrap" : "nowrap",
              width: isMobile ? "100%" : "auto",
            }}
          >
            {categories.map((category) => (
              <MyButton
                key={category}
                onClick={() => setSelectedCategory(category)}
                sx={{
                  borderRadius: 0,
                  textTransform: "none",
                  fontSize: isMobile ? "14px" : isTablet ? "16px" : "20px",
                  fontWeight: 400,
                  whiteSpace: "nowrap",
                  py: isMobile ? 0.5 : 1,
                  px: isMobile ? 2 : isTablet ? 3 : 5,
                  backgroundColor:
                    selectedCategory === category ? "#000" : "#fff",
                  color: selectedCategory === category ? "#fff" : "#000",
                  flex: isMobile ? "1 1 calc(50% - 5px)" : "0 0 auto",
                }}
              >
                {category}
              </MyButton>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "30px" : "50px",
            mt: isMobile ? 3 : 4,
            minHeight: 300,
            width: "100%",
          }}
        >
          {filteredCases.length > 0 ? (
            filteredCases.map((caseItem, index) => (
              <Box
                key={index}
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: isMobile ? "20px" : "30px",
                  width: "100%",
                }}
              >
                <img
                  src={caseItem.imageUrl}
                  alt={caseItem.title}
                  style={{
                    height: "auto",
                    width: "100%",
                    maxWidth: isMobile ? "100%" : "300px",
                  }}
                />
                <Box
                  sx={{
                    py: isMobile ? "0" : "10px",
                    minHeight: isMobile ? "auto" : "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: isMobile ? "20px" : "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: isMobile ? "15px" : "30px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="h2"
                      sx={{
                        color: "#000",
                        fontWeight: "500",
                        fontSize: isMobile ? "24px" : "inherit",
                      }}
                    >
                      {caseItem.title}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontSize: isMobile ? "16px" : "22px",
                        fontWeight: "200",
                      }}
                    >
                      {caseItem.description}
                    </Typography>
                  </Box>
                  <MyButton
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      borderRadius: 0,
                      textTransform: "none",
                      fontSize: isMobile ? "14px" : isTablet ? "16px" : "20px",
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      maxWidth: isMobile ? "150px" : "200px",
                      py: isMobile ? 0.5 : 1,
                      px: 2,
                    }}
                    href={caseItem.path}
                  >
                    Смотреть кейс
                  </MyButton>
                </Box>
              </Box>
            ))
          ) : (
            <Typography sx={{ mt: 2 }}>Нет кейсов для отображения</Typography>
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
