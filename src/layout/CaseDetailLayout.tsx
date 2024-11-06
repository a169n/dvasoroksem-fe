
import React from "react";
import { Box } from "@mui/material";
import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";
import { Outlet, useLocation } from "react-router-dom";
import { useHeaderContext } from "@shared/context/HeaderContext";

export function CaseDetailDefaultLayout() {
  const { setIsCaseDetailPage } = useHeaderContext();
  const location = useLocation();

  // Determine if we're on a case detail page
  const isCaseDetailPage = location.pathname.startsWith("/cases/");

  // Update context when on case detail page
  React.useEffect(() => {
    setIsCaseDetailPage(isCaseDetailPage);
  }, [isCaseDetailPage, setIsCaseDetailPage]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Header />
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default CaseDetailDefaultLayout;