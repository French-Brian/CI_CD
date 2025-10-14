import React, { useEffect, useState } from "react";
//import { userState } from "react";
import ClientHeader from "./ClientHeader";
import Supabase from "../../backend/supabase/supabaseClient";
import ProfileSetup from "./ProfileSetup";
import { useUser } from "../context/Authorization"; //passed from the authentication user form supabase
import Dashboard from "./dashboard";

const Home = () => {
  const { user, setUser } = useUser(); //getcontext- aka user is authorized via supabase
  const [profile, setProfile] = useState(null);
  const [err, setErr] = useState("");
  useEffect(() => {
    if (!user?.id || user?.profile) return; //see if there is a login user
    const getProfile = async () => {
      //unable to mod supabase user table to select roles and other data
      const { data, error } = await Supabase.from("profiles")
        .select("*")
        .eq("id", user.id); //check if the user set up profile

      if (error) {
        setErr(error.code || "Unknown Error");
      } else if (data.length > 0) {
        setProfile(data[0]); //response from supabasee
        setUser({ ...user, profile: profile });
      }
    };
    getProfile();
  }, [profile, setUser, user]);

  //  const strUser = JSON.stringify(user);
  //  console.log(strUser);

  return (
    <>
      <ClientHeader />
      <p>{err ? String(err) : ""}</p>
      {/* ck error if none don't render in tree */}
      <div className="p-25" id="profile">
        <h1>
          Welcome,{" "}
          {profile ? profile.displayname : "we did not find a profile for you."}
          {/**ck profile is set or not */}
        </h1>
        {!profile && <ProfileSetup onLoad={setProfile} />}
      </div>
      <div>
        <Dashboard />
      </div>
    </>
  );
};
export default Home;
