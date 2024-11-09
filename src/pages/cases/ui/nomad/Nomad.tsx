import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import NomadMainPage from "@assets/casePages/nomad.svg";
import { Description } from "@shared/ui/description";
export const Nomad = () => {
  return (
    <>
      <Header mode="light" />
      <Box minHeight={1000}>
        <img
          src={NomadMainPage}
          alt="nomad main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="лучшее начало
твоего пути"
        description="Запустили TikTok для компании Nomad, лидера на рынке автозаправочных станций в Казахстане, с нуля набрав 16 тысяч подписчиков. Мы нашли подход к этой специфической сфере, создавая вирусный контент для водителей, который активно обсуждался."
      />
    </>
  );
};
