import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useHeaderContext } from "@shared/context/HeaderContext";
import case_detail1 from "@assets/case-detail-images/1.svg";
import case_detail2 from "@assets/case-detail-images/2.svg";
import case_detail3 from "@assets/case-detail-images/3.svg";
import case_detail4 from "@assets/case-detail-images/4.svg";
import case_detail5 from "@assets/case-detail-images/5.svg";
import case_detail6 from "@assets/case-detail-images/6.svg";
import case_detail7 from "@assets/case-detail-images/7.svg";
import case_detail8 from "@assets/case-detail-images/8.svg";
import case_detail9 from "@assets/case-detail-images/9.svg";
const CaseDetail = () => {
  const { id } = useParams();
  const { setCaseDetailPageData } = useHeaderContext();

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
      imageUrl: case_detail2,
      uniqueFeatures: [
        {
          featureTitle: "Угадите еду",
          stats: "С 34-го на 1-е место",
          design: "2GIS, Google и Yandex",
          cardImageUrl: "path_to_card2_image",
        },
      ],
    },
    {
      id: "3",
      title: "QCS",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      details: "Leading in the country in the field of onboard catering...",
      imageUrl: case_detail3,
      uniqueFeatures: [
        {
          featureTitle: "Угадите еду",
          stats: "С 34-го на 1-е место",
          design: "2GIS, Google и Yandex",
          cardImageUrl: "path_to_card2_image",
        },
      ],
    },
    {
      id: "4",
      title: "QCS",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      details: "Leading in the country in the field of onboard catering...",
      imageUrl: case_detail4,
      uniqueFeatures: [
        {
          featureTitle: "Угадите еду",
          stats: "С 34-го на 1-е место",
          design: "2GIS, Google и Yandex",
          cardImageUrl: "path_to_card2_image",
        },
      ],
    },
    {
      id: "5",
      title: "QCS",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      details: "Leading in the country in the field of onboard catering...",
      imageUrl: case_detail5,
      uniqueFeatures: [
        {
          featureTitle: "Угадите еду",
          stats: "С 34-го на 1-е место",
          design: "2GIS, Google и Yandex",
          cardImageUrl: "path_to_card2_image",
        },
      ],
    },
    {
      id: "6",
      title: "QCS",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      details: "Leading in the country in the field of onboard catering...",
      imageUrl: case_detail6,
      uniqueFeatures: [
        {
          featureTitle: "Угадите еду",
          stats: "С 34-го на 1-е место",
          design: "2GIS, Google и Yandex",
          cardImageUrl: "path_to_card2_image",
        },
      ],
    },
    {
      id: "7",
      title: "QCS",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      details: "Leading in the country in the field of onboard catering...",
      imageUrl: case_detail7,
      uniqueFeatures: [
        {
          featureTitle: "Угадите еду",
          stats: "С 34-го на 1-е место",
          design: "2GIS, Google и Yandex",
          cardImageUrl: "path_to_card2_image",
        },
      ],
    },
    {
      id: "8",
      title: "QCS",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      details: "Leading in the country in the field of onboard catering...",
      imageUrl: case_detail8,
      uniqueFeatures: [
        {
          featureTitle: "Угадите еду",
          stats: "С 34-го на 1-е место",
          design: "2GIS, Google и Yandex",
          cardImageUrl: "path_to_card2_image",
        },
      ],
    },
    {
      id: "9",
      title: "QCS",
      description: "Лидер в стране в области бортового питания и кейтеринга",
      details: "Leading in the country in the field of onboard catering...",
      imageUrl: case_detail9,
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
      setCaseDetailPageData(true, id ?? null);
    }

    return () => {
      setCaseDetailPageData(false, null);
    };
  }, [caseItem, id, setCaseDetailPageData]);
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
