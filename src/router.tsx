import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "@pages/home";
import CasesPage from "@pages/cases";
import BauerCasePage from "@pages/cases/ui/bauer";
import QCSCasePage from "@pages/cases/ui/qcs";
import Grandcar2022CasePage from "@pages/cases/ui/grandcar2022";
import Grandcar2023CasePage from "@pages/cases/ui/grandcar2023";
import EverestCasePage from "@pages/cases/ui/everest";
import HelpOthersCasePage from "@pages/cases/ui/help-others";
import NomadCasePage from "@pages/cases/ui/nomad";
import SoyleCasePage from "@pages/cases/ui/soyle";
import CoffeeBoomCasePage from "@pages/cases/ui/coffee-boom";

const caseRoutes = [
  { path: "bauer", element: <BauerCasePage /> },
  { path: "qcs", element: <QCSCasePage /> },
  { path: "grandcar/2022", element: <Grandcar2022CasePage /> },
  { path: "grandcar/2023", element: <Grandcar2023CasePage /> },
  { path: "everest", element: <EverestCasePage /> },
  { path: "help-others", element: <HelpOthersCasePage /> },
  { path: "nomad", element: <NomadCasePage /> },
  { path: "soyle", element: <SoyleCasePage /> },
  { path: "coffee-boom", element: <CoffeeBoomCasePage /> },
];

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
        index: true,
      },
      ...caseRoutes.map((route) => ({
        path: `cases/${route.path}`,
        element: route.element,
      })),
    ],
  },
]);
