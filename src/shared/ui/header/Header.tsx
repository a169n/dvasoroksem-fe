import { useEffect, useState } from "react";
import { Box, Toolbar, IconButton, Typography, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "@assets/icons/logo.svg";
import logoSmall from "@assets/icons/logo_small.svg";
import logoSmallWhite from "@assets/icons/logo_small_white.svg";
import { MySelect } from "@shared/ui/select";
import { MyButton } from "@shared/ui/button";
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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isDarkMode = mode === "dark";
  const isLightMode = mode === "light";
  const isDefaultMode = mode === "default";

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    if (mode !== "default") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      return;
    }
  }, [lastScrollY]);

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
            color: isLightMode ? "#fff" : isDarkMode ? "#191919" : "#191919",
          }}
        >
          {text}
        </Typography>
      ))}
      <MySelect
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        options={languageOptions}
        sx={{
          color: isLightMode ? "#000" : "#fff",
        }}
        mode={mode}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        position: !isDefaultMode ? "fixed" : "block",
        top: 0,
        left: 0,
        right: 0,
        transition: "transform 0.3s ease-in-out",
        transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        backgroundColor: isLightMode ? "transparent" : "transparent",
        backgroundImage: isDarkMode
          ? "linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)"
          : "none",
        boxShadow: "none",
        paddingTop: "16px",
        zIndex: 100,
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
              navigate("/");
            }}
            style={{
              filter: isLightMode ? "invert(1)" : "invert(0)",
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
                color: isDarkMode ? "#191919" : isLightMode ? "#fff" : "#000",
                backgroundColor:
                  isDarkMode || isLightMode ? "transparent" : "white",
                borderColor: isDarkMode
                  ? "black"
                  : isLightMode
                    ? "white"
                    : "black",
              }}
              onClick={() => navigate("/request")}
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
            backgroundColor: isDarkMode ? "black" : "white",
            color: isDarkMode ? "white" : "black",
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
    </Box>
  );
};
