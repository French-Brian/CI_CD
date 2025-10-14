import React, { useEffect, useRef, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { Link, useNavigate } from "react-router-dom";
import Supabase from "../backend/supabase/supabaseClient.js";
import logo from "../assets/lightLogo_800X800.png";
const Registration = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const comFirmPassword = useRef(null);
  const [errMsg, setErrMsg] = useState("");
  const [countdown] = useState(3);

  const register = (email, password) =>
    Supabase.auth.signUp({ email, password });
  useEffect(() => {
    if (countdown <= 0) {
      navigate("/login");
      return;
    }
    const timer = setTimeout(() => {
      countdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (!comFirmPassword.current?.value) {
      setErrMsg("Please fill in the form");
    }

    if (!password.current?.value || !email.current?.value) {
      setErrMsg("Email and password are empty");
    }
    if (password.current?.value !== comFirmPassword.current?.value) {
      setErrMsg("Passwords are not the same");
    }

    if (
      email.current?.value &&
      password.current?.value === comFirmPassword.current?.value
    ) {
      try {
        const { data, error } = await register(
          email.current.value,
          password.current.value
        );
        if (data) {
          setErrMsg("Going to Login" + countdown);
        }

        if (error) {
          setErrMsg(error.code);
        }
      } catch (error) {
        setErrMsg("Error creating account:  " + error.code);
      }
    }
  };

  return (
    <>
      {" "}
      <div className="card container bg-white flex flex-col items-center justify-center min-h-screen">
        <img
          src={logo}
          style={{ width: "35%", height: "35%", objectFit: "scale-down" }}
        />
        <div className="bg-red-400 justify-center">{errMsg} </div>
        <h1 className=" text-[#2b6150] font-bold">Registration Page</h1>
        <p className="text-[#2b6150] font-bold">
          Please fill out the following information:
        </p>
        <form className="font-sans flex flex-col gap-4" onSubmit={handelSubmit}>
          <p className="boarder border-2 border-[#2b6150] rounded-md justify-around space-x-25">
            <label className="label">Enter a Email: </label>
            <input placeholder="email" ref={email}></input>
          </p>
          <p className="boarder border-2 border-[#2b6150]  rounded-md justify-around space-x-25">
            <label className="label">Enter a password: </label>
            <input
              type="password"
              placeholder="Password"
              ref={password}
            ></input>
          </p>
          <p className="boarder border-2 border-[#2b6150]  rounded-md justify-around space-x-25">
            <label className="label">Confirm password: </label>
            <input
              type="password"
              placeholder="Confirm password"
              ref={comFirmPassword}
            ></input>
          </p>

          <div className="buttons">
            <button className="primary">Submit</button>
            <Link to="/">
              <button className="primary">Cancel</button>
            </Link>
          </div>
        </form>
        <Link to="/Login">Have an Account</Link>
      </div>
      <Footer />
    </>
  );
};

export default Registration;
