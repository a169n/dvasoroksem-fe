import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Header } from "@shared/ui/header";
import { MyButton } from "@shared/ui/button";

export const Request = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedBudget, setSelectedBudget] = useState("");

  const handleRadioChange = (event) => {
    setSelectedBudget(event.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textFieldStyles = {
    mb: 2,
    "& .MuiInputBase-input": { color: "#fff" },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#fff",
    },
  };

  const controlLabelStyles = {
    color: "#fff",
    "& .MuiCheckbox-root, & .MuiRadio-root": {
      color: "#fff",
      "&.Mui-checked": { color: "#fff" },
    },
  };

  return (
    <div style={{ marginTop: isMobile ? "40px" : "20px" }}>
      <Header />
      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 2, sm: 4, md: 8 },
          display: "flex",
          justifyContent: "space-around",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            width: isMobile ? "100%" : "60%",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            mt: 3,
          }}
        >
          <Typography
            sx={{
              textAlign: "start",
              fontSize: { xs: "40px", sm: "72px", md: "92px" },
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Оставить заявку
          </Typography>
          <Typography
            component="a"
            href="https://go.2gis.com/lq8ukd"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textAlign: "start",
              textDecorationLine: "none",
              mb: isMobile ? 2 : 0,
              cursor: "pointer",
              transition: "text-decoration 0.3s ease-in-out",
              "&:hover": {
                textDecorationLine: "underline",
              },
            }}
          >
            ул. Калибек Куанышбаев, 11Б, Астана, Казахстан
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ width: isMobile ? "100%" : "40%" }}>
          <FormControl
            fullWidth
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              p: 3,
              borderRadius: 1,
            }}
          >
            <Typography sx={{ color: "#fff", mb: 2, textAlign: "start" }}>
              Контакты
            </Typography>

            <TextField placeholder="Имя" sx={textFieldStyles} />
            <TextField placeholder="E-mail" sx={textFieldStyles} />
            <TextField placeholder="Телефон" sx={textFieldStyles} />

            <Typography sx={{ color: "#fff", mb: 2, textAlign: "start" }}>
              Направление
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
              {["Instagram", "TikTok", "Production"].map((label) => (
                <FormControlLabel
                  key={label}
                  control={<Checkbox sx={controlLabelStyles} />}
                  label={
                    <Typography sx={{ color: "#fff" }}>{label}</Typography>
                  }
                />
              ))}
            </Box>

            <Typography sx={{ color: "#fff", mb: 2, textAlign: "start" }}>
              Бюджет
            </Typography>

            <RadioGroup value={selectedBudget} onChange={handleRadioChange}>
              <Box sx={{ display: "flex", gap: 2 }}>
                {[
                  { value: "below1M", label: "до 1 млн" },
                  { value: "above1M", label: "от 1 млн" },
                  { value: "exclusive", label: "Эксклюзив" },
                ].map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio sx={controlLabelStyles} />}
                    label={
                      <Typography sx={{ color: "#fff" }}>
                        {option.label}
                      </Typography>
                    }
                  />
                ))}
              </Box>
            </RadioGroup>

            <MyButton
              variant="contained"
              sx={{
                mt: 3,
                width: "50%",
                mx: "auto",
                backgroundColor: "#000",
                color: "#fff",
                border: "1px solid #fff",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                  color: "#000",
                },
              }}
            >
              Оставить заявку
            </MyButton>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
};
