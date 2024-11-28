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
      onChange={onChange}
      variant="standard"
      sx={{
        width: "fit-content",
        backgroundColor:
          ((isDarkMode || isLightMode) && !isDefaultMode)
            ? "transparent"
            : value
              ? "black"
              : "white",
        color: value ? "white" : "black",
        border: isDarkMode || isLightMode ? "" : "1px solid black",
        borderRadius: "4px",
        padding: "4px 0",
        alignSelf: "center",
        "&:hover": {
          border: "1px solid black",
          textDecoration: "none",
        },
        "& .MuiSelect-select": {
          padding: isMobile ? "4px 16px" : "4px 24px",
          backgroundColor:
            isDarkMode || isLightMode
              ? "transparent"
              : isMobile
                ? "white"
                : "black",
          textAlign: "left",
          borderRadius: "4px",
          color: isLightMode
            ? "white"
            : isDarkMode
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
