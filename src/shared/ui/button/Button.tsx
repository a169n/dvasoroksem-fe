import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CustomButton = styled(Button)<CustomButtonProps>(() => ({
  border: "1px solid black",
  color: "black",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
    transition: "0.5s",
  },
}));

export const MyButton: React.FC<CustomButtonProps> = ({
  children,
  sx,
  ...props
}) => {
  return (
    <CustomButton sx={sx} {...props}>
      {children}
    </CustomButton>
  );
};
