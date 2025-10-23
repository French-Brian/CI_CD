import React, { useRef, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import { Link, useNavigate } from "react-router-dom";
import Supabase from "../backend/supabase/supabaseClient.js";
import logo from "../assets/lightLogo_800X800.png";
const Registration = () => {
  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);
  const username = useRef(null);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const comFirmPassword = useRef(null);
  const [errMsg, setErrMsg] = useState("");

  const register = (email, password) =>
    Supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          endUser: {
            /*creating 
            "user_metadata": {
              email: "b22french@outlook.com",
               email_verified: false,
                endUser: {
                  DISPLAYNAME: "displayname",
                  ROLE: "CLIENT",
                  USERNAME: "username",
                  },*/
            USERNAME: username.current.value,
            DISPLAYNAME: displayName.current.value.trim(),
            ROLE: role,
          },
        },
      },
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
    )
      try {
        const { data, error } = await register(
          email.current.value,
          password.current.value
        );
        if (data) {
          navigate("/");
        }

        if (error) {
          setErrMsg(error.code);
        }
      } catch (error) {
        setErrMsg("Error creating account:  " + error.code);
      }
  };

  return (
    <>
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
          <p className="p-3 boarder border-2 border-[#2b6150] rounded-md justify-around space-x-25">
            <label htmlFor="email" className="label">
              Enter a Email:{" "}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              ref={email}
            ></input>
          </p>
          <p className=" p-3 boarder border-2 border-[#2b6150]  rounded-md justify-around space-x-25">
            <label htmlFor="password" className="label">
              Enter a password:{" "}
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              ref={password}
            ></input>
          </p>
          <p className="p-3 boarder border-2 border-[#2b6150]  rounded-md justify-around space-x-25">
            <label htmlFor="Confirm password">Confirm password: </label>
            <input
              type="password"
              name="Confirm password"
              placeholder="Confirm password"
              ref={comFirmPassword}
            ></input>
          </p>
          <p className=" p-2 boarder border-2 border-[#2b6150]  rounded-md justify-around space-x-25">
            <label htmlFor="displayname " className="label">
              Display name:{" "}
            </label>
            <input
              type="Text"
              name="displayname"
              placeholder="Display name"
              autoComplete="nickname"
              ref={displayName}
            ></input>
          </p>
          <p className=" p-2 boarder border-2 border-[#2b6150]  rounded-md justify-around space-x-25">
            <label htmlFor="username " className="label">
              Username:{" "}
            </label>
            <input
              type="Text"
              name="username"
              placeholder="Username"
              autoCapitalize="yes"
              autoComplete="username"
              ref={username}
            ></input>
          </p>

          <p>
            <label className=" boarder border-2 border-[#2b6150] justify-around flex rounded-md items-center space-x-2 font-bold">
              Select Account Type:
              <label
                htmlFor="accountType"
                className="flex rounded-md items-center space-x-2 font-bold"
              >
                <input
                  type="radio"
                  name="accountType"
                  value="CLIENT"
                  id="client"
                  className="p-3 rounded-full border-[#2b6150] border-2"
                  onClick={() => {
                    setRole("CLIENT");
                  }}
                />
                Client
              </label>
              <label
                htmlFor="accountType"
                className="flex items-center space-x-2 font-bold p-4"
              >
                <input
                  type="radio"
                  name="accountType"
                  value="PROVIDER"
                  id="provider"
                  className="p-3"
                  onClick={() => {
                    setRole("PROVIDER");
                  }}
                />
                Provider
              </label>
            </label>
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
