import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "@pages/home";
import CasesPage from "@pages/cases";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "cases",
        element: <CasesPage />,
      },
      {
        path: "request",
        // element: <RequestPage />,
      }
    ],
  },
]);
