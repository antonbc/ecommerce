import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DepartmentPage from "./pages/DepartmentPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/Department',
      element: <DepartmentPage />,
    },
  ])

function App(){
    return (
        <RouterProvider router={router} />
    )
}

export default App;