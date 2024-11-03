
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DepartmentsPage from "./pages/DepartmentsPage/DepartmentsPage";
import ElectronicsPage from "./pages/ElectronicsPage/ElectronicsPage";
import ComputersPage from "./pages/ComputersPage/ComputersPage";
import MensFashionPage from "./pages/MensFashionPage/MensFashionPage";
import WomensFashionPage from "./pages/WomensFashionPage/WomensFashionPage";
import SportsOutdoorsPage from "./pages/SportsOutdoorsPage/SportsOutdoorsPage";
import HomeKitchenPage from "./pages/HomeKitchenPage/HomeKitchenPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/departments",
    element: <DepartmentsPage />,
  },
  {
    path: "/departments/electronics",
    element: <ElectronicsPage />,
  },
  {
    path: "/departments/computers",
    element: <ComputersPage />,
  },
  {
    path: "/departments/mens-fashion",
    element: <MensFashionPage />,
  },
  {
    path: "/departments/womens-fashion",
    element: <WomensFashionPage />,
  },
  {
    path: "/departments/sports-outdoors",
    element: <SportsOutdoorsPage />,
  },
  {
    path: "/departments/home-kitchen",
    element: <HomeKitchenPage />,
  },
]);

export default router;
