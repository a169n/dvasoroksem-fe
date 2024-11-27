import { Card, Grid, useMediaQuery, useTheme } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ServiceContent } from "./ServiceContent";

// Import images directly
import SMM_service from "@assets/SMM_service.png";
import Marketing_service from "@assets/Marketing_service.png";
import Production_service2 from "@assets/Production_service2.png";
import Strategies_service from "@assets/Strategies_service.png";
import IT_service from "@assets/IT_service.png";

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
  layout,
  objectPosition,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      sx={{
        borderRadius: "25px",
        backgroundColor: "#f7f7f7",
        border: "1px solid #ddd",
        padding: 2,
        ":hover": {
          boxShadow: 3,
        },
      }}
    >
      <Grid
        container
        spacing={2}
        flexDirection={
          isSmallScreen || layout === "vertical" ? "column" : "row"
        }
      >
        <Grid item>
          <LazyLoadImage
            src={imageMap[imageKey]}
            alt={`${title} Service image`}
            effect="blur"
            style={{
              width: isSmallScreen ? "100%" : imageSize.width,
              height: imageSize.height,
              objectFit: "cover",
              objectPosition: objectPosition,
              borderRadius: "24px",
            }}
          />
        </Grid>

        <Grid item xs>
          <ServiceContent title={title} items={items} titleColor="#bfbfbf" />
        </Grid>
      </Grid>
    </Card>
  );
};
