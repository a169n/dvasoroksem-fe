import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { MyButton } from "@shared/ui/button";

export const Cases = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const casesData = [
    {
      title: "Bauer",
      category: "smm",
      path: "/cases/bauer",
      description: "Everything for the game",
    },
    {
      title: "QCS",
      category: "production",
      path: "/cases/qcs",
      description: "Find and build partnerships",
    },
    {
      title: "Grandcar, 2022",
      category: "tiktok",
      path: "/cases/grandcar-2022",
      description: "Innovative race",
    },
    {
      title: "Grandcar, 2023",
      category: "production",
      path: "/cases/grandcar-2023",
      description: "Dream team work",
    },
    {
      title: "Everest",
      category: "smm",
      path: "/cases/everest",
      description: "Higher with us",
    },
    {
      title: "Помоги Другому",
      category: "tiktok",
      path: "/cases/help-another",
      description: "Do not miss the chance to do good",
    },
    {
      title: "Nomad",
      category: "production",
      path: "/cases/nomad",
      description: "Best start possible",
    },
    {
      title: "Soyle",
      category: "smm",
      path: "/cases/soyle",
      description: "Caucasian for everyone",
    },
    {
      title: "Coffee BOOM",
      category: "tiktok",
      path: "/cases/coffee-boom",
      description: "Place where friends are made",
    },
  ];

  return (
    <Box
      sx={{
        px: isMobile ? 2 : isTablet ? 4 : 8,
        py: isMobile ? 4 : isTablet ? 6 : 8,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 400,
            color: "#000",
            textTransform: "uppercase",
            fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px",
            mb: isMobile ? 2 : 0,
          }}
        >
          НАШИ КЕЙСЫ
        </Typography>
        <Box sx={{ display: "flex", gap: "16px" }}>
          {["ВСЕ КЕЙСЫ", "SMM", "PRODUCTION", "TIKTOK"].map((category) => (
            <MyButton
              key={category}
              sx={{
                borderRadius: 0,
                textTransform: "none",
                fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
                fontWeight: 400,
                whiteSpace: "nowrap",
                py: 1,
                px: isMobile ? 2 : 5,
                ...(category === "ВСЕ КЕЙСЫ" && {
                  backgroundColor: "#000",
                  color: "#fff",
                }),
              }}
            >
              {category}
            </MyButton>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "16px", mt: 4 }}>
        {casesData.map((caseItem, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? "100%" : "48%",
              mb: 4,
              alignItems: "center",
            }}
          >
            <img
              src={caseItem.imageUrl}
              alt={caseItem.title}
              style={{ width: "100%", height: "auto", marginBottom: "8px" }}
            />
            <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
              {caseItem.title}
            </Typography>
            <Typography sx={{ mb: 2 }}>{caseItem.description}</Typography>
            <MyButton
              sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: 0,
                textTransform: "none",
                fontSize: isMobile ? "16px" : isTablet ? "18px" : "20px",
                fontWeight: 400,
                whiteSpace: "nowrap",
                py: 1,
                px: isMobile ? 2 : 5,
              }}
              href={caseItem.path}
            >
              Смотреть кейс
            </MyButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
