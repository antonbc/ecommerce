import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter } from 'react-router-dom'
import "./index.css";
import HomePage from "./pages/HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <HomePage />
    </>
  </StrictMode>
);
