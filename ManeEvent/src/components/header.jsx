import React from "react";
import "../App.css";
import logo from "../assets/light logo.png";
<assets></assets>

function Header() {
  return (
    <>
      <div className="navbar">
        <img
          src={logo}
          style={{ width: "6%", height: "auto", objectFit: "scale-down", }}
          alt="logo"
        />
        <div className="nav-buttons">
        <button className="primary">Home</button>
        <button className="primary">About</button>
        <button className="primary">FAQ</button>
        <button className="primary">Login</button>
        </div>
      </div>
    </>
  );
}
export default Header;
