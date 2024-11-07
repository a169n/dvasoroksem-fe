import React from "react";
import { Select, MenuItem, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useHeaderContext } from "@shared/context/HeaderContext";

export const MySelect = ({ value, onChange, options }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { isCaseDetailPage, currentCaseId } = useHeaderContext();

  const headerTextColor = (currentCaseId === "5" || currentCaseId === "6" || currentCaseId === "8") ? "#000" : "#fff";

  return (
    <Select
      disableUnderline
      value={value}
      onChange={onChange}
      variant="standard"
      sx={{
        width: isMobile ? "100%" : 90,
        backgroundColor: isCaseDetailPage ? "transparent" : value ? "black" : "white",
        color: isCaseDetailPage ? headerTextColor : value ? "white" : "black",
        border: isCaseDetailPage ? "none" : "1px solid black",
        borderRadius: "4px",
        padding: "4px 0",
        alignSelf: "center",
        "&:hover": {
          border: isCaseDetailPage ? "none" : "1px solid black",
          textDecoration: "none",
        },
        "& .MuiSelect-select": {
          padding: isMobile ? "4px 16px" : "4px 24px",
          backgroundColor: isCaseDetailPage ? "transparent" : value ? "black" : "white",
          textAlign: "left",
          borderRadius: isMobile ? "10px" : "4px",
          color: isCaseDetailPage ? headerTextColor : isMobile ? "black" : "white",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: isCaseDetailPage ? "transparent" : isMobile ? "black" : "white",
            "& .MuiMenuItem-root": {
              color: isCaseDetailPage ? headerTextColor : isMobile ? "white" : "black",
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