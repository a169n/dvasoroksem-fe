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
import { useTranslation } from "react-i18next";
import i18n from "@src/i18n";

import React from "react";

type RefsType = Record<string, React.RefObject<any>> | null;

export const Header = ({
  mode = "default",
  refs = null,
}: {
  mode?: string;
  refs?: RefsType;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ru");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useTranslation();

  const isDarkMode = mode === "dark";
  const isLightMode = mode === "light";
  const isDefaultMode = mode === "default";

  const navItems = [
    { href: "#cases", text: t("navigation.ourCases") },
    { href: "#about", text: t("navigation.aboutUs") },
    { href: "#contacts", text: t("navigation.contacts") },
    { href: "#reviews", text: t("navigation.reviews") },
  ];

  const languageOptions = [
    { value: "ru", label: "RU" },
    { value: "kz", label: "KAZ" },
    { value: "en", label: "ENG" },
  ];

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

  useEffect(() => {
    if (mode === "default") {
      const handleHashChange = () => {
        const targetId = window.location.hash;
        if (targetId && targetId !== "#") {
          const targetRef =
            mode === "default" ? refs && refs[targetId.substring(1)] : "";
          if (targetRef && targetRef.current) {
            window.scrollTo({
              top: targetRef.current.offsetTop,
              behavior: "smooth",
            });
          }
        }
      };

      handleHashChange();

      window.addEventListener("hashchange", handleHashChange);

      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, [refs, mode]);

  const handleNavClick = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

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
      {navItems.map(({ href, text }) => {
        const targetRef =
          mode === "default" ? (refs && refs[href.substring(1)]) || "" : null;

        return (
          <Typography
            key={href}
            component="a"
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
            onClick={() => handleNavClick(targetRef)}
          >
            {text}
          </Typography>
        );
      })}
      <MySelect
        value={language}
        onChange={(e) => {
          const newLanguage = e.target.value;
          setLanguage(newLanguage);
          i18n.changeLanguage(newLanguage.toLowerCase());
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
            if (mode !== "default") {
              window.location.href = "/";
              setTimeout(() => {
                const targetId = window.location.hash;
                const targetRef =
                  refs && refs[targetId ? targetId.substring(1) : ""];
                if (targetRef && targetRef.current) {
                  window.scrollTo({
                    top: targetRef.current.offsetTop,
                    behavior: "smooth",
                  });
                }
              }, 100);
            } else {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
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
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
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
              color: isDarkMode
                ? "#191919"
                : isLightMode || isMobile
                  ? "#fff"
                  : "#000",
              backgroundColor:
                isDarkMode || isLightMode ? "transparent" : "white",
              borderColor: isDarkMode
                ? "black"
                : isLightMode
                  ? "white"
                  : "black",
            }}
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            {t("navigation.request")}
          </MyButton>
        </Box>
      </Drawer>
    </Box>
  );
};
