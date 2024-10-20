import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const CustomButton = styled(Button)<CustomButtonProps>(() => ({
  border: "1px solid black",
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

export const MyButton: React.FC<CustomButtonProps> = ({
  children,
  startIcon,
  endIcon,
  sx,
  ...props
}) => {
  return (
    <CustomButton
      sx={sx}
      {...props}
      startIcon={startIcon ? startIcon : undefined}
      endIcon={endIcon ? endIcon : undefined}
    >
      {children}
    </CustomButton>
  );
};
