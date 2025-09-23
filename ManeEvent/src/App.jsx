import "./App.css";
import React from "react";
import logo from "./assets/lightLogo_800X800.png";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };
  const Login = () => {
    navigate("/login");
  };
  return (
    <>
      <div
        className="card"
        style={{
          width: "300px",
          height: "300px",
          overflow: "hidden",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
          position: "relative",
        }}
      >
        <img
          src={logo}
          style={{ width: "75%", height: "75%", objectFit: "scale-down" }}
        />
        <div className="buttons">
          <button className="primary" onClick={Login}>
            Login
          </button>
          <button className="primary" onClick={register}>
            Join
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
