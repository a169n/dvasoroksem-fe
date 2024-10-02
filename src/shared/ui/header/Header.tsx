import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { MySelect } from "../select";

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [language, setLanguage] = useState("RU");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fffdf9", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            двасороксемь.
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="body1" component="a" href="#cases">
                Наши кейсы
              </Typography>
              <Typography variant="body1" component="a" href="#about">
                О нас
              </Typography>
              <Typography variant="body1" component="a" href="#contacts">
                Контакты
              </Typography>
              <Typography variant="body1" component="a" href="#reviews">
                Отзывы
              </Typography>
              <MySelect
                value={language}
                onChange={handleLanguageChange}
                options={[
                  { value: "RU", label: "RU" },
                  { value: "KAZ", label: "KAZ" },
                  { value: "ENG", label: "ENG" },
                ]}
              />
              <Button variant="contained" color="primary">
                Я хочу оставить заявку
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
