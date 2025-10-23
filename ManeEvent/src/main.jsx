import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.jsx";
import { UserProvider } from "./components/context/Authorization.jsx";
import Pop_up from "./testDoc/pop_up.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <AppRouter />
    </UserProvider>
    <Pop_up />
  </StrictMode>
);
