import { Select, MenuItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const MySelect = ({ value, onChange, options, sx, mode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDarkMode = mode === "dark";
  const isLightMode = mode === "light";
  const isDefaultMode = mode === "default";
  return (
    <Select
      disableUnderline
      value={value}
      IconComponent={() => null}
      onChange={onChange}
      variant="standard"
      sx={{
        width: "fit-content",
        backgroundColor:
          (isDarkMode || isLightMode) &&
          !isDefaultMode &&
          !["/", "/request", "/cases"].includes(window.location.pathname)
            ? "transparent"
            : "white",
        color: value ? "white" : "black",
        border: "",
        borderRadius: "4px",
        padding: "4px 0",
        alignSelf: "center",
        "&:hover": {
          border: "1px solid black",
          textDecoration: "none",
        },
        "& .MuiSelect-select": {
          overflow: "hidden",
          width: isMobile ? "80vw" : "100%",
          padding: isMobile ? "4px 16px" : "4px 24px",
          backgroundColor:
            (isDarkMode || isLightMode) && !isMobile
              ? "transparent"
              : isMobile
                ? "white"
                : "white",
          textAlign: "left",
          borderRadius: "4px",
          color:
            ["/", "/request", "/cases"].includes(window.location.pathname) &&
            !isMobile
              ? "black"
              : ["/", "/request", "/cases"].includes(
                    window.location.pathname
                  ) && isMobile
                ? "black"
                : isLightMode && !isMobile
                  ? "white"
                  : isDarkMode && !isMobile
                    ? "black"
                    : isMobile
                      ? "black"
                      : "white",
        },
        ...sx,
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: isMobile ? "black" : "white",
            "& .MuiMenuItem-root": {
              color: isMobile ? "white" : "black",
              padding: "8px 16px",
            },
            "& .Mui-selected": {
              display: "none",
            },
          },
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MySelect;
