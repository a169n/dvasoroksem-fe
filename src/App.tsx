import React, { useEffect, Suspense } from "react";
import {
  Box,
  CircularProgress,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { queryClient } from "@shared/api/queryClient";
import { router } from "./router";
import "./i18n";
import theme from "./theme";
import { LayoutProvider } from "./context/LayoutContext";

export const App: React.FC = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (isSmallScreen) return;

    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    let mouseX = 0,
      mouseY = 0,
      currentX = 0,
      currentY = 0;

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t;

    const updateCursor = () => {
      currentX = lerp(currentX, mouseX, 0.1) - 1.5;
      currentY = lerp(currentY, mouseY, 0.1) - 1;

      cursor.style.transform = `translate(${currentX / 0.8}px, ${currentY / 0.8}px)`;
      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const targetElements = document.querySelectorAll(".target-element");

    targetElements.forEach((targetElement) => {
      targetElement.addEventListener("mouseenter", () => {
        cursor.style.backgroundColor = "white";
        targetElement.classList.add("hover");
      });

      targetElement.addEventListener("mouseleave", () => {
        cursor.style.backgroundColor = "red";
        targetElement.classList.remove("hover");
      });
    });

    document.addEventListener("mousemove", handleMouseMove);
    updateCursor();

    return () => {
      cursor.remove();
      document.removeEventListener("mousemove", handleMouseMove);
      targetElements.forEach((targetElement) => {
        targetElement.removeEventListener("mouseenter", () => {});
        targetElement.removeEventListener("mouseleave", () => {});
      });
    };
  }, [isSmallScreen]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="ru">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <LayoutProvider>
            <Suspense
              fallback={
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="100vh"
                >
                  <CircularProgress size={40} color="secondary" />
                </Box>
              }
            >
              <RouterProvider router={router} />
            </Suspense>
          </LayoutProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </LocalizationProvider>
  );
};

export default App;
