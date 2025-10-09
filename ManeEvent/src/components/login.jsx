import "../App.css";
import React from "react";
import logo from "../assets/lightLogo_800X800.png";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import FAQ from "./faq";
import { useAuth } from "./context/Authorization";
import { useRef, useState } from "react";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { user, session },
        error,
      } = await login(email.current.value, password.current.value);
      if (user && session) {
        navigate("/home");
      }
    } catch (error) {}
  };

  return (
    <>
      <FAQ />
      <div className="card container bg-white flex flex-col items-center justify-center min-h-screen">
        <img
          src={logo}
          style={{ width: "35%", height: "35%", objectFit: "scale-down" }}
        />
        <form className="form" onSubmit={handelSubmit}>
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
};

export default Login;
