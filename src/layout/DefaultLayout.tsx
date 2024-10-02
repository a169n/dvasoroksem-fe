import { Container } from "@mui/material";
import { Header } from "@shared/ui/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </div>
  );
}

export default DefaultLayout;
