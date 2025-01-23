import { Container } from "@mui/material";
import { Footer } from "@shared/ui/footer";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div style={{ maxWidth: "2500px", margin: "0 auto" }}>
      <Container maxWidth={false} disableGutters>
        <Outlet />
        <Footer />
      </Container>
    </div>
  );
}

export default DefaultLayout;
