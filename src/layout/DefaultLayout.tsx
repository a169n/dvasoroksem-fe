import { Box } from "@mui/material";
import { Header } from "@shared/ui/header";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Outlet />
      </Box>
    </div>
  );
}

export default DefaultLayout;
