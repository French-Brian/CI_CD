import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Registration from "./components/registration";
import Login from "./components/login";
import FAQ from "./components/faq";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
