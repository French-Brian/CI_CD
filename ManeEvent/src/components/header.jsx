import React from "react";
import "../App.css";
import logo from "../assets/light logo.png";
import { useNavigate } from "react-router-dom";
<assets></assets>

function Header() {
  return (
    <>
      <div className="navbar">
        <img
          src={logo}
          onClick={() => window.location.href = '/'}
          style={{ width: "5%", height: "auto", objectFit: "scale-down", cursor: "pointer" }}
          alt="logo"
        />
          
        <div className="nav-buttons">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/faq">FAQ</a>
        </div>
        <div>
          <button className="primary" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
export default Header;
