import "../App.css";
import React from "react";
import logo from "../assets/lightLogo_800X800.png";
import Footer from "../components/footer";
// will use later import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FAQ from "./faq";

function Login() {
  // will use latter const navigate = useNavigate();

  return (
    <>
      <FAQ />
      <div className="card container bg-white flex flex-col items-center justify-center min-h-screen">
        <img
          src={logo}
          style={{ width: "35%", height: "35%", objectFit: "scale-down" }}
        />
        <form className="form">
          <p>
            <input
              className=" backdrop-blur-2xl font-bold"
              placeholder="Username"
              id="username"
            ></input>
          </p>
          <p className="p-5"></p>
          <p>
            <input
              type="password"
              className="backdrop-blur-2xl font-bold mask-auto"
              placeholder="Password"
              id="password"
            ></input>
          </p>
          <div className="buttons p-2">
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
