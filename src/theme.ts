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
    fontSize: 14,
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#191919",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#191919",
    },
    // You can customize body1 or body2 here if you want to use it for links
    body1: {
      fontSize: "18.33px",
      lineHeight: "21.08px",
      textAlign: "center",
      color: "#191919",
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  spacing: 8,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#191919",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "none",
          },
          "& a": {
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            fontSize: "18.33px",
            lineHeight: "21.08px",
            color: "#191919",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          display: "flex",
          alignItems: "center",
          paddingRight: 0,
          border: "none",
          boxShadow: "none",
          "&:focus": {
            outline: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        },
        icon: {
          display: "none",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "black",
          "&.Mui-selected": {
            backgroundColor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
            },
          },
          "&:hover": {
            backgroundColor: "#f2f1f6",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
