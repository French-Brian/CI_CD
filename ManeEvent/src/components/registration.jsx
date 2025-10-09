import React, { useRef, useState } from "react";
import Footer from "./footer";
import Header from "./header";
// import { useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Supabase from "../backend/supabase/supabaseClient.js";

const Registration = () => {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const comFirmPassword = useRef(null);
  const commonName = useRef(null);
  const [client, setClient] = useState(false);
  const [provider, setProvider] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [msg, setMsg] = useState("");

  const register = (email, password) =>
    Supabase.auth.signUp({ email, password });

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
    if (!client && !provider) {
      setErrMsg("Select account type");
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

        navigate("/");
      } catch (error) {
        setErrMsg("Error creating account:  " + error);
      }
    }
  };

  return (
    <>
      <div className="card container bg-white flex flex-col items-center justify-center min-h-screen">
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
          <p className="boarder border-2 rounded-md border-[#2b6150] justify-around space-x-25">
            <label className="label">What you would like to be called: </label>
            <input placeholder="Name" id="name" ref={commonName}></input>
          </p>
          <div className="border-2 border-[#2b6150] rounded-md flex items-center justify-around p-4 space-x-6">
            <label className="font-bold">Select Account Type:</label>

            <label className="flex rounded-md items-center space-x-2 font-bold">
              <input
                type="radio"
                name="accountType"
                value="Client"
                className="p-2 rounded-full border-[#2b6150] border-2"
                onClick={() => {
                  setProvider(false);
                  setClient(true);
                }}
              />
              Client
            </label>

            <label className="flex items-center space-x-2 font-bold">
              <input
                type="radio"
                name="accountType"
                value="Provider"
                className="p-2"
                onClick={() => {
                  setProvider(true);
                  setClient(false);
                }}
              />
              Provider
            </label>
          </div>
          <div className="buttons">
            <button className="primary">Submit</button>
            <Link to="/">
              <button className="primary">Cancel</button>
            </Link>
          </div>
        </form>
      </div>
      <div>
        Have an Account <Link to="/Login"></Link>
      </div>

      <Footer />
    </>
  );
};

export default Registration;
