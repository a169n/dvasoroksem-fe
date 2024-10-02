import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/home";
import DefaultLayout from "./layout/DefaultLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);
