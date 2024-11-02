import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DepartmentPage from "./pages/DepartmentPage";
import ElectronicsPage from "./pages/ElectronicsPage";
import MobilePhonesPage from "./pages/MobilePhonesPage"; // New component

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/department',
        element: <DepartmentPage />,
    },
    {
        path: '/department/electronics',
        element: <ElectronicsPage />,
    },
    {
        path: '/department/electronics/mobile-phones',
        element: <MobilePhonesPage />, // New page for mobile phones
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
