import React from "react";
import "../../App.css";
import logo from "../../assets/light logo.png";
/*
client headers for a user that is loged in and a client
*/

function ClientHeader() {
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
          <button className="primary">Log out</button>
        </div>
      </div>
    </>
  );
}
export default ClientHeader;
