import { Box } from "@mui/material";
import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div style={{ maxWidth: "2000px" }}>
      <Header />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
