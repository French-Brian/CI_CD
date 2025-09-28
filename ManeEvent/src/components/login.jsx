import "../App.css";
import React from "react";
import logo from "../assets/lightLogo_800X800.png";
import Footer from "../components/footer";
// will use later import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  // will use latter const navigate = useNavigate();

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
          style={{ width: "70%", height: "70%", objectFit: "scale-down" }}
        />
        <form>
          <input placeholder="Username" id="username"></input>
          <input placeholder="Password" id="password"></input>
          <div className="buttons">
            <button className="primary">Submit</button>
            <Link to="/">
              <button className="primary">cancel</button>
            </Link>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
