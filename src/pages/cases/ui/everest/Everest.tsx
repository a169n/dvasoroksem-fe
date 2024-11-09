import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import EverestMainImage from "@assets/casePages/everest.svg";
import { Description } from "@shared/ui/description";
export const Everest = () => {
  return (
    <>
      <Header mode="dark" />
      <Box minHeight={1000}>
        <img
          src={EverestMainImage}
          alt="everest main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="выше
с нами"
        description="Ведем Instagram Everest’а — профессиональный волейбольный клуб в Астане. Наш подход к контенту нацелен на подростков: создаём посты с аниме, челленджами и тренерами, вовлекая молодёжь в спорт и волейбол. Помогаем клубу вдохновлять новое поколение спортсменов."
      />
    </>
  );
};
