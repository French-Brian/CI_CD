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
          style={{ width: "5%", height: "auto", objectFit: "scale-down", }}
          alt="logo"
        />
        <div className="nav-buttons">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">FAQ</a>
        </div>
        <div>
          <button className="primary">Login</button>
        </div>
      </div>
    </>
  );
}
export default Header;
