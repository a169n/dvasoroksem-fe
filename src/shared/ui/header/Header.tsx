import logo from "@assets/icons/logo.svg";
import logoSmall from "@assets/icons/logo_small.svg";
import logoSmallWhite from "@assets/icons/logo_small_white.svg";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from "@mui/icons-material/ArrowForward";
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

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("RU");

  const NavigationItems = ({ onClick }) => (
    <>
      {navItems.map(({ href, text }) => (
        <Typography
          key={href}
          component="a"
          href={href}
          onClick={onClick}
          sx={{ marginRight: 3, color: isMobile ? "#fff" : "#191919" }}
        >
          {text}
        </Typography>
      ))}
      <MySelect
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        options={languageOptions}
      />
    </>
  );

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <img
          src={isMobile ? logoSmall : logo}
          alt="Logo"
          draggable="false"
          style={{
            pointerEvents: "none",
            userSelect: "none",
            marginRight: "auto",
          }}
        />
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
              width: "90vh",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <NavigationItems onClick={undefined} />
            <MyButton sx={{ padding: "10px 28px", marginLeft: 2 }}>
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
              style={{
                pointerEvents: "none",
                userSelect: "none",
                marginRight: "auto",
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
          <Typography
            component="a"
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.5rem",
              color: "#fff",
            }}
          >
            <ArrowRightIcon sx={{ mr: 1, color: "#fff" }} /> Главная
          </Typography>
          <NavigationItems onClick={() => setMenuOpen(false)} />
          <Typography
            component="a"
            href="#"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.5rem",
              color: "#fff",
            }}
          >
            Я хочу оставить заявку
          </Typography>
        </Box>
      </Drawer>
    </AppBar>
  );
};
