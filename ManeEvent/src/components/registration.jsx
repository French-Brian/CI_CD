import React from "react";
import Footer from "./footer";
import Header from "./header";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Registration() {
  // will use later const navigate = useNavigate();

  return (
    <>
      <div className="card container bg-white flex flex-col items-center justify-center min-h-screen">
        <h1 className=" text-[#2b6150] font-bold">Registration Page</h1>
        <p className="text-[#2b6150] font-bold">
          Please fill out the following information:
        </p>
        <form className="font-sans flex flex-col gap-4">
          <p className="boarder border-2 border-[#2b6150] rounded-md justify-around space-x-25">
            <label className="label">Enter a username: </label>
            <input placeholder="Username" id="username"></input>
          </p>
          <p className="boarder border-2 border-[#2b6150]  rounded-md justify-around space-x-25">
            <label className="label">Enter a password: </label>
            <input placeholder="Password" id="password"></input>
          </p>
          <p className="boarder border-2 rounded-md border-[#2b6150] justify-around space-x-25">
            <label className="label">What you would like to be called: </label>
            <input placeholder="Name" id="name"></input>
          </p>
          <div className="border-2 border-[#2b6150] rounded-md flex items-center justify-around p-4 space-x-6">
            <label className="font-bold">Select Account Type:</label>

            <label className="flex rounded-md items-center space-x-2 font-bold">
              <input
                type="radio"
                name="accountType"
                value="Client"
                className="p-2 rounded-full border-[#2b6150] border-2"
              />
              Client
            </label>

            <label className="flex items-center space-x-2 font-bold">
              <input
                type="radio"
                name="accountType"
                value="Provider"
                className="p-2"
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

      <Footer />
    </>
  );
}
export default Registration;
