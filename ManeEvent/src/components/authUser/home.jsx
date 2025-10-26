import React, { useEffect, useState } from "react";
//import { userState } from "react";
import ClientHeader from "../clientHeader";
import Supabase from "../../backend/supabase/supabaseClient";
import { useUser } from "../context/Authorization"; //passed from the authentication user form supabase
import Dashboard from "./dashboard";

import ProviderHeader from "../providerHeader";
import Footer from "../footer";

const Home = () => {
  const { user } = useUser(); //getcontext- aka user is authorized via supabase
  const [err, setErr] = useState("");
  //userobject data
  const username = user.user_metadata.endUser.USERNAME;
  const role = user.user_metadata.endUser.ROLE;
  const displayName = user.user_metadata.endUser.DISPLAYNAME;
  const userId = user.id;
  let header;
  if (role === "CLIENT") {
    header = <ClientHeader />;
  }
  else if (role === "PROVIDER") {
    header = <ProviderHeader />;
  } //dynamically decides which header to load based on role form registering.
  else {
    header = <Header />;
  } //if there no role, then it is a public user

  useEffect(() => {
    if (user) {
      setErr("There was an error");
    }
  }, [user]);

  return (
    <>
      <div className="p-2">{header}</div>
      <p>{err ? String(err) : ""}</p>

      <div className="p-25 " id="profile">
        <h1>
          Welcome
          {displayName
            ? ", " + String(displayName)
            : "No displayname with your account"}
        </h1>
        UserName
        {username
          ? ": " + String(username)
          : "There was no username with your account"}
        <div className=" p-5  ">
          <Dashboard />
          <p>{userId}</p>
        </div>
      </div>

      <div className="p-3  fixed bottom-0 right-0 left-0">
        <p className="bg-[#2b6150] font-bold text-white">
          {role ? "Current Role: " + String(role) : "No role with account"}
        </p>
        <Footer />
      </div>
    </>
  );
};
export default Home;
