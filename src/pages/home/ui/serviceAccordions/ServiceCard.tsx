import { Card, useMediaQuery, useTheme } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ServiceContent } from "./ServiceContent";

// Import images directly
import SMM_service from "@assets/serviceImages/main_SMM.webp";
import Marketing_service from "@assets/serviceImages/main_marketing.webp";
import Production_service2 from "@assets/serviceImages/main_production.webp";
import Strategies_service from "@assets/serviceImages/main_strategy.webp";
import IT_service from "@assets/serviceImages/main_IT.webp";

// Mapping for images
const imageMap = {
  SMM_service,
  Marketing_service,
  Production_service2,
  Strategies_service,
  IT_service,
};

export const ServiceCard = ({
  title,
  imageKey,
  items,
  imageSize,
  objectPosition,
  isVertical,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isSmallScreen || isVertical ? "column" : "row",
        margin: 0,
        padding: "15px",
        borderRadius: "38px",
        backgroundColor: "#f7f7f7",
        border: "1px solid #ddd",
        gap: "30px",
        height: "auto",
        ":hover": {
          boxShadow: 3,
        },
      }}
    >
      <LazyLoadImage
        src={imageMap[imageKey]}
        alt={`${title} Service image`}
        effect="blur"
        style={{
          width: isSmallScreen ? "100%" : imageSize.width,
          height: isSmallScreen ? "auto" : imageSize.height,
          maxHeight: isSmallScreen ? "230px" : "auto",
          objectFit: "cover",
          objectPosition: isSmallScreen ? "top" : objectPosition,
          borderRadius: "38px",
        }}
      />
      <ServiceContent title={title} items={items} />
    </Card>
  );
};
