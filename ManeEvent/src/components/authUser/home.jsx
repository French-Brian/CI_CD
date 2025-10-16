import React, { useState } from "react";
//import { userState } from "react";
import ClientHeader from "./ClientHeader";
import Supabase from "../../backend/supabase/supabaseClient";
import { useUser } from "../context/Authorization"; //passed from the authentication user form supabase
import Dashboard from "./dashboard";
import { use } from "react";
import 

const Home = () => {
  const { user } = useUser(); //getcontext- aka user is authorized via supabase
  const [err, setErr] = useState("");
  //userobject data
  const username = user.user_metadata.endUser.USERNAME;
  const role = user.user_metadata.endUser.ROLE;
  const displayName = user.user_metadata.endUser.DISPLAYNAME;
  const [header, setHeader] = useState();
  
  if (role === "CLIENT") { 
    setHeader(<ClientHeader />);
  }

   if (role === "PROVIDER") {
     setHeader(<ClientHeader />);
   }





  return (
    <>
      <ClientHeader />
      <p>{err ? String(err) : ""}</p>
      <div className="p-25" id="profile">
        <h1>
          Welcome,
          {displayName ? displayName : "No displayname with your account"}
          {username ? username : "There was no username with your account"}
          {role ? role : "No role with account"}
        </h1>
      </div>
      <div>
        <Dashboard />
      </div>
    </>
  );
};
export default Home;
