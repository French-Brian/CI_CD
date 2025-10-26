import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import "../App.css";
import logo from "../assets/light logo.png";
import { useNavigate } from "react-router-dom";
import { useUser } from "./context/Authorization";      // same hook as Home
import useLogout from "./logout";


<assets></assets>

function ClientHeader() {

 
  const { logout, error } = useLogout("/login");
  const navigate = useNavigate();

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
          <a href="">Services</a>

        </div>
        <div>
          <button className="primary" onClick={() => navigate("/clientProfile")}>
            Profile
          </button>
          <button className="primary" onClick={logout} style={{ backgroundColor: "black"}}>
            Logout
          </button>
        </div>
        
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

      </div>
    </>
  );
}
export default ClientHeader;
