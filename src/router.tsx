
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "@pages/home";
import CasesPage from "@pages/cases";
import CaseDetail from "@pages/cases/ui/CaseDetail";
import CaseDetailLayout from "./layout/CaseDetailLayout";
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

    ],
  },
  {
    path: "cases/:id",
    element: <CaseDetailLayout />,
    children: [
      {
        path: "",
        element: <CaseDetail />,
      }
    ],
  }
]);