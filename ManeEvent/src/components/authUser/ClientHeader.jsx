import React from "react";
import "../../App.css";
import logo from "../../assets/light logo.png";
import { useNavigate } from "react-router-dom";
import Home from "./home";
import { useUser } from "../context/Authorization";
/*
client headers for a useUser that is loged in and a client
*/

function ClientHeader() {
  const { signOut, setUser } = useUser();
  const navigate = useNavigate();
  const logout = () => {
    signOut(); //sign out supabase
    setUser(null); //set app user to null
    navigate("/");
  };

  return (
    <>
      <div className="navbar">
        <img
          src={logo}
          style={{ width: "5%", height: "auto", objectFit: "scale-down" }}
          alt="logo"
        />
        <div className="nav-buttons">
          <a href="">Search</a>
          <a href="">Calender</a>
        </div>
        <div>
          <button className="primary" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
    </>
  );
}
export default ClientHeader;
