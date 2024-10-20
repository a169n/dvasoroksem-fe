import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { MyButton } from "@shared/ui/button";
export const Apply = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 2, sm: 4, md: 8 },
        backgroundColor: "#000",
        position: "relative",
      }}
    >
      <Box>
        <Typography
          textAlign={"left"}
          color="#fff"
          fontSize={{ xs: "24px", sm: "28px", md: "32px", lg: "64px" }}
          fontFamily="Futura PT, sans-serif"
          fontWeight={400}
          textTransform="uppercase"
        >
          — покажем всем
        </Typography>
        <Typography
          marginTop={5}
          color="#fff"
          fontSize={{ xs: "24px", sm: "28px", md: "32px", lg: "64px" }}
          fontFamily="Futura PT, sans-serif"
          fontWeight={400}
          textTransform="uppercase"
        >
          что ваш бизнес классный
        </Typography>
      </Box>
      <Box sx={{}}>
        <MyButton
          sx={{
            borderRadius: 0,
            textTransform: "none",
            fontSize: isMobile ? "14px" : "20px",
            fonwWeight: 400,
            marginTop: 25,
          }}
        >
          Я хочу оставить заявку
        </MyButton>
      </Box>
    </Box>
  );
};
