import { Card, useMediaQuery, useTheme } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ServiceContent } from "./ServiceContent";

// Import images directly
import SMM_service from "@assets/serviceImages/main_SMM.svg";
import Marketing_service from "@assets/serviceImages/main_marketing.svg";
import Production_service2 from "@assets/serviceImages/main_production.svg";
import Strategies_service from "@assets/serviceImages/main_strategy.svg";
import IT_service from "@assets/serviceImages/main_IT.svg";

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
        borderRadius: "24px",
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
          objectFit: "cover",
          objectPosition: objectPosition,
          borderRadius: "24px",
        }}
      />
      <ServiceContent title={title} items={items} />
    </Card>
  );
};
