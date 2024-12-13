import { useState, useCallback, useEffect } from "react";
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
import { useTranslation } from "react-i18next";
import i18n from "@src/i18n";
import { useNavigate } from "react-router-dom";
import { useLayoutContext } from "@src/context/LayoutContext";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  let lastPos = window.pageYOffset;

  return function () {
    const currentPos = window.pageYOffset;
    if (!inThrottle) {
      func(currentPos > lastPos, currentPos);
      lastPos = currentPos;
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "ru");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mode, refs } = useLayoutContext(); // Use mode from context

  const isDarkMode = mode === "dark";
  const isLightMode = mode === "light";

  const navItems = [
    { href: "cases", text: t("navigation.ourCases") },
    { href: "about", text: t("navigation.aboutUs") },
    { href: "contacts", text: t("navigation.contacts") },
    { href: "reviews", text: t("navigation.reviews") },
  ];

  const languageOptions = [
    { value: "ru", label: "RUS" },
    { value: "kz", label: "KAZ" },
    { value: "en", label: "ENG" },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    throttle((isScrollingDown: boolean, currentPos: number) => {
      if (currentPos < 10 || !isScrollingDown) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    }, 150),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (section: string) => {
    const currentPath = window.location.pathname;

    if (section === "contacts") {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    } else if (currentPath !== "/") {
      navigate("/", {
        state: {
          scrollToSection: section,
        },
      });
      setTimeout(() => {
        const targetRef = refs[section];
        if (targetRef?.current) {
          window.scrollTo({
            top: targetRef.current.offsetTop || 0,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const targetRef = refs[section];
      if (targetRef?.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop || 0,
          behavior: "smooth",
        });
      }
    }
  };
  useEffect(() => {
    const { state } = window.history;
    if (state && state.scrollToSection) {
      const section = state.scrollToSection;
      const targetRef = refs[section];
      setTimeout(() => {
        if (targetRef?.current) {
          window.scrollTo({
            top: targetRef.current.offsetTop || 0,
            behavior: "smooth",
          });
        }
        window.history.replaceState({}, document.title);
      }, 100);
    }
  }, [refs]);

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
      {navItems.map(({ href, text }) => (
        <Typography
          key={href}
          sx={{
            alignSelf: isMobile ? "start" : "center",
            cursor: "pointer",
            color:
              ["/", "/request", "/cases"].includes(window.location.pathname) &&
              isMobile
                ? "#fff"
                : ["/", "/request", "/cases"].includes(
                      window.location.pathname
                    ) && !isMobile
                  ? "#000"
                  : isLightMode
                    ? "#fff"
                    : isDarkMode && !isMobile
                      ? "#191919"
                      : isDarkMode && isMobile
                        ? "#fff"
                        : "#fff",
            fontSize: isMobile ? "24px" : "20px",
          }}
          onClick={() => {
            handleNavClick(href);
            if (isMobile) setMenuOpen(false);
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
        }}
        options={languageOptions}
        sx={{
          alignSelf: "start",
          color: isLightMode ? "#000" : "#fff",
          width: isMobile ? "25%" : "fit-content",
        }}
        mode={mode}
      />
    </Box>
  );

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        transition:
          "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
        transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        backgroundColor:
          !["/", "/request", "/cases"].includes(window.location.pathname) &&
          !isMobile 
            ? "transparent"
            : isHeaderVisible && !isMobile 
              ? "white"
              : isHeaderVisible && isMobile && ["/", "/request", "/cases"].includes(window.location.pathname)
                ? "white"
                : "transparent",
        backdropFilter:
          isHeaderVisible && !isMobile
            ? "blur(8px)"
            : isHeaderVisible && isMobile
              ? "blur(0px)"
              : "none",
        boxShadow: isHeaderVisible ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
        zIndex: 100,
        px: { xs: 0, sm: 0, md: 4, lg: 4, xl: "325px" },
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
              filter: ["/", "/request", "/cases"].includes(
                window.location.pathname
              )
                ? "invert(0)"
                : isLightMode
                  ? "invert(1)"
                  : "invert(0)",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </Box>

        {isMobile ? (
          <IconButton
            edge="end"
            aria-label="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{
              filter: ["/", "/request", "/cases"].includes(
                window.location.pathname
              )
                ? "invert(0)"
                : isLightMode
                  ? "invert(1)"
                  : "invert(0)",
            }}
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
                color: ["/", "/request", "/cases"].includes(
                  window.location.pathname
                )
                  ? "#000"
                  : isDarkMode
                    ? "#191919"
                    : isLightMode
                      ? "#fff"
                      : "#000",
                backgroundColor: ["/", "/request", "/cases"].includes(
                  window.location.pathname
                )
                  ? "white"
                  : isDarkMode || isLightMode
                    ? "transparent"
                    : "white",
                borderColor: ["/", "/request", "/cases"].includes(
                  window.location.pathname
                )
                  ? "#000"
                  : isDarkMode
                    ? "black"
                    : isLightMode
                      ? "white"
                      : "black",
              }}
              onClick={() => navigate("/request")}
            >
              {t("navigation.request")}
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
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
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
              color: isDarkMode ? "#fff" : isLightMode ? "#fff" : "#fff",
              backgroundColor: "black",
              borderColor:
                isDarkMode && !isMobile
                  ? "black"
                  : isLightMode && !isMobile
                    ? "white"
                    : "black",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
            onClick={() => navigate("/request")}
          >
            {t("navigation.request")}
          </MyButton>
        </Box>
      </Drawer>
    </Box>
  );
};
