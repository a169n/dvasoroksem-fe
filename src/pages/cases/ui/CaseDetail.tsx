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
      description: "Everything For the game",
      details:
        "Для мирового бренда хоккейной экипировки Bauer в Казахстане мы ведём Instagram, создаём качественный контент, погружённый в хоккейный мир, разрабатываем печатную продукцию, баннеры и многое другое.",
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
      description: "лидер в области бортового питания",
      details:
        "QCS обеспечивает высочайшее качество услуг в авиационной отрасли, ежегодно обслуживая более 2 миллионов пассажиров. Мы занялись SEO-оптимизацией и узнаваемостью бренда, ведём Instagram QCS, где благодаря нашему контенту люди хотят работать в компании.",
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
      title: "grandcar 2022",
      description: "grandcar 2022",
      details:
        "Презентационный ролик о компании, которая покупает автомобили на аукционах в США и доставляет их клиенту в любую точку мира. В этом видео мы постарались раскрыть их преимущества перед конкурентами и оставить приятное впечатление у клиентов.",
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
      title: "grandcar 2023",
      description: "grandcar 2023",
      details:
        "Этот рекламный ролик был снят в детективном стиле, чтобы привлечь внимание клиентов и увлечь их атмосферой. Таким образом, мы хотели убить двух зайцев одним выстрелом: рассказать о преимуществах компании и увеличить глубину просмотра за счет необычной подачи. Партнер остался доволен, мы надеемся, что вы тоже!",
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
      title: "Everest",
      description: "выше с нами",
      details:
        "Ведем Instagram Everest’а — профессиональный волейбольный клуб в Астане. Наш подход к контенту нацелен на подростков: создаём посты с аниме, челленджами и тренерами, вовлекая молодёжь в спорт и волейбол. Помогаем клубу вдохновлять новое поколение спортсменов.",
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
      title: "Помоги Другому",
      description: "не упускайте случая делать добро",
      details:
        "Помоги Другому — благотворительная организация. Мы с радостью поддерживаем общественный фонд финансово, помогаем вести их страницу в Instagram, наша команда каждые выходные выезжает в приюты и дома престарелых.eading in the country in the field of onboard catering...",
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
      title: "Nomad",
      description: (
        <span>
          лучшее начало <br />
          твоего пути
        </span>
      ),

      details:
        "Запустили TikTok для компании Nomad, лидера на рынке автозаправочных станций в Казахстане, с нуля набрав 16 тысяч подписчиков. Мы нашли подход к этой специфической сфере, создавая вирусный контент для водителей, который активно обсуждался.",
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
      title: "SOYLE",
      description: (
        <span>
          Казахский <br />
          язык для всех
        </span>
      ),
      details:
        "Мы создали серию видеороликов для онлайн-школы казахского языка SOYLE. Нашей задачей было разработать качественный и интересный контент с продуманным сценарием и высоким уровнем продакшна. Видеоуроки на YouTube ориентированы на тех, кто хочет изучать казахский язык, сочетая обучение и развлечение",
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
      title: "Coffee BOOM",
      description: "место, где становятся друзьями",
      details:
        "Мы запустили TikTok для сети кофеен Coffee BOOM. Благодаря продуманной и актуальной контент-стратегии с нуля набрали 50 тысяч подписчиков.",
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
          paddingTop: "64px", // Ensure content is not under the header
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
          alignItems: "center",
          color: "#fff",
          backgroundColor: "#161616",
          px: { xs: 0, md: 8 },
          py: { xs: 0, md: 8 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            minWidth: "50%",
            mt: 2,
            mb: 1,
            fontSize: "80px",
            textTransform: "uppercase",
          }}
        >
          {caseItem.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: "50%",
            color: "#fff",
            mb: 1,
            textAlign: "start",
            fontSize: "24px",
          }}
        >
          {caseItem.details}
        </Typography>
      </Box>
    </Box>
  );
};

export default CaseDetail;
