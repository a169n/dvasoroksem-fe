import { useEffect, useState } from "react";
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
import { Header } from "@shared/ui/header";
import { Select, MenuItem } from "@mui/material";
import { MySelect } from "@shared/ui/select";
export const Cases = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [selectedCategory, setSelectedCategory] = useState("ВСЕ КЕЙСЫ");

  const categories = ["ВСЕ КЕЙСЫ", "SMM", "PRODUCTION", "TIKTOK"];
  const casesData = [
    {
      title: "Bauer",
      category: "smm",
      path: "/cases/bauer",
      description: "Everything for the game",
      imageUrl: case5,
    },
    {
      title: "QCS",
      category: "production",
      path: "/cases/qcs",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      imageUrl: case4,
    },
    {
      title: "Grandcar, 2022",
      category: "tiktok",
      path: "/cases/grandcar/2022",
      description: "Имиджевый ролик",
      imageUrl: case6,
    },
    {
      title: "Grandcar, 2023",
      category: "production",
      path: "/cases/grandcar/2023",
      description: "Рекламный ролик в детективном стиле",
      imageUrl: case9,
    },
    {
      title: "Everest",
      category: "smm",
      path: "/cases/everest",
      description: "Выше с нами",
      imageUrl: case7,
    },
    {
      title: "Помоги Другому",
      category: "tiktok",
      path: "/cases/help-others",
      description: "Не упускайте случая делать добро",
      imageUrl: case3,
    },
    {
      title: "Nomad",
      category: "production",
      path: "/cases/nomad",
      description: "Лучшее начало твоего пути",
      imageUrl: case8,
    },
    {
      title: "Soyle",
      category: "production",
      path: "/cases/soyle",
      description: "Казахский для всех",
      imageUrl: case2,
    },
    {
      title: "Coffee BOOM",
      category: "production",
      path: "/cases/coffee-boom",
      description: "Место, где становятся друзьями",
      imageUrl: case1,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredCases =
    selectedCategory === "ВСЕ КЕЙСЫ"
      ? casesData
      : casesData.filter(
          (caseItem) =>
            caseItem.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <>
      <Header />
      <Box
        sx={{
          px: isMobile ? 2 : isTablet ? 4 : 8,
          py: isMobile ? 4 : isTablet ? 6 : 8,
          width: "100%",
        }}
      >
        <Box
          mb={isMobile ? 3 : isTablet ? 7 : 12}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            textTransform={"uppercase"}
            sx={{
              fontWeight: 400,
              color: "#000",
              textTransform: "uppercase",
              fontSize: isMobile ? "32px" : isTablet ? "36px" : "72px",
              mb: isMobile ? 2 : 0,
              width: isMobile ? "100%" : "auto",
              textAlign: "left",
            }}
          >
            Наши кейсы
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: isMobile ? "10px" : "20px",
              flexWrap: isMobile ? "wrap" : "nowrap",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: isMobile ? "10px" : "20px",
                flexWrap: isMobile ? "wrap" : "nowrap",
                width: isMobile ? "100%" : "auto",
              }}
            >
              {isMobile ? (
                <MySelect
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  options={categories.map((category) => ({
                    value: category,
                    label: category,
                  }))}
                  mode="default"
                  sx={{
                    width: "100%",
                    fontSize: "14px",
                    height: "40px",
                    backgroundColor: "#fff",
                  }}
                />
              ) : (
                categories.map((category) => (
                  <MyButton
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    sx={{
                      borderRadius: 0,
                      textTransform: "none",
                      fontSize: isTablet ? "16px" : "20px",
                      py: 0.3,
                      px: isTablet ? 2 : 4,
                      backgroundColor:
                        selectedCategory === category ? "#000" : "#fff",
                      color: selectedCategory === category ? "#fff" : "#000",
                      flex: "0 0 auto",
                    }}
                  >
                    {category}
                  </MyButton>
                ))
              )}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "30px" : "50px",
            mt: isMobile ? 3 : 4,
            minHeight: 300,
          }}
        >
          {filteredCases.length > 0 ? (
            filteredCases.map((caseItem, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: isMobile ? "20px" : "30px",
                  width: "100%",
                }}
              >
                <Box
                  component="a"
                  href={caseItem.path}
                  sx={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                    maxWidth: "270px",
                    maxHeight: "270px",
                    overflow: "hidden",
                    "&:hover img": {
                      filter: "brightness(0.7)",
                    },
                    "&:hover .iconOverlay": {
                      opacity: 1,
                    },
                  }}
                >
                  <img
                    src={caseItem.imageUrl}
                    alt={caseItem.title}
                    draggable="false"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <ArrowForwardIcon
                    className="iconOverlay"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: isMobile ? "50px" : "90px",
                      color: "#fff",
                      opacity: 0,
                    }}
                  />
                </Box>
                <Box
                  width="100%"
                  height="auto"
                  maxHeight={isMobile ? "auto" : "270px"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="h2"
                      textAlign={"left"}
                      sx={{
                        color: "#000",
                        fontWeight: 500,
                        fontSize: isMobile ? "16px" : "28px",
                      }}
                    >
                      {caseItem.title}
                    </Typography>
                    <Typography
                      textAlign={"left"}
                      sx={{
                        fontSize: isMobile ? "14px" : "18px",
                        fontWeight: 200,
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
                      maxWidth: isMobile ? "150px" : "180px",
                      py: isMobile ? 0 : 0.3,
                      px: 0,
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
    </>
  );
};
