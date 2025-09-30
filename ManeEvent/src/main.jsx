import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.jsx";
import TestLog from "./testDoc/testlog.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
    <TestLog />
  </StrictMode>
);
