import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HelpOthersDataImage1 from "@assets/casePages/help-others/helpotherDataImage1.png";
import HelpOthersDataImage2 from "@assets/casePages/help-others/helpotherDataImage2.png";

export const HelpOthersData = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 12 },
        py: { xs: 2, sm: 4, md: 12 },
        backgroundColor: "#161616",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={HelpOthersDataImage1}
        alt={"HelpOthersDataImage1"}
        sx={{
          width: isMobile ? "120px" : "250px",
          height: "auto",
          draggable: "false",
          position: "absolute",
          top: isMobile ? "-180px" : "-250px",
          left: isMobile ? "" : "600px",
          right: isMobile ? "70px" : "",
        }}
      />

      <Box
        component="img"
        src={HelpOthersDataImage2}
        alt={"HelpOthersDataImage2"}
        sx={{
          position: "absolute",
          width: isMobile ? "120px" : "300px",
          height: isMobile ? "120px" : "250px",
          draggable: "false",
          top: isMobile ? "-180px" : "-250px",
          right: isMobile ? "" : "240px",
          left: isMobile ? "90px" : "",
        }}
      />
    </Box>
  );
};
