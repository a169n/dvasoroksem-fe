
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
import styles from './styles.module.scss';

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [language, setLanguage] = useState("RU");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.header}>
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
          <Typography variant="h6" className={styles.logo}>
            двасороксемь.
          </Typography>

          {!isMobile && (
            <Box className={styles.navLinks}>
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
              <div 
                className={styles.applyButton}
              >
                Я хочу оставить заявку
              </div>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};