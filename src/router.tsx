
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "@pages/home";
import CasesPage from "@pages/cases";

// Here we import RequestPage depending how it's exported
// If RequestPage is default export from "@pages/request" use:
import RequestPage from "@pages/request";
// If it is a named export use:
// import { RequestPage } from "@pages/request";

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
        element: <RequestPage />,
      },
    ],
  },
]);