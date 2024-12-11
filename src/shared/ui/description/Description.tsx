import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
export const Description = ({ title, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 12 },
        py: { xs: 2, sm: 4, md: 12 },
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-around",
        backgroundColor: "#161616",
        color: "white",
        alignItems: "flex-start",
        width: "100%",
        gap: 5,
      }}
    >
      <Typography
        sx={{
          minWidth: { xs: "100%", sm: "50%", md: "50%" },

          textTransform: "uppercase",
          textAlign: "start",
          fontSize: { xs: "24px", sm: "64px", md: "92px" },
          fontWeight: 400,
          lineHeight: 1,
          color: "white",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          width: { xs: "100%", sm: "50%", md: "50%" },
          color: "white",
          textAlign: "start",
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          fontWeight: 400,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
