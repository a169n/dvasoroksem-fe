import { Box, CircularProgress, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { queryClient } from "@shared/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import theme from "./theme";
import "./i18n";

export const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="ru">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Suspense
            fallback={
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
              >
                <CircularProgress size={40} />
              </Box>
            }
          >
            <RouterProvider router={router} />
          </Suspense>
        </ThemeProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
};
