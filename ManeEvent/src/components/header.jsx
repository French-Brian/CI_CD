import React from "react";
import "../App.css";

function Header() {
  return (
    <>
      <div className="buttons">
        <button className="primary">Search</button>
        <button className="primary">History</button>
        <button className="primary">Logout</button>
      </div>
    </>
  );
}
export default Header;
