import logo from "@assets/icons/logo.svg";
import logoSmall from "@assets/icons/logo_small.svg";
import logoSmallWhite from "@assets/icons/logo_small_white.svg";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { MyButton } from "@shared/ui/button";
import { MySelect } from "@shared/ui/select";
import { useState } from "react";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

const navItems = [
  { href: "#cases", text: "Наши кейсы" },
  { href: "#about", text: "О нас" },
  { href: "#contacts", text: "Контакты" },
  { href: "#reviews", text: "Отзывы" },
];

const languageOptions = [
  { value: "RU", label: "RU" },
  { value: "KAZ", label: "KAZ" },
  { value: "ENG", label: "ENG" },
];

export const Header = ({ mode = "default" }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("RU");

  const isDarkMode = mode === "dark";
  const isLightMode = mode === "light";

  const NavigationItems = ({ onClick }) => (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexGrow: 1,
        justifyContent: "space-around",
      }}
    >
      {navItems.map(({ href, text }) => (
        <Typography
          key={href}
          component="a"
          href={href}
          onClick={onClick}
          sx={{
            alignSelf: "center",
            cursor: "pointer",
            color: isDarkMode ? "#191919" : isLightMode ? "#fff" : "#191919",
          }}
        >
          {text}
        </Typography>
      ))}
      <MySelect
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        options={languageOptions}
      />
    </Box>
  );

  return (
    <AppBar
      position="static"
      className={styles.header}
      sx={{
        backgroundColor: "transparent",
        backgroundImage: isDarkMode
          ? "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)"
          : "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Box
          sx={{
            cursor: "pointer",
            width: isMobile ? "100%" : "40%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <img
            src={isMobile ? logoSmall : logo}
            alt="Logo"
            draggable="false"
            onClick={() => {
              window.location.href = "/";
            }}
            style={{
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </Box>
        {isMobile ? (
          <IconButton
            edge="end"
            color="default"
            aria-label="menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        ) : (
          <Box
            sx={{
              width: "60%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <NavigationItems onClick={() => setMenuOpen(false)} />
            <MyButton
              sx={{
                padding: "10px 28px",
                marginLeft: 2,
                color: isDarkMode ? "#191919" : "#fff",
                backgroundColor: isDarkMode ? "#fff" : "black",
              }}
              onClick={() => navigate("/requests")}
            >
              Я хочу оставить заявку
            </MyButton>
          </Box>
        )}
      </Toolbar>
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            color: "white",
            padding: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            paddingTop: "20px",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <img
              src={logoSmallWhite}
              alt="Logo"
              draggable="false"
              onClick={() => {
                window.location.href = "/";
              }}
              style={{
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setMenuOpen(false)}
              sx={{ alignSelf: "flex-end" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <NavigationItems onClick={() => setMenuOpen(false)} />
        </Box>
      </Drawer>
    </AppBar>
  );
};
