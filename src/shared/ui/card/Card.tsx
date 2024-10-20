import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  CardContent,
  CardMedia,
  Card as MUICard,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { MyButton } from "../button";

interface CardProps {
  image: string;
  title: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
  sx?: SxProps<Theme>;
}

export const MyCard: React.FC<CardProps> = ({
  image,
  title,
  text,
  buttonText,
  onButtonClick,
  sx,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MUICard
      sx={{
        display: "flex",
        marginTop: 4,
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "374px",
        borderRadius: "24px",
        boxShadow: "none",
        backgroundColor: "#f7f7f7",
        padding: 2,
        overflow: "visible",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        },
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          height: "auto",
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          height: "auto",
          maxHeight: "160px",
          marginBottom: "16px",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            position: "relative",
            top: -50,
            zIndex: 10,
            width: "auto",
            maxWidth: "200px",
            maxHeight: "160px",
            objectFit: "cover",
          }}
        />
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontSize: isMobile ? "24px" : "32px",
            textAlign: "start",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            color: "black",
            mb: 2,
            fontSize: isMobile ? "14px" : "18px",
            textAlign: "start",
          }}
        >
          {text}
        </Typography>
        <Box display="flex" justifyContent="flex-start">
          <MyButton
            onClick={onButtonClick}
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: 0,
              textTransform: "none",
              fontSize: isMobile ? "14px" : "20px",
              fonwWeight: 400,
            }}
          >
            {buttonText}
          </MyButton>
        </Box>
      </CardContent>
    </MUICard>
  );
};
