import { useState } from "react";
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

  return (
    <>
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
        <Box
          sx={{
            width: isMobile ? "100%" : "60%",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            marginTop: "30px",
          }}
        >
          <Typography
            sx={{
              textAlign: "start",
              fontSize: "92px",
              textTransform: "uppercase",
              lineHeight: "1",
            }}
          >
            Оставить заявку
          </Typography>
          <Typography
            sx={{
              textAlign: "start",
              textDecorationLine: "underline",
              marginBottom: isMobile ? "20px" : "0",
            }}
          >
            ул. Калибек Куанышбаев, 11Б, Астана, Казахстан
          </Typography>
        </Box>
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
            <TextField
              placeholder="Имя"
              sx={{
                mb: 2,
                "& .MuiInputBase-input": { color: "#fff" },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#fff",
                  },
              }}
            />
            <TextField
              placeholder="E-mail"
              sx={{
                mb: 2,
                "& .MuiInputBase-input": { color: "#fff" },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#fff",
                  },
              }}
            />
            <TextField
              placeholder="Телефон"
              sx={{
                mb: 2,
                "& .MuiInputBase-input": { color: "#fff" },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#fff",
                  },
              }}
            />

            <Typography sx={{ color: "#fff", mb: 2, textAlign: "start" }}>
              Направление
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ color: "#fff" }}>Instagram</Typography>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label={<Typography sx={{ color: "#fff" }}>TikTok</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label={
                  <Typography sx={{ color: "#fff" }}>Production</Typography>
                }
              />
            </Box>
            <Typography sx={{ color: "#fff", mb: 2, textAlign: "start" }}>
              Бюджет
            </Typography>

            <RadioGroup value={selectedBudget} onChange={handleRadioChange}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <FormControlLabel
                  value="below1M"
                  control={
                    <Radio
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ color: "#fff" }}>до 1 млн</Typography>
                  }
                  sx={{ color: "#fff" }}
                />
                <FormControlLabel
                  value="above1M"
                  control={
                    <Radio
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ color: "#fff" }}>от 1 млн</Typography>
                  }
                  sx={{ color: "#fff" }}
                />
                <FormControlLabel
                  value="exclusive"
                  control={
                    <Radio
                      sx={{
                        color: "#fff",
                        "&.Mui-checked": {
                          color: "#fff",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography sx={{ color: "#fff" }}>Эксклюзив</Typography>
                  }
                  sx={{ color: "#fff" }}
                />
              </Box>
            </RadioGroup>

            <MyButton
              variant="contained"
              sx={{
                margin: "auto",
                mt: 3,
                width: "50%",
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
    </>
  );
};
