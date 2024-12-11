import { Container } from "@mui/material";
import { Footer } from "@shared/ui/footer";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  useEffect(() => {
    alert(`Screen width: ${window.innerWidth}px`);
  }, []);
  return (
    <Container maxWidth={false} disableGutters>
      <Outlet />
      <Footer />
    </Container>
  );
}

export default DefaultLayout;
