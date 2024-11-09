import { Select, MenuItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const MySelect = ({ value, onChange, options, sx }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Select
      disableUnderline
      value={value}
      onChange={onChange}
      variant="standard"
      sx={{
        width: isMobile ? "100%" : 90,
        backgroundColor: value ? "black" : "white",
        color: value ? "white" : "black",
        border: "1px solid black",
        borderRadius: "4px",
        padding: "4px 0",
        alignSelf: "center",
        "&:hover": {
          border: "1px solid black",
          textDecoration: "none",
        },
        "& .MuiSelect-select": {
          padding: isMobile ? "4px 16px" : "4px 24px",
          backgroundColor: isMobile ? "white" : "black",
          textAlign: "left",
          borderRadius: isMobile ? "10px" : "4px",
          color: isMobile ? "black" : "white",
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
