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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import i18n from "@src/i18n";
const navItems = [
  { href: "#cases", text: "Наши кейсы" },
  { href: "#about", text: "О нас" },
  { href: "#contacts", text: "Контакты" },
  { href: "#reviews", text: "Отзывы" },
];

const languageOptions = [
  { value: "ru", label: "RU" },
  { value: "kz", label: "KAZ" },
  { value: "en", label: "ENG" },
];

export const Header = ({ mode = "default", refs }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ru");
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

  const handleNavClick = (sectionRef, href) => {
    const hash = href;

    console.log("hash", hash);

    navigate(`/${hash}`);

    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (hash === "#contacts") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }

    setMenuOpen(false);
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

  const NavigationItems = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 3,
        flexGrow: 1,
        justifyContent: "space-around",
      }}
    >
      <Typography
        sx={{
          display: isMobile ? "flex" : "none",
          color: "#fff",
          gap: "10px",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        <ArrowForwardIcon />
        Главная
      </Typography>
      {navItems.map(({ href, text }) => (
        <Typography
          key={href}
          component="a"
          href={href}
          onClick={() => handleNavClick(refs[href.substring(1)], href)}
          sx={{
            alignSelf: isMobile ? "start" : "center",
            cursor: "pointer",
            color: isLightMode
              ? "#fff"
              : isDarkMode
                ? "#191919"
                : isMobile
                  ? "#fff"
                  : "#000",
            fontSize: isMobile ? "24px" : "20px",
          }}
        >
          {text}
        </Typography>
      ))}
      <MySelect
        value={language}
        onChange={(e) => {
          const newLanguage = e.target.value;
          setLanguage(newLanguage);
          i18n.changeLanguage(newLanguage.toLowerCase());
          console.log("language", language);
        }}
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
        boxShadow: "none",
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
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={isMobile ? logoSmall : logo}
            alt="Logo"
            draggable="false"
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
            <NavigationItems />
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
            backgroundColor: "black",
            color: "white",
            padding: 2,
          },
        }}
      >
        <Box
          sx={{
            width: "95%",
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
          <NavigationItems />
          <MyButton
            sx={{
              padding: isMobile ? "0px 0px" : "10px 28px",
              fontSize: isMobile ? "24px" : "",
              textTransform: isMobile ? "none" : "",
              marginLeft: isMobile ? "" : 2,
              textAlign: isMobile ? "start" : "",
              color: isDarkMode
                ? "#191919"
                : isLightMode || isMobile
                  ? "#fff"
                  : "#000",
              backgroundColor:
                isDarkMode || isLightMode || isMobile ? "transparent" : "white",
              borderColor: isDarkMode
                ? "black"
                : isLightMode
                  ? "white"
                  : isMobile
                    ? "transparent"
                    : "black",
              "&:hover": {
                backgroundColor: isMobile ? "white" : "",
                color: isMobile ? "black" : "",
              },
            }}
            onClick={() => navigate("/request")}
          >
            Я хочу оставить заявку
          </MyButton>
        </Box>
      </Drawer>
    </Box>
  );
};
