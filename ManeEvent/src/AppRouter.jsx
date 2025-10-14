import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Registration from "./components/registration";
import Login from "./components/login";
import About from "./components/about";
import FAQ from "./components/faq";
import AuthRoute from "./AuthRoutes";
import Home from "./components/authUser/home";
import PublicWelcome from "./components/landingPage"; 

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="/" element={<App />} />
        <Route path="/" element={<PublicWelcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
