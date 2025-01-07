import { useState, useRef, useEffect } from "react";
import { useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const MySelect = ({ value, onChange, options, sx, mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((opt) => opt.value === value) || null
  );
  const selectRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDarkMode = mode === "dark";
  const isLightMode = mode === "light";
  const isDefaultMode = mode === "default";

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange({ target: { value: option.value } });
    setIsOpen(false);
  };

  const getSelectStyles = () => ({
    position: "relative",
    backgroundColor:
      (isDarkMode || isLightMode) &&
      !isDefaultMode &&
      !["/", "/request", "/cases"].includes(window.location.pathname)
        ? "transparent"
        : "white",
    fontFamily: "Futura PT, sans-serif",
    fontWeight: "400",
    lineHeight: "115%",
    borderRadius: "4px",
    alignSelf: "center",
    cursor: "pointer",
    // fontSize: "16px",
    ...sx,
  });

  const getButtonStyles = () => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: !isMobile ? "12px 24px" : "12px 10px",
    height: "100%",
    backgroundColor:
      (isDarkMode || isLightMode) && !isMobile ? "transparent" : "white",
    textAlign: "left",
    border: isOpen ? "1px solid black" : "1px solid transparent",
    borderRadius: "4px",
    color:
      ["/", "/request"].includes(window.location.pathname) && !isMobile
        ? "black"
        : ["/", "/request"].includes(window.location.pathname) && isMobile
          ? "black"
          : isLightMode && !isMobile
            ? "white"
            : "black",
    transition: "border 0.3s", // Add transition for border
    "&:hover": {
      border: isLightMode ? "1px solid white" : "1px solid black",
      textDecoration: "none",
    },
  });

  const getMenuStyles = () => ({
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    backgroundColor: isMobile ? "black" : "white",
    border: "0.5px solid rgba(237, 231, 225, 0.1)",
    borderRadius: "4px",
    marginTop: "4px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    zIndex: 1000,
    display: isOpen ? "block" : "none",
  });

  const getMenuItemStyles = (isSelected) => ({
    padding: "12px 10px",
    cursor: "pointer",
    backgroundColor: "transparent",
    textAlign: "center",
    color: isMobile ? "white" : "black",
    display: isSelected ? "none" : "block",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  });

  return (
    <Box ref={selectRef} sx={getSelectStyles()}>
      <Box onClick={() => setIsOpen(!isOpen)} sx={getButtonStyles()}>
        {selectedOption ? selectedOption.label : "Select an option"}
      </Box>

      <Box ref={menuRef} sx={getMenuStyles()}>
        {options.map((option) => (
          <Box
            key={option.value}
            onClick={() => handleSelect(option)}
            sx={getMenuItemStyles(option.value === value)}
          >
            {option.label}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MySelect;
