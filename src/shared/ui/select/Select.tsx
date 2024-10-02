import { Select, MenuItem } from "@mui/material";

export const MySelect = ({ value, onChange, options }) => {
  return (
    <Select
      disableUnderline
      value={value}
      onChange={onChange}
      variant="standard"
      sx={{
        minWidth: 80,
        backgroundColor: value ? "black" : "white",
        color: value ? "white" : "black",
        border: "1px solid black",
        borderRadius: "4px",
        padding: "4px 0", 
        "& .MuiMenuItem-root": {
          backgroundColor: "black",
          color: "white",
          padding: "4px 8px",
        },
        "& .MuiSelect-select": {
          backgroundColor: "black",
          color: "white",
          padding: "4px 24px",
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
