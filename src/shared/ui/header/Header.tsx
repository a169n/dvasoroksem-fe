import logo from "@assets/icons/logo.svg";
import logoSmall from "@assets/icons/logo_small.svg";
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
          sx={{ marginRight: 3 }}
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
    <>
      <AppBar position="static" className={styles.header}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            {isMobile ? (
              <>
                <img src={logoSmall} alt="Logo" />
                <MyButton sx={{ padding: "5px 14px", fontSize: "8px" }}>
                  Я хочу оставить заявку
                </MyButton>
                <IconButton
                  edge="end"
                  color="default"
                  aria-label="menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                  sx={{ ml: 1 }}
                >
                  {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              </>
            ) : (
              <>
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    flexGrow: 1,
                    maxHeight: "11px",
                    maxWidth: "100%",
                    marginRight: "40%",
                  }}
                />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <NavigationItems onClick={() => {}} />
                  <MyButton sx={{ padding: "10px 28px", marginLeft: 2 }}>
                    Я хочу оставить заявку
                  </MyButton>
                </Box>
              </>
            )}
          </Box>
        </Toolbar>
        <Drawer
          anchor="right"
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          PaperProps={{
            sx: {
              width: isMobile ? "30%" : "400px",
              padding: 2,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              gap: "20px",
            }}
            className={styles.drawerContent}
          >
            <NavigationItems onClick={() => setMenuOpen(false)} />
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
};
