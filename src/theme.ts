import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f2f1f6",
    },
  },
  typography: {
    fontFamily:
      "Futura PT, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    body1: {
      fontSize: "18.33px",
      lineHeight: "21.08px",
      textAlign: "center",
      color: "#191919",
      textDecoration: "none",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1320,
      xl: 1850,
    },
  },
});

export default theme;
