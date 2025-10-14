import React, { useRef, useState } from "react";
import Footer from "../footer.jsx";
import Header from "./ClientHeader.jsx";
import { Link } from "react-router-dom";
import Supabase from "../../backend/supabase/supabaseClient.js";
import { useUser } from "../context/Authorization";
const ProfileSetup = () => {
  const [client, setClient] = useState(false);
  const [provider, setProvider] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const { user, setUser } = useUser(); //get the context if user has been authenticated will have user setUser to append to user object in context of app
  const [role, setRole] = useState(null);
  const displayName = useRef(null);

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (client) {
      setRole("Client");
    }
    if (provider) {
      setRole("Provider");
    }
    if (!role || !displayName.current?.value) {
      setErrMsg("please fill in the values");
      return;
    }
    {
      /**update the profiles table with the authneticated user id from supabase set role and displaynme
  
    my extend to hold appoinments/ other attributes. 
    
   */
    }
    const { data, error } = await Supabase.from("profiles").insert([
      {
        id: user.id,
        role: role,
        displayname: displayName.current.value,
      },
    ]);
    if (data) {
      setUser({
        user,
        profile: { role, displayname: displayName },
      });
    }
    {
      /**updaate the user object stored in the context of the app */
    }
    if (error) {
      console.log("Error inserting data:", error);
    } else {
      console.log("Data inserted successfully:", data);
    }
  };

  return (
    <>
      <div className="card container bg-white flex flex-col items-center justify-center min-h-screen">
        <div className="bg-red-400 justify-center">{errMsg} </div>
        <h1 className=" text-[#2b6150] font-bold">Update Your profile</h1>

        <form
          id="profile"
          className="font-sans flex flex-col gap-4"
          onSubmit={handelSubmit}
        >
          <p className="boarder border-2 rounded-md border-[#2b6150] justify-around space-x-25">
            <label htmlFor="Name" className="label">
              What you would like to be called:{" "}
            </label>
            <input placeholder="Name" id="name" ref={displayName}></input>
          </p>
          <div className="border-2 border-[#2b6150] rounded-md flex items-center justify-around p-4 space-x-6">
            <label htmlFor="accountType" className="font-bold">
              Select Account Type:
              <label className="flex rounded-md items-center space-x-2 font-bold">
                <input
                  type="radio"
                  name="accountTypeClient"
                  value="Client"
                  className="p-2 rounded-full border-[#2b6150] border-2"
                  onClick={() => {
                    setProvider(false);
                    setClient(true);
                  }}
                />
                Client
              </label>
              <label
                htmlFor="accountTypeP"
                className="flex items-center space-x-2 font-bold"
              >
                <input
                  type="radio"
                  name="accountTypeP"
                  value="Provider"
                  className="p-2"
                  onClick={() => {
                    setProvider(true);
                    setClient(false);
                  }}
                />
                Provider
              </label>
            </label>
          </div>
          <div className="buttons">
            <button type="submit" className="primary">
              Submit
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default ProfileSetup;
