import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import HelpOtherMainImage from "@assets/casePages/help-others.svg";
import { Description } from "@shared/ui/description";
export const HelpOthers = () => {
  return (
    <>
      <Header mode="dark" />
      <Box sx={{ minHeight: { xs: "200px", md: "none" } }}>
        <img
          src={HelpOtherMainImage}
          alt="help others main image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Description
        title="не упускайте случая
делать добро"
        description="Помоги Другому — благотворительная организация. Мы с радостью поддерживаем общественный фонд финансово, помогаем вести их страницу в Instagram, наша команда каждые выходные выезжает в приюты и дома престарелых."
      />
    </>
  );
};
