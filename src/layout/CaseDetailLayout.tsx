import React from "react";
import { Box } from "@mui/material";
import { Footer } from "@shared/ui/footer";
import { Header } from "@shared/ui/header";
import { Outlet, useLocation } from "react-router-dom";
import { useHeaderContext } from "@shared/context/HeaderContext";

export function CaseDetailDefaultLayout() {
  const { setCaseDetailPageData } = useHeaderContext();
  const location = useLocation();

  // Extract case ID from URL if we are on a case detail page
  const isCaseDetailPage = location.pathname.startsWith("/cases/");
  const currentCaseId = isCaseDetailPage ? location.pathname.split("/")[2] : null;

  // Update context when on case detail page
  React.useEffect(() => {
    setCaseDetailPageData(isCaseDetailPage, currentCaseId);
    // Clean up function to reset state when component unmounts or when URL changes
    return () => {
      setCaseDetailPageData(false, null);
    };
  }, [isCaseDetailPage, currentCaseId, setCaseDetailPageData]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header />

      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default CaseDetailDefaultLayout;