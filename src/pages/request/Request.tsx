import React, { useEffect, useState } from "react";
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
  CircularProgress,
} from "@mui/material";
import emailjs from "emailjs-com";
import { Header } from "@shared/ui/header";
import { MyButton } from "@shared/ui/button";
import { CustomContainer } from "@shared/ui/container";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

export const Request = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const serviceId = import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID;
  const userId = import.meta.env.VITE_REACT_APP_EMAILJS_USER_ID;

  const [selectedBudget, setSelectedBudget] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [formData, setFormData] = useState<any>({
    name: "",
    email: "",
    phone: "",
    directions: [],
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckboxChange = (label: any) => {
    setFormData((prevState) => {
      const directions = prevState.directions.includes(label)
        ? prevState.directions.filter((item) => item !== label)
        : [...prevState.directions, label];
      return { ...prevState, directions };
    });
  };

  const handleRadioChange = (event) => {
    setSelectedBudget(event.target.value);
  };

  const handleSubmit = () => {
    if (
      !formData.email ||
      !formData.name ||
      !formData.phone ||
      formData.directions.length === 0 ||
      !selectedBudget
    ) {
      toast.error(t("request.error"));
      return;
    }

    const message = `
    ${t("request.name")}: ${formData.name}\n
    ${t("request.email")}: ${formData.email}\n
    ${t("request.phone")}: ${formData.phone}\n
    ${t("request.directions")}: ${formData.directions.join(", ")}\n
    ${t("request.budget")}: ${selectedBudget}\n
    `;

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          message: message,
          reply_to: formData.email,
        },
        userId
      )
      .then(() => {
        setLoading(false);
        toast.success(t("request.success"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          directions: [],
        });
        setSelectedBudget("");
      })
      .catch((error) => {
        setLoading(false);
        console.error(t("request.errorLog"), error);
        toast.error(t("request.errorSubmit"));
      });
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

    "&.Mui-checked": {
      color: "#fff",
    },
  };

  return (
    <React.Fragment>
      <Header />
      <CustomContainer>
        <Box
          sx={{
            width: "100%",
            py: { xs: 2, sm: 4, md: 16 },
            display: "flex",
            justifyContent: "space-between",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: 3,
              width: isMobile ? "100%" : "60%",
            }}
          >
            <Typography
              sx={{
                textAlign: "start",
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: { xs: "40px", sm: "64px", md: "70px" },
                textTransform: "uppercase",
                lineHeight: "80px",
              }}
            >
              {t("request.title")}
            </Typography>
            <Typography
              component="a"
              href="https://go.2gis.com/lq8ukd"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: "fit-content",
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
              {t("request.address")}
            </Typography>
          </Box>

          <Box sx={{ width: isMobile ? "100%" : "50%" }}>
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
                {t("request.contacts")}
              </Typography>

              <TextField
                name="name"
                type="text"
                placeholder={`${t("request.name")} *`}
                value={formData.name}
                onChange={handleInputChange}
                sx={textFieldStyles}
              />
              <TextField
                name="email"
                type="email"
                placeholder={`${t("request.email")} *`}
                value={formData.email}
                onChange={handleInputChange}
                sx={textFieldStyles}
                error={formData.email && !/\S+@\S+\.\S+/.test(formData.email)}
                helperText={
                  formData.email && !/\S+@\S+\.\S+/.test(formData.email)
                    ? t("request.invalidEmail")
                    : ""
                }
              />
              <TextField
                name="phone"
                type="tel"
                placeholder={`${t("request.phone")} *`}
                value={formData.phone}
                onChange={handleInputChange}
                sx={textFieldStyles}
              />

              <Typography sx={{ color: "#fff", mb: 2, textAlign: "start" }}>
                {t("request.directions")}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
                {["complex", "instagram", "production", "creative"].map(
                  (key) => (
                    <FormControlLabel
                      key={key}
                      control={
                        <Checkbox
                          sx={controlLabelStyles}
                          onChange={() =>
                            handleCheckboxChange(t(`request.${key}`))
                          }
                        />
                      }
                      label={
                        <Typography sx={{ color: "#fff" }}>
                          {t(`request.${key}`)}
                        </Typography>
                      }
                    />
                  )
                )}
              </Box>

              <Typography sx={{ color: "#fff", mb: 2, textAlign: "start" }}>
                {t("request.budget")}
              </Typography>

              <RadioGroup value={selectedBudget} onChange={handleRadioChange}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {["below1m", "from1m", "exclusive"].map((key) => (
                    <FormControlLabel
                      key={key}
                      value={t(`request.${key}`)}
                      control={<Radio sx={controlLabelStyles} />}
                      label={
                        <Typography sx={{ color: "#fff" }}>
                          {t(`request.${key}`)}
                        </Typography>
                      }
                    />
                  ))}
                </Box>
              </RadioGroup>

              <MyButton
                variant="contained"
                onClick={handleSubmit}
                disabled={loading}
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
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "#fff" }} />
                ) : (
                  t("request.buttonText")
                )}
              </MyButton>
            </FormControl>
          </Box>
        </Box>
      </CustomContainer>
    </React.Fragment>
  );
};
