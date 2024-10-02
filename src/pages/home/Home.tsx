
import { Box, Typography } from "@mui/material";
import styles from './styles.module.scss';
import landing_image from '../../assets/landing-image.png';
import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets/icons/icon4.svg";
import icon5 from "../../assets/icons/icon5.svg";
import icon6 from "../../assets/icons/icon6.svg";
import icon7 from "../../assets/icons/icon7.svg";
import icon8 from "../../assets/icons/icon8.svg";

export const Home = () => {
  return (
    <Box className={styles.homePage}>
      <Box className={styles.content}>
        <Box className={styles.mainSection}>
          <Box className={styles.textSection}>
            <Box className={styles.heroText}>
              <Typography variant="h2" component="h1" gutterBottom>
                Мы двасороксемь.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ведущее маркетинговое агентство в Астане, предлагающее комплексные маркетинговые решения для бизнеса. Специализируемся на стратегическом планировании, digital маркетинге, SEO, SMM и брендинге.
              </Typography>
              <Typography variant="body1">
                Наша команда экспертов поможет вашему бизнесу расти и достигать новых высот!
              </Typography>
            </Box>
          </Box>
          <Box className={styles.imageSection}>
            <img src={landing_image} alt="Landing" className={styles.landingImage} />
          </Box>
        </Box>
        <Box className={styles.logoContainer}>
          <img src={icon1} alt="Icon1" className={styles.logo} />
          <img src={icon2} alt="Icon2" className={styles.logo} />
          <img src={icon3} alt="Icon3" className={styles.logo} />
          <img src={icon4} alt="Icon4" className={styles.logo} />
          <img src={icon5} alt="Icon5" className={styles.logo} />
          <img src={icon6} alt="Icon6" className={styles.logo} />
          <img src={icon7} alt="Icon7" className={styles.logo} />
          <img src={icon8} alt="Icon8" className={styles.logo} />
        </Box>
      </Box>
    </Box>
  );
};