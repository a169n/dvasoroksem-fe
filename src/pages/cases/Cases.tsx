import { useEffect, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { MyButton } from "@shared/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "@shared/ui/header";

// Import case images
import case1 from "@assets/cases/case1.svg";
import case2 from "@assets/cases/case2.svg";
import case3 from "@assets/cases/case3.svg";
import case4 from "@assets/cases/case4.svg";
import case5 from "@assets/cases/case5.svg";
import case6 from "@assets/cases/case6.svg";
import case7 from "@assets/cases/case7.svg";
import case8 from "@assets/cases/case8.svg";
import case9 from "@assets/cases/case9.svg";
import { CustomContainer } from "@shared/ui/container";
import { CustomSelect } from "@shared/ui/customSelect";
// import case10 from "@assets/cases/case9.svg";

export const Cases = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(
    t("ourCases.categories.all")
  );

  const categories = [
    t("ourCases.categories.marketing"),
    t("ourCases.categories.smm"),
    t("ourCases.categories.production"),
    t("ourCases.categories.tiktok"),
    t("ourCases.categories.all"),
  ];

  const casesData = [
    {
      title: "QCS",
      category: t("ourCases.categories.marketing"),
      path: "/cases/qcs",
      description: t("ourCases.qcs.description"),
      imageUrl: case4,
    },
    {
      title: "Bauer",
      category: t("ourCases.categories.marketing"),
      path: "/cases/bauer",
      description: t("ourCases.bauer.description"),
      imageUrl: case5,
    },
    // {
    //   title: "Splat",
    //   category: t("ourCases.categories.marketing"),
    //   path: "/cases/splat",
    //   description: t("ourCases.splat.description"),
    //   imageUrl: case10,
    // },
    {
      title: "Everest",
      category: t("ourCases.categories.smm"),
      path: "/cases/everest",
      description: t("ourCases.everest.description"),
      imageUrl: case7,
    },
    {
      title: "Помоги Другому",
      category: t("ourCases.categories.smm"),
      path: "/cases/help-others",
      description: t("ourCases.helpOthers.description"),
      imageUrl: case3,
    },
    {
      title: "Grandcar, 2022",
      category: t("ourCases.categories.production"),
      path: "/cases/grandcar/2022",
      description: t("ourCases.grandcar2022.description"),
      imageUrl: case6,
    },
    {
      title: "Grandcar, 2023",
      category: t("ourCases.categories.production"),
      path: "/cases/grandcar/2023",
      description: t("ourCases.grandcar2023.description"),
      imageUrl: case9,
    },
    {
      title: "Soyle",
      category: t("ourCases.categories.production"),
      path: "/cases/soyle",
      description: t("ourCases.soyle.description"),
      imageUrl: case2,
    },
    {
      title: "Nomad",
      category: t("ourCases.categories.tiktok"),
      path: "/cases/nomad",
      description: t("ourCases.nomad.description"),
      imageUrl: case8,
    },
    {
      title: "Coffee BOOM",
      category: t("ourCases.categories.tiktok"),
      path: "/cases/coffee-boom",
      description: t("ourCases.coffeeBoom.description"),
      imageUrl: case1,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedCategory(t("ourCases.categories.all"));
  }, [t]);

  const filteredCases =
    selectedCategory === t("ourCases.categories.all")
      ? casesData
      : casesData.filter((caseItem) => caseItem.category === selectedCategory);

  return (
    <>
      <Header />
      <CustomContainer>
        <Box
          sx={{
            py: isMobile ? 4 : isTablet ? 6 : 8,
          }}
        >
          <Box
            mb={isMobile ? 3 : isTablet ? 7 : 12}
            sx={{
              maxWidth: "100%",
              marginTop: isMobile ? 6 : 4,
              display: "flex",
              gap: isMobile ? "40px" : "30px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              textTransform={"uppercase"}
              sx={{
                fontWeight: 500,
                color: "#000",
                textTransform: "uppercase",
                fontSize: isMobile ? "32px" : isTablet ? "36px" : "70px",
                mb: isMobile ? 2 : 0,
                width: isMobile ? "100%" : "auto",
                textAlign: "left",
                lineHeight: 1,
              }}
            >
              {t("ourCases.title1")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: isMobile ? "10px" : "20px",
                flexWrap: isMobile ? "wrap" : "nowrap",
                width: isMobile ? "50%" : "auto",
              }}
            >
              {isMobile ? (
                <CustomSelect
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  options={categories.map((category) => ({
                    value: category,
                    label: category,
                  }))}
                  mode="default"
                  sx={{
                    width: "130px",
                    fontSize: "14px",
                    height: "40px",
                    backgroundColor: "#000",
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
                    {category.toUpperCase()}
                  </MyButton>
                ))
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
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
                    onClick={() => navigate(caseItem.path)}
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
                    <LazyLoadImage
                      src={caseItem.imageUrl}
                      alt={caseItem.title}
                      effect="blur"
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
                        onClick={() => navigate(caseItem.path)}
                        variant="h4"
                        component="p"
                        sx={{
                          color: "#000",
                          fontWeight: 700,
                          fontSize: isMobile ? "16px" : "22px",
                          cursor: "pointer",
                        }}
                      >
                        {caseItem.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        component="p"
                        textAlign={"left"}
                        sx={{ cursor: "pointer" }}
                        onClick={() => navigate(caseItem.path)}
                      >
                        {caseItem.description}
                      </Typography>
                    </Box>
                    <MyButton
                      variant="text"
                      sx={{
                        display: isMobile ? "none " : "block",
                        width: "fit-content",
                        marginTop: isMobile ? 3 : 0,
                        fontWeight: 400,
                        borderRadius: 0,
                        alignItems: "center",
                        color: "#000",
                        fontSize: isMobile ? "14px" : "18px",
                        textAlign: "center",
                        textTransform: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#000",
                          color: "#fff",
                          borderColor: "#fff",
                        },
                      }}
                      onClick={() => navigate(caseItem.path)}
                    >
                      {t("ourCases.buttonText2")}
                      <ArrowForwardIcon
                        sx={{
                          fontSize: isMobile ? "14px" : "18px",
                          ml: isMobile ? "8px" : "14px",
                        }}
                      />
                    </MyButton>
                  </Box>
                </Box>
              ))
            ) : (
              <Typography
                variant="body1"
                sx={{
                  color: "#000",
                  fontSize: isMobile ? "14px" : "18px",
                  fontWeight: 300,
                }}
              >
                {t("ourCases.empty")}
              </Typography>
            )}
          </Box>
        </Box>
      </CustomContainer>
    </>
  );
};
