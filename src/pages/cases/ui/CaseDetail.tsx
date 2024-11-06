import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useHeaderContext } from "@shared/context/HeaderContext";
import case_detail1 from "@assets/case-detail-images/1.svg";

const CaseDetail = () => {
  const { id } = useParams();
  const { setIsCaseDetailPage } = useHeaderContext();

  const casesData = [
    {
      id: "1",
      title: "Bauer",
      description: "Everything for the game",
      details: "Для мирового бренда хоккейной экипировки Bauer в Казахстане...",
      imageUrl: case_detail1,
      uniqueFeatures: [
        {
          featureTitle: "Хоккейный Мир",
          stats: "Средний ER — 25%",
          design: "Печатный дизайн бренда: стикеры, раскраски",
          cardImageUrl: "path_to_card1_image",
        },
      ],
    },
    {
      id: "2",
      title: "QCS",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      details: "Leading in the country in the field of onboard catering...",
      imageUrl: "path_to_case4_image",
      uniqueFeatures: [
        {
          featureTitle: "Угадите еду",
          stats: "С 34-го на 1-е место",
          design: "2GIS, Google и Yandex",
          cardImageUrl: "path_to_card2_image",
        },
      ],
    },
    // Add other cases similarly
  ];

  const caseItem = casesData.find((item) => item.id === id);

  useEffect(() => {
    if (caseItem) {
      setIsCaseDetailPage(true);
    }

    return () => {
      setIsCaseDetailPage(false);
    };
  }, [caseItem, setIsCaseDetailPage]);

  if (!caseItem) {
    return <Typography>Кейс не найден</Typography>;
  }

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${caseItem.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff", // Ensure text stands out
          paddingTop: "64px", // Ensure content is not under the header
        }}
      ></Box>
      <Typography variant="h4" sx={{ mt: 2, mb: 1 }}>
        {caseItem.title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {caseItem.description}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        {caseItem.details}
      </Typography>
    </Box>
  );
};

export default CaseDetail;
