import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  CardContent,
  CardMedia,
  Card as MUICard,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MyButton } from "../button";

interface CardProps {
  image: string;
  imageMaxWidth: string;
  imageMaxHeight: string;
  rotateClockwise?: number;
  top?: number;
  marginTop?: number;
  title: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
  sx?: object;
  header?: React.ReactNode;
  children?: React.ReactNode;
  isMobile?: boolean;
}

export const MyCard: React.FC<CardProps> = ({
  image,
  imageMaxWidth,
  imageMaxHeight,
  rotateClockwise,
  top,
  marginTop,
  title,
  text,
  buttonText,
  onButtonClick,
  isMobile,
}) => {
  const [showBox, setShowBox] = useState(false);

  return (
    <MUICard
      onMouseEnter={() => setShowBox(true)}
      onMouseLeave={() => setShowBox(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "374px",
        borderRadius: "24px",
        boxShadow: "none",
        backgroundColor: "#f7f7f7",
        minHeight: { xl: "221px", lg: "300px" },
        margin: "0 auto",
        overflow: "visible",
        transition: "box-shadow 0.3s ease-in-out",
        height: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          padding: 0,
          margin: 0,
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          draggable={false}
          sx={{
            position: "relative",
            top: top || -60,
            zIndex: 10,
            objectFit: "cover",
            maxWidth: imageMaxWidth,
            maxHeight: imageMaxHeight,
            transform: `rotate(${rotateClockwise}deg)`,
            padding: 0,
          }}
        />
      </Box>
      <CardContent
        sx={{
          marginTop: marginTop,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            fontSize: { sm: "24px", md: "32px", xl: "24px" },
            textAlign: "start",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            opacity: showBox || isMobile ? 1 : 0,
            maxHeight: showBox || isMobile ? "300px" : "0px",
            overflow: "hidden",
            transition: "opacity 0.3s ease, max-height 0.4s ease",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "black",
              marginBottom: "8px",
              fontSize: isMobile ? "14px" : "18px",
              textAlign: "start",
            }}
          >
            {text}
          </Typography>
          <Box mt={2} style={{ display: "flex", justifyContent: "flex-start" }}>
            <MyButton
              onClick={onButtonClick}
              endIcon={<ArrowForwardIcon />}
              sx={{
                borderRadius: 0,
                textTransform: "none",
                fontSize: isMobile ? "14px" : "20px",
                fontWeight: 400,
              }}
            >
              {buttonText}
            </MyButton>
          </Box>
        </Box>
      </CardContent>
    </MUICard>
  );
};
