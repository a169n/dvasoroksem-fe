import { Container } from "@mui/material";
import { Footer } from "@shared/ui/footer";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <Container maxWidth={false} disableGutters sx={{ maxWidth: "1920px" }}>
      <Outlet />
      <Footer />
    </Container>
  );
}

export default DefaultLayout;
