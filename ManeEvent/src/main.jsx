import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.jsx";
import Authorization from "./components/context/Authorization.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authorization>
      <AppRouter />
    </Authorization>
  </StrictMode>
);
