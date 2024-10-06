import { Select, MenuItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const MySelect = ({ value, onChange, options }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Select
      disableUnderline
      value={value}
      onChange={onChange}
      variant="standard"
      sx={{
        width: 90,
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
        "& .MuiMenuItem-root": {
          backgroundColor: "black",
          color: "white",
          padding: "4px 8px",
        },
        "& .MuiSelect-select": {
          backgroundColor: "black",
          color: "white",
          padding: isMobile ? "4px 16px" : "4px 24px",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
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
