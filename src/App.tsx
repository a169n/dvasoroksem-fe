
import React from "react";
import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import { HeaderProvider } from "./shared/context/HeaderContext";
import { router } from "./router";
import theme from "./theme";
import { queryClient } from "@shared/api/queryClient";

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="ru">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <HeaderProvider>
            <RouterProvider router={router} />
          </HeaderProvider>
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </LocalizationProvider>
  );
};