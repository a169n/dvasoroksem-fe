import { Box, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Box sx={{ my: 4, border: "1px solid black", minHeight: "800px" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Sample Homepage
      </Typography>
    </Box>
  );
};
