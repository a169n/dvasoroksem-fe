import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

// Styling for the button
const CustomButton = styled(Button)<CustomButtonProps>(() => ({
  border: "1px solid",
  color: "black",
  backgroundColor: "#fff",
  padding: "4px 16px",
  fontFamily: "Futura PT, sans-serif",
  fontWeight: 400,
  "&:hover": {
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
    transition: "0.5s",
  },
}));

// Forward the ref using React.forwardRef
export const MyButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, startIcon, endIcon, sx, ...props }, ref) => {
    return (
      <CustomButton
        sx={sx}
        {...props}
        startIcon={startIcon ? startIcon : undefined}
        endIcon={endIcon ? endIcon : undefined}
        ref={ref} // Pass ref here
      >
        {children}
      </CustomButton>
    );
  }
);

MyButton.displayName = "MyButton";
